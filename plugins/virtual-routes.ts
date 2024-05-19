
import { JsPlugin, normalizePath } from "@farmfe/core"
import { extname, resolve, posix } from "node:path"
import { globby } from "globby"
import { buildServer } from "../cli/commands/dev"


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
        watcher.on('add', async () => {
          await buildServer()
          server.restart(async () => { })
        })
        watcher.on('unlink', async () => {
          await buildServer()
          server.restart(async () => { })
        })
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
        const pagesPath = posix.normalize(resolve(process.cwd(), 'site', 'pages')).replace(/\\/g, '/')
        let code = `export const routes = [`
        for (const path of paths) {
          const type = extname(path).match(/(mdx|md)/) ? "mdx" : "jsx";
          const replacer = pagesPath;
          const filePath = normalizePath(path).replace(`${pagesPath}/`, '')
          let pagePath = posix.normalize(path).replace(replacer, '').replace(/\.(.*)/, '')
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
        glob = `**/*.{md,mdx,ts,tsx,js,jsx}`;
        paths = await globby(glob, {
          cwd: pagesPath,
          absolute: true,
        })
        console.log("paths", paths)
      }
    }
  }
}