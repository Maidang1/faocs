import jiti from 'jiti'
import fs from 'fs'
import path from 'path'
import { Config } from '../../lib/config'
const extensions = ['.ts', '.js']
const configName = ['faocs.config', 'faocs']

export const resolveConfig = () => {
  const rootDir = process.cwd()
  let finalConfigPath = ''
  for (const ext of extensions) {
    for (const name of configName) {
      const configPath = path.join(rootDir, name + ext)
      if (fs.existsSync(configPath)) {
        finalConfigPath = configPath
        break;
      }
    }
  }
  const config = jiti(rootDir)(`${finalConfigPath}`)
  return config.default as Config
}


export const getPagesDir = () => {
  const config = resolveConfig();
  const { pagesDir } = config;
  let pagesPath = ''
  if (path.isAbsolute(pagesDir)) {
    pagesPath = pagesDir
  } else {
    pagesPath = path.join(process.cwd(), pagesDir)
  }
  return pagesPath
}