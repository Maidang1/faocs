import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {
  StaticHandlerContext,
  StaticRouterProvider,
  createStaticHandler,
  createStaticRouter,
} from 'react-router-dom/server';
import { routes } from './routers';
import { type Context } from 'koa';
import { ConfigProvider } from './app/hooks/useConfig';

export default async function render(ctx: Context) {
  const { query, dataRoutes } = createStaticHandler(routes, { basename: '/' });
  const fetchRequest = createFetchRequest(ctx);
  const context = await query(fetchRequest);
  const router = createStaticRouter(
    dataRoutes,
    context as StaticHandlerContext
  );

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <ConfigProvider>
        <StaticRouterProvider
          router={router}
          context={context as StaticHandlerContext}
        />
      </ConfigProvider>
    </React.StrictMode>
  );

  return html;
}

export function createFetchRequest(ctx: Context) {
  const origin = `http://${ctx.request.headers.host}`;
  const url = new URL(ctx.request.originalUrl || ctx.request.url, origin);
  const controller = new AbortController();
  ctx.req.on('close', () => controller.abort());

  const headers = new Headers();

  for (const [key, values] of Object.entries(ctx.headers)) {
    if (values) {
      if (Array.isArray(values))
        for (const value of values) headers.append(key, value);
      else headers.set(key, values as any);
    }
  }

  const init: RequestInit = {
    method: ctx.method,
    headers,
    signal: controller.signal,
  };

  // @ts-ignore
  if (ctx.method !== 'GET' && ctx.method !== 'HEAD')
    // @ts-ignore
    init.body = ctx.request.body;

  return new Request(url.href, init);
}
