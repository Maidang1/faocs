import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routers';

import { hydrateLazyRoutes } from './utils/hydrateLazyRoutes';
import { ConfigProvider } from './app/hooks/useConfig';

hydrate();
async function hydrate() {
  await hydrateLazyRoutes(routes, '/');
  const router = createBrowserRouter(routes, { basename: '/' });
  hydrateRoot(
    document.getElementById('root')!,
    <ConfigProvider>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}
