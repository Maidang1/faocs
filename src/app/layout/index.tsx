import React from 'react';
import cx from 'classnames';
import styles from './index.module.scss';
import { useConfig } from '../hooks/useConfig';
import { useLocation, Link } from 'react-router-dom';
import * as NavigationMenu from '../components/navigationMenu';
import { useActiveNavIds } from '../hooks/useActiveNavIds';
import { SideBar } from '../components/Sidebar';

interface LayoutProps {
  frontmatter?: Record<string, any>;
  children: React.ReactChild;
}

const socialIconMap = {
  github: <div className='i-simple-icons-github'></div>,
};

export const Layout = (props: LayoutProps) => {
  const { children, frontmatter } = props;
  const isLanding = frontmatter?.layout === 'landing';
  const { socials, topNav } = useConfig();
  const location = useLocation();

  const showSidebar = location.pathname !== '/';

  return (
    <div className='flex flex-col h-full w-full'>
      <div className='header flex  justify-between h-[60px] px-[20px] items-center'>
        <div className='search'>11</div>
        <section className='flex text-[#646464] items-stretch'>
          <div className='top-nav text-sm flex items-center'>
            <Navigation />
          </div>
          <div className='flex items-center'>
            <div className='bg-[#ececec] w-[1px] h-[20px] mx-4'></div>
          </div>
          <div className='socials text-2xl flex items-center'>
            {socials?.map((social) => (
              <Link to={social.link!} target='_blank' key={social.link}>
                {socialIconMap[social.icon]}
              </Link>
            ))}
          </div>
        </section>
      </div>
      <div
        className={cx(
          styles['container'],
          'overflow-y-auto h-screen overflow-x-hidden bg-gradient-radial pb-20 dark:bg-black dark:text-white',
          {
            [styles.landing]: isLanding,
          }
        )}
      >
        <main className='flex m-auto px-8 container mx-auto max-w-5xl prose mt-7 flex-1'>
          <div className='w-full h-full flex'>
            {showSidebar && <SideBar />}
            <div className='flex-1 ml-5'>{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
};

function Navigation() {
  const { topNav } = useConfig();
  if (!topNav) return null;

  const { pathname } = useLocation();
  const activeIds = useActiveNavIds({ pathname, items: topNav });

  return (
    <NavigationMenu.Root delayDuration={0}>
      <NavigationMenu.List>
        {topNav.map((item, i) =>
          item.link ? (
            <NavigationMenu.Link
              key={i}
              active={activeIds.includes(item.id)}
              className={styles.item}
              href={item.link!}
            >
              {item.text}
            </NavigationMenu.Link>
          ) : item.items ? (
            <NavigationMenu.Item key={i} className={styles.item}>
              <NavigationMenu.Trigger active={activeIds.includes(item.id)}>
                {item.text}
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className={styles.content}>
                <NavigationMenuContent items={item.items} />
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          ) : null
        )}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

function NavigationMenuContent({ items }: { items: any[] }) {
  const { pathname } = useLocation();
  const activeIds = useActiveNavIds({ pathname, items });
  return (
    <ul>
      {items?.map((item, i) => (
        <NavigationMenu.Link
          key={i}
          active={activeIds.includes(item.id)}
          href={item.link!}
        >
          {item.text}
        </NavigationMenu.Link>
      ))}
    </ul>
  );
}
