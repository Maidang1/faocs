import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticHandlerContext, StaticRouterProvider, createStaticHandler, createStaticRouter } from 'react-router-dom/server';
import { routes } from './routers';
import { type Context } from "koa"


export default async function render(ctx: Context) {
  const { query, dataRoutes } = createStaticHandler(routes, { basename: "/" })
  const fetchRequest = createFetchRequest(ctx)
  const context = await query(fetchRequest)
  console.log("context", context)
  const router = createStaticRouter(dataRoutes, context as StaticHandlerContext)


  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouterProvider router={router} context={context as StaticHandlerContext} />
    </React.StrictMode>
  );

  console.log("html", html)
  return html

}

export function createFetchRequest(ctx: Context) {
  const origin = `http://${ctx.request.headers.host}`
  const url = new URL(origin)
  const controller = new AbortController()
  ctx.req.on('close', () => controller.abort())

  const headers = new Headers()

  for (const [key, values] of Object.entries(ctx.headers)) {
    if (values) {
      if (Array.isArray(values)) for (const value of values) headers.append(key, value)
      else headers.set(key, values as any)
    }
  }

  const init: RequestInit = {
    method: ctx.method,
    headers,
    signal: controller.signal,
  }

  // @ts-ignore
  if (ctx.method !== 'GET' && ctx.method !== 'HEAD') init.body = ctx.request.body

  return new Request(url.href, init)

}



