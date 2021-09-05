import { unified } from 'unified'
import remarkParse from 'remark-parse'
import { selectAll } from 'unist-util-select'
import type { Heading, Parent } from 'mdast'
import type { Node } from 'unist'
import { is } from 'unist-util-is'

const someText: string = `
# This is some markdown

## With headings

And a paragraph
`

interface Data extends Parent {}

class Something {
  constructor(someText: string) {
    const ast = unified().use(remarkParse).parse(someText)
    const astWithRemarkFrontmatter = unified()
      .use(remarkParse)
      .parse(someText)

    interface Data {}

    selectAll('root > *', ast).forEach((node: Node) => {
      if (is<Heading>(node, 'heading')) {
        if (node.depth == 2) {
          console.log('I found a heading with level 2')
        }
      }
    })
  }
}
