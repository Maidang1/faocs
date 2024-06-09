import { watch, start } from "@farmfe/core";
import path from "path";

export const dev = async () => {
  buildServerAndClient()
}


export const buildServerAndClient = async () => {
  await watch({
    configPath: path.join(process.cwd(), 'farm.config.server.ts'),
  })
  await start({
    configPath: path.join(process.cwd(), 'farm.config.client.ts'),
  })
}