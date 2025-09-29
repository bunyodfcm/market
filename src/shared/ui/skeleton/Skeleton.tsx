import React from 'react';
import { cn } from '../../lib/cn';

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  variant?: 'text' | 'circular' | 'rectangular';
  animation?: 'pulse' | 'wave' | 'none';
  className?: string;
}

const variantStyles = {
  text: 'rounded',
  circular: 'rounded-full',
  rectangular: 'rounded-md',
};

const animationStyles = {
  pulse: 'animate-pulse',
  wave: 'animate-pulse bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:200%_100%] animate-[wave_1.5s_ease-in-out_infinite]',
  none: '',
};

export const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  variant = 'rectangular',
  animation = 'pulse',
  className,
}) => {
  const style: React.CSSProperties = {};

  if (width) {
    style.width = typeof width === 'number' ? `${width}px` : width;
  }

  if (height) {
    style.height = typeof height === 'number' ? `${height}px` : height;
  }

  return (
    <div
      className={cn(
        'bg-gray-300 dark:bg-gray-700',
        variantStyles[variant],
        animationStyles[animation],
        !width && 'w-full',
        !height && variant === 'text' && 'h-4',
        !height && variant === 'rectangular' && 'h-20',
        !height && variant === 'circular' && 'h-12 w-12',
        className
      )}
      style={style}
    />
  );
};
