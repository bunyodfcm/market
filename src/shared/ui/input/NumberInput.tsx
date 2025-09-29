import React from 'react';
import { cn } from '../../lib/cn';

export interface NumberInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  variant?: 'default' | 'filled' | 'outline';
  error?: boolean;
  showButtons?: boolean;
  onIncrement?: () => void;
  onDecrement?: () => void;
  className?: string;
}

const variantStyles = {
  default: 'border border-gray-300 bg-white focus:border-blue-500',
  filled:
    'border-0 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500',
  outline: 'border-2 border-gray-300 bg-transparent focus:border-blue-500',
};

export const NumberInput: React.FC<NumberInputProps> = ({
  variant = 'default',
  error = false,
  showButtons = true,
  onIncrement,
  onDecrement,
  className,
  ...props
}) => {
  const handleIncrement = () => {
    if (onIncrement) {
      onIncrement();
    } else if (props.onChange) {
      const currentValue = Number(props.value) || 0;
      const event = {
        target: { value: String(currentValue + 1) },
      } as React.ChangeEvent<HTMLInputElement>;
      props.onChange(event);
    }
  };

  const handleDecrement = () => {
    if (onDecrement) {
      onDecrement();
    } else if (props.onChange) {
      const currentValue = Number(props.value) || 0;
      const event = {
        target: { value: String(currentValue - 1) },
      } as React.ChangeEvent<HTMLInputElement>;
      props.onChange(event);
    }
  };

  if (!showButtons) {
    return (
      <input
        type="number"
        className={cn(
          'w-full px-3 py-2 rounded-md text-sm transition-colors duration-200',
          'focus:outline-none focus:ring-1 focus:ring-blue-500',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variantStyles[variant],
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          className
        )}
        {...props}
      />
    );
  }

  return (
    <div className="relative flex">
      {/* Decrement Button */}
      <button
        type="button"
        onClick={handleDecrement}
        className="px-3 py-2 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
        disabled={props.disabled}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 12H4"
          />
        </svg>
      </button>

      {/* Input */}
      <input
        type="number"
        className={cn(
          'flex-1 px-3 py-2 text-sm text-center transition-colors duration-200',
          'focus:outline-none focus:ring-1 focus:ring-blue-500',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'border-t border-b border-gray-300',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          className
        )}
        {...props}
      />

      {/* Increment Button */}
      <button
        type="button"
        onClick={handleIncrement}
        className="px-3 py-2 bg-blue-600 border border-l-0 border-blue-600 rounded-r-md text-white hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
        disabled={props.disabled}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
};
