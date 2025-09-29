import React from 'react';
import { cn } from '../../lib/cn';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  variant?: 'default' | 'success' | 'warning';
  indeterminate?: boolean;
  className?: string;
}

const variantStyles = {
  default: 'text-blue-600 focus:ring-blue-500',
  success: 'text-green-600 focus:ring-green-500',
  warning: 'text-orange-600 focus:ring-orange-500',
};

export const Checkbox: React.FC<CheckboxProps> = ({
  variant = 'default',
  indeterminate = false,
  className,
  ...props
}) => {
  const checkboxRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <input
      ref={checkboxRef}
      type="checkbox"
      className={cn(
        // Base styles
        'w-4 h-4 rounded border-gray-300 transition-colors duration-200',
        'focus:ring-2 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        // Variant styles
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
};
