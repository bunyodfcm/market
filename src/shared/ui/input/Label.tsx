import React from 'react';
import { cn } from '../../lib/cn';

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  required?: boolean;
  className?: string;
}

export const Label: React.FC<LabelProps> = ({
  children,
  required = false,
  className,
  ...props
}) => {
  return (
    <label
      className={cn('block text-sm font-medium text-gray-700 mb-1', className)}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};
