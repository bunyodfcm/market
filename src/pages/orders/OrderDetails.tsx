import { useTranslation } from '../../shared/i18n';
import { useNavigate } from 'react-router-dom';

const OrderDetails: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
   <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
           <div className="mb-6 flex items-center justify-between">
             <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Buyurtma ma'lumotlari
             </h1>
           </div>
           
         </div>
       </div>
  );
};
export default OrderDetails;
