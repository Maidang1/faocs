import { resolveConfig, Logger, createCompiler, createDevServer } from "@farmfe/core";
const logger = new Logger();

const main = async () => {
  const resolvedUserConfig = await resolveConfig({
    configPath: process.cwd()
  }, logger, "development");
  const compiler = await createCompiler(resolvedUserConfig);
  await compiler.compile();
  const devServer = await createDevServer(compiler, resolvedUserConfig, logger);
  resolvedUserConfig.jsPlugins?.forEach(plugin => {
    plugin.configureDevServer?.(devServer);
  })
  await devServer.listen();
}
main()