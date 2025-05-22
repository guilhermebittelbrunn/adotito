"use client";
import React from 'react';
import { Table as AntTable, TableProps } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Table } from '../ui/table';

// Tipos
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

// Tipo para colunas com suporte a propriedades aninhadas
export interface DataTableColumn<T> extends Omit<ColumnsType<T>[number], 'dataIndex' | 'render'> {
  dataIndex?: string | string[];
  render?: (value: any, record: T, index: number) => React.ReactNode;
}

// Função auxiliar para acessar propriedades aninhadas
function getNestedValue(obj: any, path: string | string[]): any {
  if (!path) return undefined;
  const keys = Array.isArray(path) ? path : path.split('.');
  return keys.reduce((current, key) => (current && current[key] !== undefined ? current[key] : undefined), obj);
}

// Componente principal
export function DataTable<T extends object>({
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
  
  // Processa as colunas para suportar propriedades aninhadas
  const processedColumns: ColumnsType<T> = columns.map(column => ({
    ...column,
    render: (value: any, record: T, index: number) => {
      // Se não houver dataIndex, retorna o valor original
      if (!column.dataIndex) return value;

      // Obtém o valor aninhado
      const nestedValue = getNestedValue(record, column.dataIndex);

      // Se houver uma função render customizada, usa ela
      if (column.render) {
        return column.render(nestedValue, record, index);
      }

      // Renderização padrão
      return nestedValue;
    },
  }));

  // Configuração da paginação
  const pagination = {
    current: currentPage,
    pageSize: pageSize,
    total: totalItems,
    showSizeChanger: true,
    showTotal: (total: number) => `Total de ${total} itens`,
    onChange: onPageChange,
  };

  // Configuração de ordenação e filtros
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
          rowKey={(record: T) => (record as { id?: string | number }).id || (record as { key?: string | number }).key || ''}
          // className="[&_.ant-table-thead_.ant-table-cell]:bg-gray-50 [&_.ant-table-thead_.ant-table-cell]:text-gray-700 [&_.ant-table-thead_.ant-table-cell]:font-semibold [&_.ant-table-thead_.ant-table-cell]:border-b [&_.ant-table-thead_.ant-table-cell]:border-gray-200 dark:[&_.ant-table-thead_.ant-table-cell]:bg-gray-800 dark:[&_.ant-table-thead_.ant-table-cell]:text-gray-200 dark:[&_.ant-table-thead_.ant-table-cell]:border-gray-700 [&_.ant-table-tbody_.ant-table-cell]:border-b [&_.ant-table-tbody_.ant-table-cell]:border-gray-100 dark:[&_.ant-table-tbody_.ant-table-cell]:border-gray-700 [&_.ant-table-tbody_.ant-table-cell]:text-gray-600 dark:[&_.ant-table-tbody_.ant-table-cell]:text-gray-300 [&_.ant-table-tbody_tr:hover_.ant-table-cell]:bg-gray-50 dark:[&_.ant-table-tbody_tr:hover_.ant-table-cell]:bg-gray-700/50 [&_.ant-pagination]:m-4 [&_.ant-pagination-item]:bg-white [&_.ant-pagination-item]:border-gray-200 dark:[&_.ant-pagination-item]:bg-gray-800 dark:[&_.ant-pagination-item]:border-gray-700 [&_.ant-pagination-item-active]:bg-primary-500 [&_.ant-pagination-item-active]:border-primary-500 [&_.ant-pagination-item-active_a]:text-white [&_.ant-pagination-prev_button]:bg-white [&_.ant-pagination-prev_button]:border-gray-200 dark:[&_.ant-pagination-prev_button]:bg-gray-800 dark:[&_.ant-pagination-prev_button]:border-gray-700 [&_.ant-pagination-next_button]:bg-white [&_.ant-pagination-next_button]:border-gray-200 dark:[&_.ant-pagination-next_button]:bg-gray-800 dark:[&_.ant-pagination-next_button]:border-gray-700"
          {...props}
        />
      </Table>
    </div>
  );
}

// Exemplo de uso:
/*
interface User {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  contact: {
    email: string;
    phone: string;
  };
  status: 'active' | 'inactive';
}

const columns: DataTableColumn<User>[] = [
  {
    title: 'Nome Completo',
    dataIndex: ['name', 'firstName'],
    key: 'name',
    render: (value, record) => `${record.name.firstName} ${record.name.lastName}`,
    sorter: true,
  },
  {
    title: 'Email',
    dataIndex: ['contact', 'email'],
    key: 'email',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (value) => (
      <span className={`px-2 py-1 rounded-full text-xs ${
        value === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        {value === 'active' ? 'Ativo' : 'Inativo'}
      </span>
    ),
    filters: [
      { text: 'Ativo', value: 'active' },
      { text: 'Inativo', value: 'inactive' },
    ],
  },
];

const data: User[] = [
  {
    id: 1,
    name: {
      firstName: 'João',
      lastName: 'Silva',
    },
    contact: {
      email: 'joao@email.com',
      phone: '123456789',
    },
    status: 'active',
  },
  // ... mais dados
];

<DataTable
  columns={columns}
  data={data}
  totalItems={100}
  currentPage={1}
  pageSize={10}
  onPageChange={(page, pageSize) => console.log(page, pageSize)}
  onSort={(field, order) => console.log(field, order)}
  onFilter={(filters) => console.log(filters)}
/>
*/ 