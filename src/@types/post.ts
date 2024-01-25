import { type MarkdownInstance } from 'astro'

type frontmatter = {
  tags: string[]
  title: string
}
export type Post = MarkdownInstance<frontmatter>
