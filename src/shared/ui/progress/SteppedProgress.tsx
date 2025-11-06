import React from 'react';
import { cn } from '../../lib/cn';

export interface Step {
  id: string;
  label?: string;
  completed?: boolean;
  active?: boolean;
  disabled?: boolean;
}

export interface SteppedProgressProps {
  steps: Step[];
  currentStep?: number;
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  orientation?: 'horizontal' | 'vertical';
  showLabels?: boolean;
  className?: string;
}

const sizeStyles = {
  sm: {
    circle: 'w-6 h-6 text-xs',
    line: 'h-0.5',
    gap: 'gap-2',
  },
  md: {
    circle: 'w-8 h-8 text-sm',
    line: 'h-1',
    gap: 'gap-3',
  },
  lg: {
    circle: 'w-10 h-10 text-base',
    line: 'h-1.5',
    gap: 'gap-4',
  },
};

const variantStyles = {
  default: {
    completed: 'bg-blue-600 border-blue-600 text-white',
    active: 'bg-blue-100 border-blue-600 text-blue-600',
    inactive: 'bg-gray-100 border-gray-300 text-gray-400',
    line: 'bg-blue-600',
  },
  success: {
    completed: 'bg-green-600 border-green-600 text-white',
    active: 'bg-green-100 border-green-600 text-green-600',
    inactive: 'bg-gray-100 border-gray-300 text-gray-400',
    line: 'bg-green-600',
  },
  warning: {
    completed: 'bg-yellow-600 border-yellow-600 text-white',
    active: 'bg-yellow-100 border-yellow-600 text-yellow-600',
    inactive: 'bg-gray-100 border-gray-300 text-gray-400',
    line: 'bg-yellow-600',
  },
  error: {
    completed: 'bg-red-600 border-red-600 text-white',
    active: 'bg-red-100 border-red-600 text-red-600',
    inactive: 'bg-gray-100 border-gray-300 text-gray-400',
    line: 'bg-red-600',
  },
};

export const SteppedProgress: React.FC<SteppedProgressProps> = ({
  steps,
  currentStep = 0,
  variant = 'default',
  size = 'md',
  orientation = 'horizontal',
  showLabels = true,
  className,
}) => {
  const sizeStyle = sizeStyles[size];
  const variantStyle = variantStyles[variant];

  const getStepStatus = (index: number, step: Step) => {
    if (step.completed || index < currentStep) return 'completed';
    if (step.active || index === currentStep) return 'active';
    return 'inactive';
  };

  const getStepStyle = (status: string) => {
    switch (status) {
      case 'completed':
        return variantStyle.completed;
      case 'active':
        return variantStyle.active;
      default:
        return variantStyle.inactive;
    }
  };

  if (orientation === 'vertical') {
    return (
      <div className={cn('flex flex-col', sizeStyle.gap, className)}>
        {steps.map((step, index) => {
          const status = getStepStatus(index, step);
          const isLast = index === steps.length - 1;

          return (
            <div key={step.id} className="flex items-start">
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    'rounded-full border-2 flex items-center justify-center font-medium',
                    sizeStyle.circle,
                    getStepStyle(status)
                  )}
                >
                  {status === 'completed' ? (
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>

                {/* Vertical Line */}
                {!isLast && (
                  <div
                    className={cn(
                      'w-0.5 flex-1 mt-2 min-h-8',
                      status === 'completed' ? variantStyle.line : 'bg-gray-300'
                    )}
                  />
                )}
              </div>

              {/* Step Label */}
              {showLabels && step.label && (
                <div className="ml-3 pb-8">
                  <p className="text-sm font-medium text-gray-900">
                    {step.label}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={cn('flex items-center', sizeStyle.gap, className)}>
      {steps.map((step, index) => {
        const status = getStepStatus(index, step);
        const isLast = index === steps.length - 1;

        return (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              {/* Step Circle */}
              <div
                className={cn(
                  'rounded-full border-2 flex items-center justify-center font-medium',
                  sizeStyle.circle,
                  getStepStyle(status)
                )}
              >
                {status === 'completed' ? (
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>

              {/* Step Label */}
              {showLabels && step.label && (
                <p className="mt-2 text-xs font-medium text-gray-600 text-center">
                  {step.label}
                </p>
              )}
            </div>

            {/* Horizontal Line */}
            {!isLast && (
              <div
                className={cn(
                  'flex-1 min-w-8',
                  sizeStyle.line,
                  status === 'completed' ? variantStyle.line : 'bg-gray-300'
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
