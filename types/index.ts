export type Route = {
  filePath: string
  lazy: () => Promise<Module>
  lastUpdatedAt?: number
  path: string
  type: 'jsx' | 'mdx'
}

export type Module = {
  default: React.ComponentType
  frontmatter?: any
}