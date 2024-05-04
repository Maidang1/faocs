
import { JsPlugin } from "@farmfe/core"
import { extname, resolve } from "node:path"
import { globby } from "globby"

export function virtualRoutes(): JsPlugin {
  const virtualModuleId = 'virtual-routes'
  let glob: string
  let paths: string[] = []
  return {
    name: "routes",

    configureDevServer(server) {
      const watcher = server.watcher.getInternalWatcher();
      const pagesPath = resolve(process.cwd(), 'site', 'pages')
      if (pagesPath) {
        watcher.add(pagesPath)
        watcher.on('add', () => server.restart(async () => { }))
        watcher.on('unlink', () => server.restart(async () => { }))
      }
    },
    resolve: {
      filters: {
        sources: [virtualModuleId],
        importers: [".*"]
      },
      executor: async (params) => {

        if (params.source === virtualModuleId) {
          return {
            resolvedPath: virtualModuleId
          } as any
        }
        return null;
      }
    },

    load: {
      filters: {
        resolvedPaths: [virtualModuleId],
      },
      executor: async (param) => {
        const pagesPath = resolve(process.cwd(), 'site', 'pages');
        let code = `export const routes = [`
        for (const path of paths) {
          const type = extname(path).match(/(mdx|md)/) ? "mdx" : "jsx";
          const replacer = glob.split('*')[0];
          const filePath = path.replace(`${pagesPath}/`, '')
          let pagePath = path.replace(replacer, '').replace(/\.(.*)/, '')
          let lastUpdatedAt: number | undefined

          if (pagePath.endsWith('index')) {
            pagePath = pagePath.replace('index', '').replace(/\/$/, '')
          }
          code += `  { lazy: () => import("${path}"), path: "/${pagePath}", type: "${type}", filePath: "${filePath}", lastUpdatedAt: ${lastUpdatedAt} },`
          if (pagePath) {
            code += `  { lazy: () => import("${path}"), path: "/${pagePath}.html", type: "${type}", filePath: "${filePath}", lastUpdatedAt: ${lastUpdatedAt} },`
          }
        }
        code += ']'

        return {
          content: code,
          sourceMap: null,
          moduleType: "js"
        }
      }
    },

    buildStart: {
      async executor() {
        const pagesPath = resolve(process.cwd(), 'site', 'pages')
        glob = `${pagesPath}/**/*.{md,mdx,ts,tsx,js,jsx}`;
        paths = await globby(glob)
      }
    }
  }
}