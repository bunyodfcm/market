import React from 'react';
import { cn } from '../../lib/cn';

export interface Column<T = any> {
  key: string;
  title: string;
  dataIndex?: string;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  render?: (value: any, record: T, index: number) => React.ReactNode;
}

export interface TableProps<T = any> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'striped' | 'bordered';
  hoverable?: boolean;
  sticky?: boolean;
  onRowClick?: (record: T, index: number) => void;
  className?: string;
  rowClassName?: string | ((record: T, index: number) => string);
}

const sizeStyles = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

const paddingStyles = {
  sm: 'px-2 py-1',
  md: 'px-3 py-2',
  lg: 'px-4 py-3',
};

export const Table = <T extends Record<string, any>>({
  columns,
  data,
  loading = false,
  size = 'md',
  variant = 'default',
  hoverable = true,
  sticky = false,
  onRowClick,
  className,
  rowClassName,
}: TableProps<T>) => {
  const getValue = (record: T, column: Column<T>) => {
    if (column.dataIndex) {
      return record[column.dataIndex];
    }
    return record[column.key];
  };

  const getRowClassName = (record: T, index: number) => {
    if (typeof rowClassName === 'function') {
      return rowClassName(record, index);
    }
    return rowClassName || '';
  };

  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full">
        {/* Table Header */}
        <thead className={cn('bg-gray-50', sticky && 'sticky top-0 z-10')}>
          <tr>
            {columns.map(column => (
              <th
                key={column.key}
                className={cn(
                  'font-medium text-gray-900',
                  'border-b border-gray-200',
                  paddingStyles[size],
                  sizeStyles[size],
                  column.align === 'center' && 'text-center',
                  column.align === 'right' && 'text-right',
                  column.sortable && 'cursor-pointer hover:bg-gray-100'
                )}
                style={{ width: column.width }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {loading ? (
            <tr>
              <td
                colSpan={columns.length}
                className={cn('text-center text-gray-500', paddingStyles[size])}
              >
                Loading...
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className={cn('text-center text-gray-500', paddingStyles[size])}
              >
                No data
              </td>
            </tr>
          ) : (
            data.map((record, index) => (
              <tr
                key={index}
                className={cn(
                  'border-b border-gray-200',
                  variant === 'striped' && index % 2 === 1 && 'bg-gray-50',
                  variant === 'bordered' && 'border border-gray-200',
                  hoverable && 'hover:bg-gray-50',
                  onRowClick && 'cursor-pointer',
                  getRowClassName(record, index)
                )}
                onClick={() => onRowClick?.(record, index)}
              >
                {columns.map(column => {
                  const value = getValue(record, column);
                  const content = column.render
                    ? column.render(value, record, index)
                    : value;

                  return (
                    <td
                      key={column.key}
                      className={cn(
                        'text-gray-900',
                        paddingStyles[size],
                        sizeStyles[size],
                        column.align === 'center' && 'text-center',
                        column.align === 'right' && 'text-right'
                      )}
                    >
                      {content}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
