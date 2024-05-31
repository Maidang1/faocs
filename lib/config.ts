export interface Config {
  pagesDir: string
  dirs: () => string | string
}
export const defineConfig = (config: Config) => {

  return config
}