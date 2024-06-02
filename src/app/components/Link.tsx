import React, { forwardRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ExternalLink } from './ExternalLink';
import { RouterLink } from './RouterLink';

type LinkProps = {
  children: React.ReactNode;
  className?: string;
  hideExternalIcon?: boolean;
  onClick?: () => void;
  href?: string;
  variant?: 'accent underlined' | 'styleless';
};
export const Link = forwardRef((props: LinkProps, ref) => {
  const { href } = props;
  const { pathname } = useLocation();

  if (href?.match(/^(www|https?)/)) {
    return (
      <ExternalLink
        hideExternalIcon={props.hideExternalIcon}
        ref={ref}
        {...props}
      ></ExternalLink>
    );
  }

  const [before, after] = (href || '').split('#');
  const to = `${before ? before : pathname}${after ? `#${after}` : ''}`;
  return <RouterLink to={to} ref={ref} {...props}></RouterLink>;
});
