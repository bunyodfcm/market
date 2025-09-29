import React from 'react';
import { cn } from '../../lib/cn';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'success' | 'warning';
  className?: string;
  id?: string;
}

const sizeStyles = {
  sm: {
    track: 'w-8 h-4',
    thumb: 'w-3 h-3',
    translate: 'translate-x-4',
  },
  md: {
    track: 'w-11 h-6',
    thumb: 'w-5 h-5',
    translate: 'translate-x-5',
  },
  lg: {
    track: 'w-14 h-7',
    thumb: 'w-6 h-6',
    translate: 'translate-x-7',
  },
};

const variantStyles = {
  default: 'bg-blue-600',
  success: 'bg-green-600',
  warning: 'bg-orange-600',
};

export const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  variant = 'default',
  className,
  id,
}) => {
  const sizeStyle = sizeStyles[size];
  const variantStyle = variantStyles[variant];

  const handleToggle = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      id={id}
      onClick={handleToggle}
      disabled={disabled}
      className={cn(
        // Base styles
        'relative inline-flex items-center rounded-full transition-colors duration-200',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        // Track styles
        sizeStyle.track,
        // Background color
        checked ? variantStyle : 'bg-gray-200',
        className
      )}
    >
      {/* Thumb */}
      <span
        className={cn(
          'inline-block rounded-full bg-white shadow-lg transform transition-transform duration-200',
          sizeStyle.thumb,
          checked ? sizeStyle.translate : 'translate-x-0.5'
        )}
      />
    </button>
  );
};
