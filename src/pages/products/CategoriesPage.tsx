import { Icon } from '@iconify/react';
import { Table } from '../../shared/ui';

type CategoriesPageProps = {
  id: string;
  name: string;
  slug: string;
  type: string;
  order: number;
  description: string;
};

const categorysData: CategoriesPageProps[] = [
  {
    id: '1',
    name: 'Elektronika',
    slug: 'elektronika',
    type: 'Jismoniy',
    order: 1,
    description: 'Turli elektron qurilmalar va gadjetlar',
  },
  {
    id: '2',
    name: 'Kitoblar',
    slug: 'kitoblar',
    type: 'Jismoniy',
    order: 2,
    description: 'Turli janrlardagi kitoblar va adabiyotlar',
  },
  {
    id: '3',
    name: "Dasturiy ta'minot",
    slug: 'dasturiy-taminot',
    type: 'Raqamli',
    order: 3,
    description: "Turli dasturiy ta'minot va ilovalar",
  },
];

const CategoriesPage: React.FC = () => {
  const categoryColumns = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: 'name',
      title: 'Kategoriya nomi',
      dataIndex: 'name',
    },

    {
      key: 'description',
      title: 'Tavsif',
      dataIndex: 'description',
    },
    {
      key: 'slug',
      title: 'Slug',
      dataIndex: 'slug',
      render: (slug: string) => <span className="lowercase">{'/' + slug}</span>,
    },
    {
      key: 'order',
      title: 'Tartib raqami',
      dataIndex: 'order',
    },
    {
      key: 'actions',
      title: 'Amallar',
      dataIndex: 'actions',
      render: (_: unknown, record: CategoriesPageProps) => (
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900">Kategoriyalar</h1>
        <div className="flex flex-row justify-between mt-8 bg-white rounded-lg shadow py-6">
          <div className="border-r mr-2 pr-2 border-gray-200">
            {/* add category section*/}
            <div className="mt-6 px-6">
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Kategoriya nomi"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Slug"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Kategoriya turi</option>
                  <option value="physical">Jismoniy</option>
                  <option value="digital">Raqamli</option>
                </select>

                <textarea
                  placeholder="Kategoriya tavsifi"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Qo'shish
                </button>
              </form>
            </div>
          </div>

          <div className="w-full text-gray-600 border-gray-200">
            <Table
              columns={categoryColumns}
              data={categorysData}
              variant="striped"
              size="lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
