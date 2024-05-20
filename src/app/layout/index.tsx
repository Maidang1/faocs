
import React from 'react'
import cx from 'classnames'
import styles from './index.module.scss'

interface LayoutProps {
  frontmatter?: Record<string, any>
  children: React.ReactChild
}

export const Layout = (props: LayoutProps) => {


  const { children, frontmatter } = props
  const isLanding = frontmatter?.layout === 'landing'

  return <div className={cx(styles["container"], "overflow-y-auto h-screen overflow-x-hidden bg-gradient-radial pb-20 dark:bg-black dark:text-white", {
    [styles.landing]: isLanding,
  })}>
    <main className='flex m-auto px-8 container mx-auto max-w-5xl prose mt-7'>
      <div className='w-full h-full'>
        {children}
      </div>
    </main>
  </div>

}