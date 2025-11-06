import React from 'react';
import { cn } from '../../lib/cn';

export interface TableCellProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  colSpan?: number;
  rowSpan?: number;
}

export const TableCell: React.FC<TableCellProps> = ({
  children,
  align = 'left',
  className,
  colSpan,
  rowSpan,
}) => {
  return (
    <td
      className={cn(
        'px-3 py-2 text-sm text-gray-900',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
      colSpan={colSpan}
      rowSpan={rowSpan}
    >
      {children}
    </td>
  );
};
