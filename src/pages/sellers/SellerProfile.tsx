// import { useTranslation } from '../../shared/i18n';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const SellerProfile: React.FC = () => {
  const navigate = useNavigate();
  // const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Sotuvchi  profili
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="mb-4 text-blue-600 hover:underline"
          >
            &larr; Orqaga
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-b-gray-300 pb-3 mb-4">
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default SellerProfile;
