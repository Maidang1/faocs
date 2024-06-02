import { MouseEventHandler } from 'react';
import { matchPath, useLocation, useMatch } from 'react-router-dom';
import { useSidebar } from '../hooks/useSidebar';
import React, { useRef } from 'react';
import { RouterLink } from './RouterLink';
import { useState } from 'react';
import { useCallback } from 'react';
import { useMemo } from 'react';
import { RefObject } from 'react';
import { useEffect } from 'react';
import { Icon } from './Icon';

type SidebarProps = {
  className?: string;
  onClickItem?: MouseEventHandler<HTMLAnchorElement>;
};
export const SideBar = (props: SidebarProps) => {
  const { className, onClickItem } = props;
  const sidebar = useSidebar();
  const sidebarRef = useRef<HTMLElement>(null);
  const [backPath, setBackPath] = useState<string>('/');

  if (!sidebar) return null;
  const groups = getSidebarGroups(sidebar.items);
  return (
    <aside ref={sidebarRef} key={sidebar.key}>
      <div>
        <div>
          <RouterLink
            to='/'
            style={{ alignItems: 'center', display: 'flex', height: '100%' }}
          >
            Logo
          </RouterLink>
        </div>
        <div />
      </div>

      <nav>
        <div>
          {sidebar.backLink && (
            <section>
              <div>
                <RouterLink to={backPath}>
                  ←{' '}
                  {typeof history !== 'undefined' &&
                  history.state?.key &&
                  backPath !== '/'
                    ? 'Back'
                    : 'Home'}
                </RouterLink>
              </div>
            </section>
          )}
          {groups.map((group, i) => (
            <SidebarItem
              key={`${group.text}${i}`}
              depth={0}
              item={group}
              onClick={onClickItem}
              sidebarRef={sidebarRef}
            />
          ))}
        </div>
      </nav>
    </aside>
  );
};

function getSidebarGroups(sidebar: any[]): any[] {
  const groups: any[] = [];

  let lastGroupIndex = 0;
  for (const item of sidebar) {
    if (item.items) {
      lastGroupIndex = groups.push(item);
      continue;
    }

    if (!groups[lastGroupIndex]) groups.push({ text: '', items: [item] });
    else groups[lastGroupIndex].items!.push(item);
  }

  return groups;
}

function getActiveChildItem(items: any[], pathname: string): any | undefined {
  return items.find((item) => {
    if (matchPath(pathname, item.link ?? '')) return true;
    if (item.link === pathname) return true;
    if (!item.items) return false;
    return getActiveChildItem(item.items, pathname);
  });
}
function SidebarItem(props: {
  depth: number;
  item: any;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  sidebarRef?: RefObject<HTMLElement>;
}) {
  const { depth, item, onClick, sidebarRef } = props;

  const itemRef = useRef<HTMLElement>(null);

  const { pathname } = useLocation();
  const match = useMatch(item.link ?? '');

  const hasActiveChildItem = useMemo(
    () =>
      item.items ? Boolean(getActiveChildItem(item.items, pathname)) : false,
    [item.items, pathname]
  );

  const [collapsed, setCollapsed] = useState(() => {
    if (match) return false;
    if (!item.items) return false;
    if (hasActiveChildItem) return false;
    return Boolean(item.collapsed);
  });
  const isCollapsable =
    item.collapsed !== undefined && item.items !== undefined;
  const onCollapseInteraction = useCallback(
    (event: KeyboardEvent | MouseEvent | any) => {
      if ('key' in event && event.key !== 'Enter') return;
      if (item.link) return;
      setCollapsed((x) => !x);
    },
    [item.link]
  );
  const onCollapseTriggerInteraction = useCallback(
    (event: KeyboardEvent | MouseEvent) => {
      if ('key' in event && event.key !== 'Enter') return;
      if (!item.link) return;
      setCollapsed((x) => !x);
    },
    [item.link]
  );

  const active = useRef(true);
  useEffect(() => {
    if (!active.current) return;
    active.current = false;

    const match = matchPath(pathname, item.link ?? '');
    if (!match) return;

    requestAnimationFrame(() => {
      const offsetTop = itemRef.current?.offsetTop ?? 0;
      const sidebarHeight = sidebarRef?.current?.clientHeight ?? 0;
      if (offsetTop < sidebarHeight) return;
      sidebarRef?.current?.scrollTo({ top: offsetTop - 100 });
    });
  }, [item, pathname, sidebarRef]);

  if (item.items)
    return (
      <section ref={itemRef}>
        {item.text && (
          <div
            {...(isCollapsable && !item.link
              ? {
                  role: 'button',
                  tabIndex: 0,
                  onClick: onCollapseInteraction,
                  onKeyDown: onCollapseInteraction,
                }
              : {})}
          >
            {item.text &&
              (item.link ? (
                <RouterLink
                  data-active={Boolean(match)}
                  onClick={onClick}
                  to={item.link}
                >
                  {item.text}
                </RouterLink>
              ) : (
                <div>{item.text}</div>
              ))}

            {isCollapsable && (
              <div
                role='button'
                tabIndex={0}
                // @ts-ignore
                onClick={onCollapseTriggerInteraction}
                // @ts-ignore
                onKeyDown={onCollapseTriggerInteraction}
              >
                <Icon label='toggle section' size='10px' icon={'symbol'} />
              </div>
            )}
          </div>
        )}

        {!collapsed && (
          <div>
            {item.items &&
              item.items.length > 0 &&
              depth < 5 &&
              item.items.map((item, i) => (
                <SidebarItem
                  depth={depth + 1}
                  item={item}
                  key={`${item.text}${i}`}
                  onClick={onClick}
                  sidebarRef={sidebarRef}
                />
              ))}
          </div>
        )}
      </section>
    );

  return (
    <>
      {item.link ? (
        <RouterLink
          ref={itemRef}
          data-active={Boolean(match)}
          onClick={onClick}
          to={item.link}
        >
          {item.text}
        </RouterLink>
      ) : (
        <div>{item.text}</div>
      )}
    </>
  );
}
