import { copyFileSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import { logoSvg } from './archive-chrome.mjs'
import { renderArchivePage } from './render-archive-page.mjs'

const source = process.cwd()
const output = join(source, 'dist')
const buildFiles = new Set([
  '.git', '.github', '.gitignore', '.vercel', 'dist', 'node_modules',
  'package-lock.json', 'package.json', 'scripts', 'vercel.json',
])

let renderedPages = 0

function publishDirectory(directory, destination) {
  mkdirSync(destination, { recursive: true })
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (directory === source && buildFiles.has(entry.name)) continue

    const inputPath = join(directory, entry.name)
    const outputPath = join(destination, entry.name)
    if (entry.isDirectory()) {
      publishDirectory(inputPath, outputPath)
    } else if (entry.name.endsWith('.html')) {
      const original = readFileSync(inputPath, 'utf8')
      const pathname = '/' + relative(source, inputPath).split(sep).join('/')
      const rendered = renderArchivePage(original, pathname)
      if (rendered !== original) {
        writeFileSync(outputPath, rendered)
        renderedPages++
      } else {
        copyFileSync(inputPath, outputPath)
      }
    } else {
      copyFileSync(inputPath, outputPath)
    }
  }
}

rmSync(output, { recursive: true, force: true })
publishDirectory(source, output)
if (renderedPages === 0) throw new Error('No NewsDeeply pages were rendered')

copyFileSync(new URL('./archive-layout.css', import.meta.url), join(output, 'archive-layout.css'))
writeFileSync(join(output, 'archive-tnh-logo.svg'), logoSvg)
console.log(`Pre-rendered ${renderedPages} NewsDeeply pages`)
