import React from 'react';
import { cn } from '../../lib/cn';

export interface CountBadgeProps {
  count: number;
  max?: number;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  showZero?: boolean;
  className?: string;
}

const variantStyles = {
  default: 'bg-gray-500 text-white',
  primary: 'bg-blue-500 text-white',
  success: 'bg-green-500 text-white',
  warning: 'bg-yellow-500 text-white',
  error: 'bg-red-500 text-white',
};

const sizeStyles = {
  sm: 'min-w-[16px] h-4 text-xs px-1',
  md: 'min-w-[20px] h-5 text-xs px-1.5',
  lg: 'min-w-[24px] h-6 text-sm px-2',
};

export const CountBadge: React.FC<CountBadgeProps> = ({
  count,
  max = 99,
  variant = 'error',
  size = 'md',
  showZero = false,
  className,
}) => {
  if (count === 0 && !showZero) {
    return null;
  }

  const displayCount = count > max ? `${max}+` : count.toString();

  return (
    <span
      className={cn(
        // Base styles
        'inline-flex items-center justify-center rounded-full font-medium',
        // Variant styles
        variantStyles[variant],
        // Size styles
        sizeStyles[size],
        className
      )}
    >
      {displayCount}
    </span>
  );
};
