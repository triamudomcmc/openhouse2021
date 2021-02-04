import unified from 'unified'
import parse from 'remark-parse'
import remark2rehype from 'remark-rehype'
import math from 'remark-math'
import katex from 'rehype-katex'
import highlight from '@mapbox/rehype-prism'
import html from 'remark-html'
import remark from 'remark'

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
