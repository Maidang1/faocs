import { createFormatAwareProcessors } from "@mdx-js/mdx/internal-create-format-aware-processors"
import { JsPlugin } from "@farmfe/core"
import { existsSync } from "fs"
import fsp from "fs/promises"
import { VFile } from "vfile"
export const mdxPlugin = () => {

  return {
    name: "mdxPlugin",

    load: {
      filters: {
        resolvedPaths: ['\\.mdx$']
      },
      async executor(param) {
        if (param.query.length === 0 && existsSync(param.resolvedPath)) {
          const data = await fsp.readFile(param.resolvedPath, 'utf-8');

          return {
            content: data,
            moduleType: 'mdx'
          }
        }

        return null
      }
    },
    transform: {
      filters: {
        moduleTypes: ["mdx"]
      },
      async executor(param, ctx) {
        const data = param.content;
        const file = new VFile({ path: param.resolvedPath, value: data })
        const gen = createFormatAwareProcessors();
        const compiled = await gen.process(file);
        const code = String(compiled.value)

        return {
          content: code,
          sourceMap: compiled.map,
          moduleType: 'js'
        }
      }
    }
  } as JsPlugin
}