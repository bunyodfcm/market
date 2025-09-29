import React from 'react';
import { cn } from '../../lib/cn';

export interface AlertProps {
  variant: 'error' | 'info' | 'success' | 'warning';
  size?: 'medium' | 'large';
  title: string;
  message?: string;
  onClose?: () => void;
  className?: string;
}

const variantStyles = {
  error: {
    container: 'bg-red-50 border-red-200 text-red-800',
    icon: 'bg-red-500 text-white',
    closeButton: 'text-red-400 hover:text-red-600',
  },
  info: {
    container: 'bg-blue-50 border-blue-200 text-blue-800',
    icon: 'bg-blue-500 text-white',
    closeButton: 'text-blue-400 hover:text-blue-600',
  },
  success: {
    container: 'bg-green-50 border-green-200 text-green-800',
    icon: 'bg-green-500 text-white',
    closeButton: 'text-green-400 hover:text-green-600',
  },
  warning: {
    container: 'bg-orange-50 border-orange-200 text-orange-800',
    icon: 'bg-orange-500 text-white',
    closeButton: 'text-orange-400 hover:text-orange-600',
  },
};

const sizeStyles = {
  medium: {
    container: 'p-3',
    icon: 'w-5 h-5 text-sm',
    content: 'ml-3',
    title: 'text-sm font-medium',
    message: 'text-sm mt-1',
  },
  large: {
    container: 'p-4',
    icon: 'w-6 h-6 text-base',
    content: 'ml-4',
    title: 'text-base font-medium',
    message: 'text-sm mt-2',
  },
};

const icons = {
  error: (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-full h-full">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
        clipRule="evenodd"
      />
    </svg>
  ),
  info: (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-full h-full">
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
        clipRule="evenodd"
      />
    </svg>
  ),
  success: (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-full h-full">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.236 4.53L7.53 10.06a.75.75 0 00-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-full h-full">
      <path
        fillRule="evenodd"
        d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.345 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

export const Alert: React.FC<AlertProps> = ({
  variant,
  size = 'large',
  title,
  message,
  onClose,
  className,
}) => {
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  return (
    <div
      className={cn(
        'border rounded-lg flex items-start',
        variantStyle.container,
        sizeStyle.container,
        className
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          'rounded-full flex items-center justify-center flex-shrink-0',
          variantStyle.icon,
          sizeStyle.icon
        )}
      >
        {icons[variant]}
      </div>

      {/* Content */}
      <div className={cn('flex-1', sizeStyle.content)}>
        <div className={sizeStyle.title}>{title}</div>
        {message && <div className={sizeStyle.message}>{message}</div>}
      </div>

      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className={cn(
            'flex-shrink-0 ml-4 p-1 rounded-md transition-colors',
            variantStyle.closeButton
          )}
        >
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};
