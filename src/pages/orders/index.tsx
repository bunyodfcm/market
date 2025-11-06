import { useNavigate } from 'react-router-dom';
import OrdersPageActions from '../../features/orders-crud/ui/OrdersPageActions';
import OrdersPageHeader from '../../features/orders-crud/ui/OrdersPageHeader';
import { Table } from '../../shared/ui';
import { Icon } from '@iconify/react';

type Order = {
  id: number;
  user: string;
  total: number;
  status: string;
  date: string;
};

const OrdersPage: React.FC = () => {
  const navigate = useNavigate();

  const orders: Order[] = [
    { id: 1, user: 'Ali', total: 150, status: 'delivered', date: '2023-10-01' },
    { id: 2, user: 'Vali', total: 200, status: 'pending', date: '2023-10-02' },
    { id: 3, user: 'Guli', total: 300, status: 'canceled', date: '2023-10-03' },
  ];

  const columns = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: 'user',
      title: 'Foydalanuvchi',
      dataIndex: 'user',
    },
    {
      key: 'total',
      title: 'Jami',
      dataIndex: 'total',
      render: (total: number) => <span>${total.toFixed(2)}</span>,
    },
    {
      key: 'status',
      title: 'Holat',
      dataIndex: 'status',
      render: (status: string) => (
        <span
          className={`px-4 py-1 rounded-full text-xs font-semibold ${
            status === 'delivered'
              ? 'bg-green-100 text-green-800'
              : status === 'pending'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {status === 'delivered'
            ? 'Yetkazilgan'
            : status === 'pending'
            ? 'Kutilmoqda'
            : 'Bekor qilingan'}
        </span>
      ),
    },
    {
      key: 'date',
      title: 'Sana',
      dataIndex: 'date',
    },
    {
      key: 'actions',
      title: 'Amallar',
      dataIndex: 'actions',
      render: (_: unknown, record: Order) => (
        <div className="flex justify-center gap-2">
          <button
            onClick={() => navigate(`/orders/details?${record.id}`)}
            className="text-blue-600 cursor-pointer"
          >
            {' '}
            <Icon icon="mdi:eye" height="16" width="16" />
          </button>
          <button
            onClick={() => console.log('Edit: ', record.id)}
            className="text-yellow-600 cursor-pointer"
          >
            <Icon icon="mdi:pencil" height="16" width="16" />
          </button>
          <button
            onClick={() => console.log('Delete: ', record.id)}
            className="text-red-600 cursor-pointer"
          >
            <Icon icon="mdi:delete" height="16" width="16" />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6 md:flex-row flex-col gap-4">
          <OrdersPageHeader />
        </div>
        <div className="bg-white rounded-lg shadow py-6">
          <div className="text-gray-600 border-b-2 pb-4 border-gray-200">
            <OrdersPageActions />
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <Table columns={columns} data={orders} className="text-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
