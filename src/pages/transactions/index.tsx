import { useNavigate } from 'react-router-dom';

import { Table } from '../../shared/ui';
import { Icon } from '@iconify/react';
import TransactionsPageHeader from '../../features/transactions-crud/ui/TransactionsPageHeader';
import TransactionsPageActions from '../../features/transactions-crud/ui/TransactionsPageActions';

type Transactions = {
  id: number;
  paid: number;
  method: string;
  created: string;
};

const TransactionsPage: React.FC = () => {
  const navigate = useNavigate();

  const transactionsData: Transactions[] = [
    {
      id: 1,
      paid: 200,
      method: 'MasterCard',
      created: '12.02.2022',
    },
    {
      id: 2,
      paid: 200,
      method: 'MasterCard',
      created: '12.02.2022',
    },
    {
      id: 3,
      paid: 200,
      method: 'MasterCard',
      created: '12.02.2022',
    },
    {
      id: 4,
      paid: 200,
      method: 'MasterCard',
      created: '12.02.2022',
    },
    {
      id: 5,
      paid: 200,
      method: 'MasterCard',
      created: '12.02.2022',
    },
  ];

  const columns = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: 'paid',
      title: "To'lov",
      dataIndex: 'paid',
    },
    {
      key: 'method',
      title: "To'lov turi",
      dataIndex: 'method',
    },
    {
      key: 'created',
      title: 'Yaratilgan',
      dataIndex: 'created',
    },
    {
      key: 'actions',
      title: 'Amallar',
      dataIndex: 'actions',
      render: (_: unknown, record: Transactions) => (
        <div className="flex justify-center gap-2">
          <button
            onClick={() => navigate(`${record.id}`)}
            className="text-blue-600 cursor-pointer"
          >
            {' '}
            <Icon icon="mdi:eye" height="16" width="16" />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6 md:flex-row flex-col gap-4">
          <TransactionsPageHeader />
        </div>
        <div className="flex flex-row bg-white rounded-lg shadow py-6">
          <div className="w-full">
            <div className="text-gray-600 border-b-2 pb-4 border-gray-200">
              <TransactionsPageActions />
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <Table
                columns={columns}
                data={transactionsData}
                className="text-center"
                size="lg"
              />
            </div>
          </div>
          <div className="w-[350px] flex items-center justify-center bg-gray-200 rounded-lg mx-4">
            <span className="text-gray-400">
              Views the transactions details
            </span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TransactionsPage;
