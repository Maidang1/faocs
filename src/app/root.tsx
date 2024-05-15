import React, { useEffect, useRef } from 'react';
import { MDXProvider } from "@mdx-js/react"
import { ScrollRestoration, useLocation } from 'react-router-dom'
import { components } from './components';
import { Layout } from './layout';


interface RootProps {

  children: React.ReactChild;
  frontmatter: Record<string, any>
}

export const Root = (props: RootProps) => {

  const { children, frontmatter } = props;
  const { pathname } = useLocation();
  const previousPathRef = useRef<string>()
  useEffect(() => {
    previousPathRef.current = pathname
  })

  return (<MDXProvider components={components}>
    <Layout frontmatter={frontmatter}>
      {children}
    </Layout>
  </MDXProvider>)

}