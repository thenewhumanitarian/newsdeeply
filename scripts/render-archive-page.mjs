import { parse } from 'parse5'
import { banner, notice, footer, landingIntro, faviconUrl } from './archive-chrome.mjs'
import { renderArchiveEditorial } from './archive-editorial.mjs'

const htmlNamespace = 'http://www.w3.org/1999/xhtml'
const overrideSource = /^(?:(?:https?:)?\/\/deeply\.thenewhumanitarian\.org)?\/override\.js(?:[?#].*)?$/i
const misplacedOverride = /<script src="https:\/\/deeply\.thenewhumanitarian\.org\/override\.js" type="text\/javascript"><\/script><\/body>(?=\s*<\/script>\s*<\/body>)/
const originalThemeSource = /^https?:\/\/(?:www\.newsdeeply\.com|www\.deeply\.thenewhumanitarian\.org)\/tnh-deeply-minimal\.css$/i
const archiveStylesheet = /^https?:\/\/newsdeeply-www\.s3\.amazonaws\.com\/assets\/application-[a-f0-9]+\.css$/i

function attribute(element, name) {
	return element.attrs.find((attribute) => attribute.name === name)?.value
}

function hasClass(element, className) {
	return attribute(element, 'class')?.split(/\s+/).includes(className)
}

function* descendants(node) {
	for (const child of node.childNodes ?? []) {
		yield child
		yield* descendants(child)
	}
}

function firstBodyOffset(body, fallback) {
	let start = fallback
	for (const node of descendants(body)) {
		if (node.sourceCodeLocation) {
			start = Math.min(start, node.sourceCodeLocation.startOffset)
		}
	}
	return start
}

function containsText(element, value) {
	return [...descendants(element)]
		.filter((node) => node.nodeName === '#text')
		.map((node) => node.value)
		.join('')
		.includes(value)
}

function isInside(element, ancestor) {
	for (let parent = element.parentNode; parent; parent = parent.parentNode) {
		if (parent === ancestor) return true
	}
	return false
}

function replaceElementContents(edits, element, content) {
	const location = element?.sourceCodeLocation
	if (location?.startTag && location.endTag) {
		edits.push({ start: location.startTag.endOffset, end: location.endTag.startOffset, content })
	}
}

function replaceAttribute(edits, element, name, content) {
	const location = element.sourceCodeLocation?.attrs?.[name]
	if (location) {
		edits.push({ start: location.startOffset, end: location.endOffset, content })
	}
}

function applyEdits(source, edits) {
	const output = []
	let offset = 0
	for (const { start, end, content } of edits.sort((a, b) => a.start - b.start || a.end - b.end)) {
		if (start < offset) {
			throw new Error('Overlapping HTML edits while rendering the archive page')
		}
		output.push(source.slice(offset, start), content)
		offset = end
	}
	output.push(source.slice(offset))
	return output.join('')
}

export function renderArchivePage(source, pathname = '') {
	if (!source.includes('override.js')) return source

	const page = renderArchiveEditorial(source, pathname)
	const document = parse(page, { sourceCodeLocationInfo: true })
	const html = document.childNodes.find((node) => node.tagName === 'html')
	const head = html.childNodes.find((node) => node.tagName === 'head')
	const body = html.childNodes.find((node) => node.tagName === 'body')
	if (!body) return source
	const elements = [...descendants(html)].filter((node) => node.namespaceURI === htmlNamespace)
	const isRedirect = elements.some((node) => node.tagName === 'meta' && attribute(node, 'http-equiv')?.toLowerCase() === 'refresh')
	if (isRedirect) return source

	const overrides = elements.filter((node) => node.tagName === 'script' && overrideSource.test(attribute(node, 'src') ?? ''))
	// Include the Malnutrition mirror without changing its malformed inline script.
	if (overrides.length === 0 && !misplacedOverride.test(page)) return source

	const bodyLocation = body.sourceCodeLocation
	const bodyEnd = bodyLocation?.endTag?.startOffset ?? html.sourceCodeLocation?.endTag?.startOffset ?? page.length
	const bodyStart = bodyLocation?.startTag?.endOffset ?? firstBodyOffset(body, bodyEnd)
	const headEnd = head.sourceCodeLocation?.endTag?.startOffset ?? bodyLocation?.startTag?.startOffset ?? bodyStart

	const edits = []
	const title = head.childNodes.find((node) => node.tagName === 'title')
	const titleLocation = title?.sourceCodeLocation
	if (titleLocation?.startTag && titleLocation.endTag) {
		const originalTitle = page.slice(titleLocation.startTag.endOffset, titleLocation.endTag.startOffset)
		const archiveTitle = originalTitle.replace('News Deeply', 'Deeply Humanitarian')
		if (archiveTitle !== originalTitle) replaceElementContents(edits, title, archiveTitle)
	}

	for (const link of elements.filter((node) => node.tagName === 'link')) {
		const href = attribute(link, 'href') ?? ''
		if (originalThemeSource.test(href)) {
			replaceAttribute(edits, link, 'href', 'href="/tnh-deeply-minimal.css"')
		}
		// Load the existing stylesheet before first paint while keeping the archived noscript fallback.
		if (
			link.parentNode === head &&
			archiveStylesheet.test(href) &&
			attribute(link, 'rel') === 'stylesheet' &&
			attribute(link, 'media') === 'none' &&
			attribute(link, 'onload') === "media='all'"
		) {
			replaceAttribute(edits, link, 'media', 'media="all"')
			replaceAttribute(edits, link, 'onload', '')
		}
	}

	edits.push({
		start: headEnd,
		end: headEnd,
		content: `\n<link rel="stylesheet" href="/archive-layout.css">\n<link rel="stylesheet" href="/000_overrides/tnh-deeply-minimal.css">\n<link rel="shortcut icon" id="dynamic-favicon" href="${faviconUrl}">\n`,
	})

	const archiveFooter = elements.find((node) => node.tagName === 'footer' && hasClass(node, 'footer-nav'))
	const archiveIntro = elements.find((node) => hasClass(node, 'our-platforms'))
	replaceElementContents(edits, archiveFooter, footer)
	replaceElementContents(edits, archiveIntro, landingIntro)
	const deeperCoverage = elements.find((node) =>
		node.tagName === 'h2' &&
		!isInside(node, archiveFooter) &&
		!isInside(node, archiveIntro) &&
		containsText(node, 'More in-depth coverage'),
	)
	replaceElementContents(edits, deeperCoverage, 'In-depth coverage')

	edits.push({ start: bodyStart, end: bodyStart, content: `\n${banner}\n${notice}\n<div class="content-wrap">\n` })
	edits.push({ start: bodyEnd, end: bodyEnd, content: '\n</div>\n' })
	for (const script of overrides) {
		const { startOffset, endOffset } = script.sourceCodeLocation
		edits.push({ start: startOffset, end: endOffset, content: '' })
	}

	return applyEdits(page, edits)
}
