import React, { ReactNode } from 'react';
import cx from 'classnames';
import "./index.scss"

export const Logo = () => {
  return <div className='flex justify-center h-10 text-[#474747] text-6xl'>Faocs</div>;
};

export function Root({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        className,
        'items-center flex flex-col text-center pt-16 gap-8'
      )}
    >
      {children}
    </div>
  );
}

export function Tagline({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx(className, 'text-[#646464] text-xl font-normal')}>
      {children}
    </div>
  );
}

export function Description({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(className, 'text-[#4c4c4c] text-base font-light leading-7')}
    >
      {children}
    </div>
  );
}
