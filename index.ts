import { unified } from 'unified'
import remarkParse from 'remark-parse'
import { selectAll } from 'unist-util-select'
import type { Heading } from 'mdast'

const someText: string = `
# This is some markdown

## With headings

And a paragraph
`

class Something {
  constructor(someText: string) {
    const ast = unified().use(remarkParse).parse(someText)
    const astWithRemarkFrontmatter = unified()
      .use(remarkParse)
      .parse(someText)

    selectAll('root > *', ast).forEach((node: Heading) => {
      if (node.depth == 2) {
        console.log('I found a heading with level 2')
      }
    })
  }
}
