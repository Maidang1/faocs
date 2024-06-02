import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import React from 'react';
import { Link as Link_ } from './Link';
import { useConfig } from '../hooks/useConfig';

export const Root = (props: NavigationMenu.NavigationMenuProps) => {
  return <NavigationMenu.Root {...props} className={props.className} />;
};

export const List = (props: NavigationMenu.NavigationMenuListProps) => (
  <NavigationMenu.List
    {...props}
    className={`${props.className} flex gap-20`}
  />
);

export const Item = (props: NavigationMenu.NavigationMenuItemProps) => (
  <NavigationMenu.Item {...props} className={`${props.className}`} />
);

export const Link = ({
  active,
  children,
  className,
  href,
}: {
  active?: boolean;
  children: React.ReactNode;
  className?: string;
  href?: string;
}) => {
  return (
    <NavigationMenu.Link asChild>
      <Link_ data-active={active} href={href} className={className}>
        {children}
      </Link_>
    </NavigationMenu.Link>
  );
};

export const Trigger = ({
  active,
  className,
  ...props
}: NavigationMenu.NavigationMenuTriggerProps & {
  active?: boolean;
}) => {
  return <NavigationMenu.Trigger {...props} data-active={active} />;
};

export const Content = (props: NavigationMenu.NavigationMenuContentProps) => (
  <NavigationMenu.Content {...props} />
);
