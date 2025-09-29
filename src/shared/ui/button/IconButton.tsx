import React from 'react';
import { cn } from '../../lib/cn';

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const variantStyles = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 border-blue-600',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 border-gray-200',
  outline: 'bg-transparent text-blue-600 hover:bg-blue-50 border-blue-600',
  ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 border-transparent',
};

export const IconButton: React.FC<IconButtonProps> = ({
  variant = 'primary',
  children,
  className,
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        // Base styles - square shape for icons
        'p-2 rounded-md border font-medium transition-colors duration-200',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-current',
        'flex items-center justify-center',
        // Variant styles
        variantStyles[variant],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
