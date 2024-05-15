import { resolveConfig, Logger, createCompiler, createDevServer, createFileWatcher } from "@farmfe/core";
import path from "path";
const logger = new Logger();

export const buildServer = async () => {
  const resolveServerConfig = await resolveConfig({
    configPath: path.join(process.cwd(), 'farm.config.server.ts')
  }, logger, 'development')
  const compiler = await createCompiler(resolveServerConfig);
  await compiler.compile()
  compiler.writeResourcesToDisk();
}

const buildClient = async () => {
  const resolvedClientConfig = await resolveConfig({
    configPath: path.join(process.cwd(), 'farm.config.client.ts')
  }, logger, "development");
  const compiler = await createCompiler(resolvedClientConfig);
  const devServer = await createDevServer(compiler, resolvedClientConfig, logger);
  const inlineConfig = {
    root: process.cwd(),
    compilation: {
      lazyCompilation: false
    },
    server: resolvedClientConfig.server,
    clearScreen: true,
    configPath: path.join(process.cwd(), 'farm.config.client.ts'),
    mode: "development"
  } as any
  createFileWatcher(devServer, resolvedClientConfig, inlineConfig, logger);
  resolvedClientConfig.jsPlugins?.forEach(plugin => {
    plugin.configureDevServer?.(devServer);
  })
  await devServer.listen();
}

export const dev = async () => {
  await buildServer()
  await buildClient()
}
