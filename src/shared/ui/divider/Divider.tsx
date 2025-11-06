import React from 'react';
import { cn } from '../../lib/cn';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted';
  size?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'light' | 'dark';
  children?: React.ReactNode;
  className?: string;
}

const orientationStyles = {
  horizontal: 'w-full border-t',
  vertical: 'h-full border-l',
};

const variantStyles = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
};

const sizeStyles = {
  horizontal: {
    sm: 'border-t',
    md: 'border-t-2',
    lg: 'border-t-4',
  },
  vertical: {
    sm: 'border-l',
    md: 'border-l-2',
    lg: 'border-l-4',
  },
};

const colorStyles = {
  default: 'border-gray-300',
  light: 'border-gray-200',
  dark: 'border-gray-400',
};

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  variant = 'solid',
  size = 'sm',
  color = 'default',
  children,
  className,
}) => {
  if (children && orientation === 'horizontal') {
    return (
      <div className={cn('relative flex items-center', className)}>
        <div
          className={cn(
            'flex-grow',
            orientationStyles[orientation],
            variantStyles[variant],
            sizeStyles[orientation][size],
            colorStyles[color]
          )}
        />
        <span className="px-3 text-sm text-gray-500 bg-white">{children}</span>
        <div
          className={cn(
            'flex-grow',
            orientationStyles[orientation],
            variantStyles[variant],
            sizeStyles[orientation][size],
            colorStyles[color]
          )}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        orientationStyles[orientation],
        variantStyles[variant],
        sizeStyles[orientation][size],
        colorStyles[color],
        className
      )}
    />
  );
};
