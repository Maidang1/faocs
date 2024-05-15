import { lazy } from 'react';
import { type RouteObject } from 'react-router-dom';
// @ts-ignore
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
        const { frontmatter, ...route } = await route_virtual.lazy();
        console.log("route", frontmatter)
        return {
          ...route,
          element: <Root frontmatter={frontmatter}><route.default /></Root >
        } satisfies RouteObject
      }
    })),
] satisfies RouteObject[]


export { routes };