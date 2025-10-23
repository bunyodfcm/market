import React from 'react';
import { Rating, Table } from '../../shared/ui';
import { Icon } from '@iconify/react';
import ReviewsPageHeader from '../../features/reviews-crud/ui/ReviewsPageHeader';
import ReviewsPageActions from '../../features/reviews-crud/ui/ReviewsPageActions';

type Review = {
  id: number;
  productName: string;
  name: string;
  rating: number | string;
  date: string;
};

const ReviewsPage: React.FC = () => {
  const reviewsData: Review[] = [
    {
      id: 1,
      productName: 'Mahsulot 1',
      name: 'Ali',
      rating: '5',
      date: '2024-01-01',
    },
    {
      id: 2,
      productName: 'Mahsulot 2',
      name: 'Vali',
      rating: '4',
      date: '2024-01-02',
    },
    {
      id: 3,
      productName: 'Mahsulot 3',
      name: 'Guli',
      rating: '3',
      date: '2024-01-03',
    },
  ];
  const columns = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: 'productName',
      title: 'Mahsulot nomi',
      dataIndex: 'productName',
    },
    {
      key: 'name',
      title: 'Ism',
      dataIndex: 'name',
    },
    {
      key: 'rating',
      title: 'Reyting',
      dataIndex: 'rating',
      render: (rating: number) => (
        <Rating value={rating} className="justify-center" />
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
      render: (_: unknown, record: Review) => (
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
          <ReviewsPageHeader />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className='mb-4 border-b-2 border-b-gray-300 pb-4 '>
            <ReviewsPageActions />
          </div>
          <Table columns={columns} data={reviewsData} className="text-center" />
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
