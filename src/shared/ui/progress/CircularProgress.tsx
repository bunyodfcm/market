import React from 'react';
import { cn } from '../../lib/cn';

export interface CircularProgressProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'success' | 'warning' | 'error';
  thickness?: 'thin' | 'medium' | 'thick';
  showLabel?: boolean;
  label?: string;
  className?: string;
}

const sizeStyles = {
  sm: { size: 32, fontSize: 'text-xs' },
  md: { size: 48, fontSize: 'text-sm' },
  lg: { size: 64, fontSize: 'text-base' },
  xl: { size: 96, fontSize: 'text-lg' },
};

const thicknessStyles = {
  thin: 2,
  medium: 4,
  thick: 6,
};

const variantStyles = {
  default: 'stroke-blue-600',
  success: 'stroke-green-600',
  warning: 'stroke-yellow-600',
  error: 'stroke-red-600',
};

export const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  max = 100,
  size = 'md',
  variant = 'default',
  thickness = 'medium',
  showLabel = false,
  label,
  className,
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const { size: circleSize, fontSize } = sizeStyles[size];
  const strokeWidth = thicknessStyles[thickness];

  const radius = (circleSize - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center',
        className
      )}
    >
      <svg
        width={circleSize}
        height={circleSize}
        className="transform -rotate-90"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemax={max}
        aria-valuemin={0}
      >
        {/* Background Circle */}
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-gray-200 dark:text-gray-700"
        />

        {/* Progress Circle */}
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className={cn(
            'transition-all duration-300 ease-out',
            variantStyles[variant]
          )}
        />
      </svg>

      {/* Label */}
      {showLabel && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={cn(
              'font-medium text-gray-700 dark:text-gray-300',
              fontSize
            )}
          >
            {label || `${Math.round(percentage)}%`}
          </span>
        </div>
      )}
    </div>
  );
};
