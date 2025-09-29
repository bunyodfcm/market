import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../lib/cn';

export interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  delay?: number;
  disabled?: boolean;
  className?: string;
  contentClassName?: string;
}

const positionStyles = {
  top: {
    tooltip: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    arrow:
      'top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent',
  },
  bottom: {
    tooltip: 'top-full left-1/2 -translate-x-1/2 mt-2',
    arrow:
      'bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent',
  },
  left: {
    tooltip: 'right-full top-1/2 -translate-y-1/2 mr-2',
    arrow:
      'left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent',
  },
  right: {
    tooltip: 'left-full top-1/2 -translate-y-1/2 ml-2',
    arrow:
      'right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent',
  },
};

const variantStyles = {
  dark: {
    tooltip: 'bg-gray-900 text-white border-gray-900',
    arrow: 'border-gray-900',
  },
  light: {
    tooltip: 'bg-white text-gray-900 border-gray-200 shadow-lg',
    arrow: 'border-white',
  },
};

const sizeStyles = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-2 text-sm',
  lg: 'px-4 py-3 text-base',
};

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'top',
  variant = 'dark',
  size = 'md',
  delay = 0,
  disabled = false,
  className,
  contentClassName,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const containerRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    if (disabled) return;

    if (delay > 0) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    } else {
      setIsVisible(true);
    }
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const positionStyle = positionStyles[position];
  const variantStyle = variantStyles[variant];

  return (
    <div
      ref={containerRef}
      className={cn('relative inline-block', className)}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}

      {isVisible && !disabled && (
        <div
          className={cn(
            'absolute z-50 whitespace-nowrap rounded border transition-opacity duration-200',
            'pointer-events-none',
            positionStyle.tooltip,
            variantStyle.tooltip,
            sizeStyles[size],
            contentClassName
          )}
          role="tooltip"
        >
          {content}

          {/* Arrow */}
          <div
            className={cn(
              'absolute w-0 h-0 border-4',
              positionStyle.arrow,
              variantStyle.arrow
            )}
          />
        </div>
      )}
    </div>
  );
};
