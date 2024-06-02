import React, { forwardRef } from 'react';
import { useConfig } from '../hooks/useConfig';

export type ExternalLinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & { hideExternalIcon?: boolean };

export const ExternalLink = forwardRef((props: ExternalLinkProps, ref) => {
  return (
    <a ref={ref as any} target='_blank' rel='noopener noreferrer' {...props}>
      {props.children}
    </a>
  );
});
