import React from 'react';
import { cn } from '../../lib/cn';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'rounded' | 'pill' | 'square';
  dot?: boolean;
  dotPosition?: 'left' | 'right';
  className?: string;
}

const variantStyles = {
  default: 'bg-gray-100 text-gray-800 border-gray-200',
  secondary: 'bg-gray-500 text-white border-gray-500',
  success: 'bg-green-100 text-green-800 border-green-200',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  error: 'bg-red-100 text-red-800 border-red-200',
  info: 'bg-blue-100 text-blue-800 border-blue-200',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
};

const shapeStyles = {
  rounded: 'rounded-md',
  pill: 'rounded-full',
  square: 'rounded-none',
};

const dotStyles = {
  default: 'bg-gray-500',
  secondary: 'bg-gray-400',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
  info: 'bg-blue-500',
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  shape = 'rounded',
  dot = false,
  dotPosition = 'left',
  className,
}) => {
  return (
    <span
      className={cn(
        // Base styles
        'inline-flex items-center font-medium border transition-colors duration-200',
        // Variant styles
        variantStyles[variant],
        // Size styles
        sizeStyles[size],
        // Shape styles
        shapeStyles[shape],
        className
      )}
    >
      {/* Left dot */}
      {dot && dotPosition === 'left' && (
        <span
          className={cn('w-2 h-2 rounded-full mr-1.5', dotStyles[variant])}
        />
      )}

      {children}

      {/* Right dot */}
      {dot && dotPosition === 'right' && (
        <span
          className={cn('w-2 h-2 rounded-full ml-1.5', dotStyles[variant])}
        />
      )}
    </span>
  );
};
