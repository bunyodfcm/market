import React, { useState } from 'react';
import { cn } from '../../lib/cn';

export interface RatingProps {
  value?: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'warning' | 'success';
  readonly?: boolean;
  allowHalf?: boolean;
  showValue?: boolean;
  onChange?: (value: number) => void;
  className?: string;
}

const sizeStyles = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

const variantStyles = {
  default: {
    filled: 'text-yellow-400',
    empty: 'text-gray-300',
  },
  warning: {
    filled: 'text-orange-400',
    empty: 'text-gray-300',
  },
  success: {
    filled: 'text-green-400',
    empty: 'text-gray-300',
  },
};

export const Rating: React.FC<RatingProps> = ({
  value = 0,
  max = 5,
  size = 'md',
  variant = 'default',
  readonly = false,
  allowHalf = false,
  showValue = false,
  onChange,
  className,
}) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const currentValue = isHovering && hoverValue !== null ? hoverValue : value;
  const variantStyle = variantStyles[variant];

  const handleStarClick = (starValue: number) => {
    if (readonly) return;
    onChange?.(starValue);
  };

  const handleStarHover = (starValue: number) => {
    if (readonly) return;
    setHoverValue(starValue);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setHoverValue(null);
  };

  const getStarFillPercentage = (starIndex: number): number => {
    const starValue = starIndex + 1;

    if (currentValue >= starValue) {
      return 100;
    } else if (allowHalf && currentValue >= starValue - 0.5) {
      return 50;
    } else {
      return 0;
    }
  };

  const renderStar = (index: number) => {
    const fillPercentage = getStarFillPercentage(index);
    // const starValue = allowHalf ? index + 0.5 : index + 1;

    return (
      <div
        key={index}
        className="relative cursor-pointer"
        onClick={() => handleStarClick(index + 1)}
        onMouseEnter={() => handleStarHover(index + 1)}
      >
        {/* Background (empty) star */}
        <svg
          className={cn(sizeStyles[size], variantStyle.empty)}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>

        {/* Filled star overlay */}
        {fillPercentage > 0 && (
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${fillPercentage}%` }}
          >
            <svg
              className={cn(sizeStyles[size], variantStyle.filled)}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        )}

        {/* Half star click area */}
        {allowHalf && !readonly && (
          <>
            <div
              className="absolute inset-0 w-1/2 cursor-pointer"
              onClick={e => {
                e.stopPropagation();
                handleStarClick(index + 0.5);
              }}
              onMouseEnter={() => handleStarHover(index + 0.5)}
            />
            <div
              className="absolute inset-0 left-1/2 w-1/2 cursor-pointer"
              onClick={e => {
                e.stopPropagation();
                handleStarClick(index + 1);
              }}
              onMouseEnter={() => handleStarHover(index + 1)}
            />
          </>
        )}
      </div>
    );
  };

  return (
    <div className={cn('flex items-center space-x-1', className)}>
      <div
        className="flex items-center space-x-1"
        onMouseLeave={handleMouseLeave}
      >
        {Array.from({ length: max }, (_, index) => renderStar(index))}
      </div>

      {showValue && (
        <span className="ml-2 text-sm text-gray-600">
          {value.toFixed(allowHalf ? 1 : 0)} / {max}
        </span>
      )}
    </div>
  );
};
