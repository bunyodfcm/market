import React from 'react';
import { cn } from '../../lib/cn';
import { Button } from '../button/Button';
import { IconButton } from '../button/IconButton';

export interface Action {
  key: string;
  label?: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  onClick: () => void;
  disabled?: boolean;
  danger?: boolean;
}

export interface TableActionsProps {
  actions: Action[];
  layout?: 'horizontal' | 'dropdown';
  className?: string;
}

export const TableActions: React.FC<TableActionsProps> = ({
  actions,
  layout = 'horizontal',
  className,
}) => {
  if (layout === 'dropdown') {
    // TODO: Implement dropdown layout when we have Dropdown component
    return (
      <div className={cn('flex items-center space-x-1', className)}>
        {actions.map(action => (
          <IconButton
            key={action.key}
            variant={action.danger ? 'ghost' : action.variant || 'ghost'}
            onClick={action.onClick}
            disabled={action.disabled}
            className={cn(
              action.danger && 'text-red-600 hover:text-red-700 hover:bg-red-50'
            )}
          >
            {action.icon}
          </IconButton>
        ))}
      </div>
    );
  }

  return (
    <div className={cn('flex items-center space-x-1', className)}>
      {actions.map(action => {
        if (action.icon && !action.label) {
          return (
            <IconButton
              key={action.key}
              variant={action.danger ? 'ghost' : action.variant || 'ghost'}
              onClick={action.onClick}
              disabled={action.disabled}
              className={cn(
                action.danger &&
                  'text-red-600 hover:text-red-700 hover:bg-red-50'
              )}
            >
              {action.icon}
            </IconButton>
          );
        }

        return (
          <Button
            key={action.key}
            variant={action.danger ? 'outline' : action.variant || 'outline'}
            onClick={action.onClick}
            disabled={action.disabled}
            className={cn(
              action.danger && 'border-red-300 text-red-600 hover:bg-red-50'
            )}
          >
            {action.icon && <span className="mr-1">{action.icon}</span>}
            {action.label}
          </Button>
        );
      })}
    </div>
  );
};
