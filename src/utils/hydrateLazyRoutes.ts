import { type RouteObject, matchRoutes } from 'react-router-dom'

export async function hydrateLazyRoutes(routes: RouteObject[], basePath?: string) {
  const lazyMatches = matchRoutes(routes, window.location, basePath)?.filter(m => m.route.lazy)

  if (lazyMatches && lazyMatches.length > 0) {
    await Promise.all(
      lazyMatches.map(async (m) => {
        const routeModule = await m.route.lazy!();
        Object.assign(m.route, {
          ...routeModule,
          lazy: undefined
        })
      })
    )
  }
}