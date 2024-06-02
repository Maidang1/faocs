import React from "react";
export type IconProps = {
  className?: string;
  label: string;
  icon: React.ElementType;
  size?: string;
  style?: React.CSSProperties;
};

export function Icon({ className, label, icon: Icon, size, style }: IconProps) {
  return (
    <div
      aria-label={label}
      role='img'
      style={{
        ...style,
      }}
    >
      <Icon height={size} width={size} />
    </div>
  );
}
