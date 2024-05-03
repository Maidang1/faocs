#!/usr/bin/env node
import { cac } from "cac"
import { dev } from "./commands/dev"
import { build } from "./commands/build"
import { preview } from "./commands/preview"
import { version } from "./version"

export const cli = cac('faocs')

cli.command('[root]')
  .alias('dev')
  .action(dev)

cli.command('build')
  .action(build)

cli.command('preview')
  .action(preview)

cli.help()
cli.version(version)
cli.parse()