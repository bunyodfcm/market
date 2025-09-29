import React from 'react';
import { Badge, type BadgeProps } from './Badge';

export interface StatusBadgeProps extends Omit<BadgeProps, 'variant'> {
  status: 'active' | 'inactive' | 'pending' | 'success' | 'error' | 'warning';
}

const statusVariants = {
  active: 'success',
  inactive: 'default', 
  pending: 'warning',
  success: 'success',
  error: 'error',
  warning: 'warning'
} as const;

const statusLabels = {
  active: 'Active',
  inactive: 'Inactive',
  pending: 'Pending', 
  success: 'Success',
  error: 'Error',
  warning: 'Warning'
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  children,
  ...props
}) => {
  return (
    <Badge
      variant={statusVariants[status]}
      dot={true}
      dotPosition="left"
      {...props}
    >
      {children || statusLabels[status]}
    </Badge>
  );
}; 