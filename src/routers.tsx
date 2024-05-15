import { lazy } from 'react';
import { type RouteObject } from 'react-router-dom';
// @ts-expect-error
import { routes as routes_virtual } from 'virtual-routes';
import { Root } from "./app/root"
import React from 'react'
import './index.css';


const routes = [
  ...routes_virtual
    .filter(({ path }) => path !== '*')
    .map((route_virtual) => ({
      path: route_virtual.path,
      lazy: async () => {
        const { ...route } = await route_virtual.lazy();
        return {
          ...route,
          element: <Root><route.default /></Root >
        } satisfies RouteObject
      }
    })),
] satisfies RouteObject[]


export { routes };