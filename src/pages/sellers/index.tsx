import { useNavigate } from 'react-router-dom';
import SellersPageActions from '../../features/sellers-crud/ui/SellersPageActions';
import SellersPageHeader from '../../features/sellers-crud/ui/SellersPageHeader';
import { Table } from '../../shared/ui';
import { Icon } from '@iconify/react';

type Seller = {
  id: number;
  image: string;
  name: string;
  email: string;
  status: string;
  date: string;
};

const SellersPage: React.FC = () => {
  const navigate = useNavigate();

  const sellersData: Seller[] = [
    {
      id: 1,
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'Ali Valiyev',
      email: 'ali@mail.ru',
      status: 'active',
      date: '2023-08-01',
    },
    {
      id: 2,
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      name: 'Sara Karimova',
      email: 'sara@mail.ru',
      status: 'inactive',
      date: '2023-07-15', 
    },
    {
      id: 3,
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      name: 'Olimjon Islomov',
      email: 'olimjon@mail.ru',
      status: 'active',
      date: '2023-06-20',
    },
  ];

  const columns = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: 'name',
      title: 'Sotuvchi',
      dataIndex: `name`,
      render: (_: unknown, record: Seller) => (
        <div className="flex items-center gap-3">
          <img
            src={record.image}
            alt={record.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>{record.name}</span>
        </div>
      ),
    },
    {
      key: 'email',
      title: 'Elektron pochta',
      dataIndex: 'email',
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
      render: (_: unknown, record: Seller) => (
        <div className="flex justify-center gap-2">
          <button
            onClick={() => navigate(`/sellers/profile?${record.id}`)}
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6 md:flex-row flex-col gap-4">
          <SellersPageHeader />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow py-6">
          <div className="text-gray-600 dark:text-gray-300 border-b-2 pb-4 border-gray-200">
            <SellersPageActions />
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <Table columns={columns} data={sellersData} className="text-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellersPage;
