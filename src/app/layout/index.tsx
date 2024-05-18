
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

  return <div className={cx(styles["container"], {
    [styles.landing]: isLanding,
  })}>{children}</div>

}