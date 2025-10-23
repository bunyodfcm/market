import React from 'react';
import { Table } from '../../shared/ui';
import { Icon } from '@iconify/react';

type User = {
  id: number;
  name: string;
  phone: string;
  status: string;
  role: string;
};

const UsersPage: React.FC = () => {
  const users: User[] = [
    { id: 1, name: 'Ali', phone: '123456', status: 'active', role: 'admin' },
    { id: 2, name: 'Vali', phone: '123456', status: 'inactive', role: 'user' },
    { id: 3, name: 'Guli', phone: '123456', status: 'active', role: 'admin' },
  ];
  const columns = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: 'name',
      title: 'Ism',
      dataIndex: 'name',
    },
    {
      key: 'phone',
      title: 'Telefon',
      dataIndex: 'phone',
    },
    {
      key: 'role',
      title: 'Rol',
      dataIndex: 'role',
    },
    {
      key: 'status',
      title: 'Holat',
      dataIndex: 'status',
      render: (status: string) => (
        <span
          className={`px-4 py-1 rounded-full text-xs font-semibold ${
            status === 'active'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {status === 'active' ? 'Faol' : 'Nofaol'}
        </span>
      ),
    },
    {
      key: 'actions',
      title: 'Amallar',
      dataIndex: 'actions',
      render: (_: unknown, record: User) => (
        <div className="flex justify-center gap-2">
          <button
            onClick={() => console.log('View: ', record.id)}
            className="text-blue-600"
          >
            <Icon icon="mdi:eye" height="16" width="16" />
          </button>
          <button
            onClick={() => console.log('Edit: ', record.id)}
            className="text-yellow-600"
          >
            <Icon icon="mdi:pencil" height="16" width="16" />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Foydalanuvchilar
          </h1>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <Table columns={columns} data={users} className="text-center" />
        </div>
      </div>
    </div>
  );
};

export default UsersPage;