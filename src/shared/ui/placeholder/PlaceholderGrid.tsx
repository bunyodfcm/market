import React from 'react';
import { cn } from '../../lib/cn';
import { Placeholder, type PlaceholderProps } from './Placeholder';

export interface PlaceholderGridProps {
  items: Array<PlaceholderProps & { id: string }>;
  columns?: 2 | 3 | 4 | 5 | 6;
  gap?: 'sm' | 'md' | 'lg';
  onSelect?: (id: string) => void;
  selectedId?: string;
  className?: string;
}

const columnStyles = {
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
};

const gapStyles = {
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
};

export const PlaceholderGrid: React.FC<PlaceholderGridProps> = ({
  items,
  columns = 4,
  gap = 'md',
  onSelect,
  selectedId,
  className,
}) => {
  return (
    <div
      className={cn('grid', columnStyles[columns], gapStyles[gap], className)}
    >
      {items.map(item => (
        <div
          key={item.id}
          onClick={() => onSelect?.(item.id)}
          className={cn(
            'cursor-pointer transition-transform duration-200',
            onSelect && 'hover:scale-105'
          )}
        >
          <Placeholder {...item} selected={selectedId === item.id} />
        </div>
      ))}
    </div>
  );
};
