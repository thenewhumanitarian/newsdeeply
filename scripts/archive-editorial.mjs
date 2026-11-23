import { parse } from 'parse5'

function findElement(parent, matches) {
  for (const child of parent.childNodes ?? []) {
    if (child.sourceCodeLocation?.startTag && matches(child)) return child
    const nested = findElement(child, matches)
    if (nested) return nested
  }
}

function hasClass(element, name) {
  const classes = element.attrs?.find(attribute => attribute.name === 'class')
  return classes?.value.split(/\s+/).includes(name)
}

function updatePeacebuilding(html) {
  const newAboutContentOne = html.replace('is the Managing Editor', 'was the Managing Editor')
  const newAboutContentTwo = newAboutContentOne.replace('is the Deputy Managing', 'was the Deputy Managing')
  const newAboutContentThree = newAboutContentTwo.replace('is the Community Editor', 'was the Community Editor')
  const newAboutContentFour = newAboutContentThree.replace(
    '<p><span class="start">Peacebuilding Deeply is </span> an independent news and information platform covering global peace and security. Our reporters and editors provide a mix of investigative and data-driven journalism, on-the-ground reporting, clear and compelling visuals and high-level events. We want to answer the question: how do you put a country back&nbsp;together?</p>',
    '<p style="margin-bottom: 2rem;">Peacebuilding Deeply provides a mix of investigative and data-driven journalism, on-the-ground reporting, clear and compelling visuals and high-level events. We want to answer the question: how do you put a country back together?</p>'
  )
  const newAboutContentFive = newAboutContentFour.replace(
    '<p>The platform will engage local and international actors to connect expert voices and coordinate peacebuilding efforts and insights in one centralized hub. By building a passionate community and connecting a variety of disciplines, Peacebuilding Deeply provides a forum for learning, knowledge-sharing and&nbsp;problem-solving.</p>',
    '<p>The platform engages local and international actors to connect expert voices and coordinate peacebuilding efforts and insights in one centralized hub. By building a passionate community and connecting a variety of disciplines, Peacebuilding Deeply provides a forum for learning, knowledge-sharing and problem-solving.</p>'
  )
  const newAboutContentSix = newAboutContentFive.replace(
    '<p>News Deeply is a network of theme-driven information and community platforms, led by an award-winning team of domain-expert journalists. In an increasingly complicated information environment, we surface the vital insights and stakeholder connections that help to advance conversations and inform decision-making on the issues that matter, deeply, to the state of our world today. For more information on News Deeply and its other platforms, please visit <a href="../index" target="_blank" rel="noopener">www.newsdeeply.com</a>.</p>',
    ''
  )
  const newAboutContentSeven = newAboutContentSix.replace(
    '<p>Peacebuilding Deeply is the latest platform launched by the team behind Syria Deeply – News Deeply’s flagship&nbsp;platform.</p>',
    ''
  )
  const newAboutContentEight = newAboutContentSeven.replace('<p>', '<p style="margin-bottom: 2rem;">')
  return newAboutContentEight
}

const renamedProfile = '/womenandgirls/contributor/kirsten-bickford'
const renamedArticle = '/womenandgirls/community/2017/04/26/achieving-gender-equality-means-getting-more-women-online'
const hiddenProfile = '/refugees/contributor/mat-nashed'

// Preserve the existing route-specific edits when publishing the layout as HTML.
export function renderArchiveEditorial(source, pathname) {
  const route = pathname.replace(/\.html$/, '')
  if (![renamedProfile, renamedArticle, hiddenProfile, '/peacebuilding/about'].includes(route)) {
    return source
  }

  const document = parse(source, { sourceCodeLocationInfo: true })
  const edits = []
  const elementWithClass = name => findElement(document, node => hasClass(node, name))
  const replace = (element, transform, inner = false) => {
    if (!element) return
    const location = element.sourceCodeLocation
    const start = inner ? location.startTag.endOffset : location.startOffset
    const end = inner ? location.endTag.startOffset : location.endOffset
    edits.push({ start, end, text: transform(source.slice(start, end)) })
  }

  if (route === '/peacebuilding/about') {
    replace(elementWithClass('detail'), updatePeacebuilding, true)
  } else if (route === hiddenProfile) {
    replace(elementWithClass('header-bio'), html => html.replace(
      '<header class="inner standard header-bio">',
      '<header class="inner standard header-bio" style="display: none">',
    ))
  } else if (route === renamedProfile) {
    replace(elementWithClass('header-bio'), html => html
      .replace(/<h2>[\s\S]*?<\/h2>/, '<h2>Kirsten Smith</h2>')
      .replace(/<p(?:\s[^>]*)?>[\s\S]*?(?=<a class="rss-link)/, ''))
  } else {
    const metadata = elementWithClass('meta')
    const byline = metadata && findElement(metadata, node => node.tagName === 'a')
    replace(byline, () => 'Kirsten Smith', true)
    replace(elementWithClass('author'), html => html
      .replace(/<figure\b[^>]*><\/figure>/, '')
      .replace(/(<h3\b[^>]*><a\b[^>]*>)[^<]*/, '$1Kirsten Smith')
      .replace(/<h4>[\s\S]*?<\/h4>/, '')
      .replace(/<p(?:\s[^>]*)?>[\s\S]*/, '</div>'))
  }

  for (const { start, end, text } of edits.sort((a, b) => b.start - a.start)) {
    source = source.slice(0, start) + text + source.slice(end)
  }
  return source
}
