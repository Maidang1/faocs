import React, { useEffect, useRef } from 'react';
import { MDXProvider } from "@mdx-js/react"
import { ScrollRestoration, useLocation } from 'react-router-dom'



interface RootProps {

  children: React.ReactChild;
}

export const Root = (props: RootProps) => {

  const { children } = props;
  const { pathname } = useLocation();
  const previousPathRef = useRef<string>()
  useEffect(() => {
    previousPathRef.current = pathname
  })

  return (<MDXProvider>{children}</MDXProvider>)

}