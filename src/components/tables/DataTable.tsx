"use client";
import React from 'react';
import { Table as AntTable, TableProps } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Table } from '../ui/table';

export interface DataTableProps<T> extends Omit<TableProps<T>, 'columns'> {
  columns: DataTableColumn<T>[];
  data: T[];
  loading?: boolean;
  totalItems?: number;
  currentPage?: number;
  pageSize?: number;
  onPageChange?: (page: number, pageSize: number) => void;
  onSort?: (field: string, order: 'ascend' | 'descend' | null) => void;
  onFilter?: (filters: Record<string, string[]>) => void;
}

export interface DataTableColumn<T> extends Omit<ColumnsType<T>[number], 'dataIndex' | 'render'> {
  dataIndex?: string | string[];
  render?: (value: unknown, record: T, index: number) => React.ReactNode;
}

function getNestedValue<T extends Record<string, unknown>>(obj: T, path: string | string[]): unknown {
  if (!path) return undefined;
  const keys = Array.isArray(path) ? path : path.split('.');
  return keys.reduce((current, key) => {
    if (current && typeof current === 'object' && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj as unknown);
}

export function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  loading = false,
  totalItems = 0,
  currentPage = 1,
  pageSize = 10,
  onPageChange,
  onSort,
  onFilter,
  ...props
}: DataTableProps<T>) {
  
  const processedColumns: ColumnsType<T> = columns.map(column => ({
    ...column,
    render: (value: unknown, record: T, index: number): React.ReactNode => {
      if (!column.dataIndex) return value as React.ReactNode;

      const nestedValue = getNestedValue(record, column.dataIndex);

      if (column.render) {
        return column.render(nestedValue, record, index);
      }

      return nestedValue as React.ReactNode;
    },
  }));

  const pagination = {
    current: currentPage,
    pageSize: pageSize,
    total: totalItems,
    showSizeChanger: true,
    showTotal: (total: number) => `Total de ${total} itens`,
    onChange: onPageChange,
  };

  const handleTableChange: TableProps<T>['onChange'] = (pagination, filters, sorter) => {
    if (onSort && 'field' in sorter) {
      onSort(sorter.field as string, sorter.order as 'ascend' | 'descend' | null);
    }
    if (onFilter) {
      onFilter(filters as Record<string, string[]>);
    }
  };

  return (
    <div className="w-full overflow-hidden rounded-lg bg-white dark:bg-gray-800">
      <Table>
        <AntTable
          columns={processedColumns}
          dataSource={data}
          loading={loading}
          pagination={pagination}
          onChange={handleTableChange}
          rowKey={(record: T) => {
            const id = (record as { id?: string | number }).id;
            const key = (record as { key?: string | number }).key;
            return id || key || '';
          }}
          {...props}
        />
      </Table>
    </div>
  );
}
