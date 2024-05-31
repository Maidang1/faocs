import { JsPlugin } from "@farmfe/core";
import { resolveConfig } from "../src/utils/config";
import { Config } from "../lib/config";


export function virtualConfig(): JsPlugin {
  const virtualModuleId = 'virtual-config'
  return {
    name: "faocs-config",
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
      executor: async (params) => {

        const config = resolveConfig()

        const code = `
        ${deserializeFunctionsStringified}
        export const config = deserializeFunctions(${serializeConfig(config)})`
        return {
          content: code,
          sourceMap: null,
          moduleType: "js"
        }
      }
    }
  }
}

export function serializeConfig(config: Config) {
  return JSON.stringify(serializeFunctions(config))
}

export function serializeFunctions(value: any, key?: string): any {
  if (Array.isArray(value)) {
    return value.map((v) => serializeFunctions(v))
  } else if (typeof value === 'object' && value !== null) {
    return Object.keys(value).reduce((acc, key) => {
      if (key[0] === '_') return acc
      acc[key] = serializeFunctions(value[key], key)
      return acc
    }, {} as any)
  } else if (typeof value === 'function') {
    let serialized = value.toString()
    if (key && (serialized.startsWith(key) || serialized.startsWith(`async ${key}`))) {
      serialized = serialized.replace(key, 'function')
    }
    return `_vocs-fn_${serialized}`
  } else {
    return value
  }
}

export const deserializeFunctionsStringified = `
  function deserializeFunctions(value) {
    if (Array.isArray(value)) {
      return value.map(deserializeFunctions)
    } else if (typeof value === 'object' && value !== null) {
      return Object.keys(value).reduce((acc, key) => {
        acc[key] = deserializeFunctions(value[key])
        return acc
      }, {})
    } else if (typeof value === 'string' && value.includes('_vocs-fn_')) {
      return new Function(\`return \${value.slice(9)}\`)()
    } else {
      return value
    }
  }
`
