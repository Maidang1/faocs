import { resolveConfig, Logger, createCompiler, createDevServer } from "@farmfe/core";
import path from "path";
const logger = new Logger();

const buildServer = async () => {
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
  resolvedClientConfig.jsPlugins?.forEach(plugin => {
    plugin.configureDevServer?.(devServer);
  })
  await devServer.listen();


}


async function main() {
  await buildServer()
  await buildClient()
}
main()