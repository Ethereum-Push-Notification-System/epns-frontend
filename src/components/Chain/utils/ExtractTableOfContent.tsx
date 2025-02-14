// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import rehypeStringify from 'rehype-stringify';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';
import rehypeSlug from 'rehype-slug';

export const extractTOC = (markdownContent, headingLevels = [1, 2, 3]) => {
  const toc = [];

  const processor = unified()
    .use(remarkParse) // Parse Markdown
    .use(remarkRehype) // Convert to HTML AST
    .use(rehypeSlug) // Add slug IDs to headings
    .use(rehypeStringify); // Convert back to HTML string (optional)

  // Process the Markdown content through the pipeline
  const tree = processor.runSync(processor.parse(markdownContent));

  visit(tree, 'element', (node) => {
    if (
      node.tagName &&
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName) &&
      headingLevels.includes(parseInt(node.tagName[1], 10))
    ) {
      const id = node.properties?.id || '';

      // Extract the text content from the heading node
      const text = node.children
        .map((child) => {
          if (child.type === 'text') return child.value; // Direct text node
          if (child.children) {
            // Nested children (e.g., emphasis or links)
            return child.children
              .map((nestedChild) => nestedChild.value || '')
              .join('');
          }
          return '';
        })
        .join('');

      toc.push({ level: parseInt(node.tagName[1], 10), text, id });
    }
  });

  return toc;
};
