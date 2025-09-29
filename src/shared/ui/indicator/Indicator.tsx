import React from 'react';
import { cn } from '../../lib/cn';

export interface IndicatorProps {
  total: number;
  current?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'success' | 'warning' | 'error';
  shape?: 'circle' | 'line';
  clickable?: boolean;
  onChange?: (index: number) => void;
  className?: string;
}

const sizeStyles = {
  circle: {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  },
  line: {
    sm: 'w-6 h-1',
    md: 'w-8 h-1.5',
    lg: 'w-10 h-2',
  },
};

const variantStyles = {
  default: {
    active: 'bg-blue-600',
    inactive: 'bg-gray-300',
  },
  success: {
    active: 'bg-green-600',
    inactive: 'bg-gray-300',
  },
  warning: {
    active: 'bg-yellow-600',
    inactive: 'bg-gray-300',
  },
  error: {
    active: 'bg-red-600',
    inactive: 'bg-gray-300',
  },
};

export const Indicator: React.FC<IndicatorProps> = ({
  total,
  current = 0,
  size = 'md',
  variant = 'default',
  shape = 'circle',
  clickable = false,
  onChange,
  className,
}) => {
  const sizeStyle = sizeStyles[shape][size];
  const variantStyle = variantStyles[variant];

  const handleClick = (index: number) => {
    if (clickable && onChange) {
      onChange(index);
    }
  };

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      {Array.from({ length: total }, (_, index) => {
        const isActive = index === current;

        return (
          <div
            key={index}
            className={cn(
              'transition-all duration-200',
              shape === 'circle' ? 'rounded-full' : 'rounded-sm',
              sizeStyle,
              isActive ? variantStyle.active : variantStyle.inactive,
              clickable && 'cursor-pointer hover:opacity-75'
            )}
            onClick={() => handleClick(index)}
          />
        );
      })}
    </div>
  );
};
