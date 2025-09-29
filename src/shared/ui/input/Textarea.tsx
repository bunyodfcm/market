import React from 'react';
import { cn } from '../../lib/cn';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'default' | 'filled' | 'outline';
  error?: boolean;
  className?: string;
}

const variantStyles = {
  default: 'border border-gray-300 bg-white focus:border-blue-500',
  filled:
    'border-0 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500',
  outline: 'border-2 border-gray-300 bg-transparent focus:border-blue-500',
};

export const Textarea: React.FC<TextareaProps> = ({
  variant = 'default',
  error = false,
  className,
  rows = 4,
  ...props
}) => {
  return (
    <textarea
      rows={rows}
      className={cn(
        // Base styles
        'w-full px-3 py-2 rounded-md text-sm transition-colors duration-200',
        'placeholder:text-gray-400 resize-vertical',
        'focus:outline-none focus:ring-1 focus:ring-blue-500',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        // Variant styles
        variantStyles[variant],
        // Error styles
        error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
        className
      )}
      {...props}
    />
  );
};
