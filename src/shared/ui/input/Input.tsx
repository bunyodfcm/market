import React from 'react';
import { cn } from '../../lib/cn';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'filled' | 'outline';
  error?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const variantStyles = {
  default: 'border border-gray-300 bg-white focus:border-blue-500',
  filled:
    'border-0 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500',
  outline: 'border-2 border-gray-300 bg-transparent focus:border-blue-500',
};

export const Input: React.FC<InputProps> = ({
  variant = 'default',
  error = false,
  icon,
  className,
  ...props
}) => {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <input
        className={cn(
          // Base styles
          'w-full px-3 py-2 rounded-md text-sm transition-colors duration-200',
          'placeholder:text-gray-400',
          'focus:outline-none focus:ring-1 focus:ring-blue-500',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          // Variant styles
          variantStyles[variant],
          // Error styles
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          // Icon padding
          icon && 'pl-10',
          className
        )}
        {...props}
      />
    </div>
  );
};
