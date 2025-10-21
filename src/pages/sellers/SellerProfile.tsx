// import { useTranslation } from '../../shared/i18n';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Rating } from '../../shared/ui/rating/Rating';

type SellerProfileProps = {
  name: string;
  location: string;
  avatarUrl: string;
  additionalInfo: string;
  address: string;
  contactDetails: string;
  sellerRatings: number;
  sellerReviews: number;
};

const SellerProfile: React.FC = () => {
  const sellerProfile: SellerProfileProps = {
    name: 'Sotuvchi Ismi',
    location: "Toshkent, O'zbekiston",
    avatarUrl: '',
    additionalInfo: "Qo'shimcha ma'lumotlar",
    address: 'Sotuvchi manzili',
    contactDetails: "Kontakt ma'lumotlari",
    sellerRatings: 4.5,
    sellerReviews: 120,
  };

  const setRating = (newRating: number) => {
    console.log('Yangi reyting:', newRating);
  };

  const navigate = useNavigate();
  // const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Sotuvchi profili
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="mb-4 text-blue-600 hover:underline"
          >
            &larr; Orqaga
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-6">
          <div className="flex flex-col justify-between items-start pb-3 mb-4">
            <div
              className="w-full py-8 px-6 rounded-t-lg bg-[linear-gradient(to_bottom,_#d97706_50%,_white_50%)]
  dark:bg-[linear-gradient(to_bottom,_#d97706_50%,_#000_50%)]"
            >
              <div className="flex flex-row items-end justify-between mt-8 pb-8 border-b-2 border-b-gray-300">
                <div className="flex flex-row items-end justify-between">
                  <div className="w-40 h-40 rounded-lg border-4 border-white dark:border-gray-800 overflow-hidden">
                    {sellerProfile.avatarUrl ? (
                      <img
                        src={sellerProfile.avatarUrl}
                        alt="Seller Avatar"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="flewx flex-col ml-4">
                    <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                      {sellerProfile.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      <Icon
                        icon="mdi:map-marker"
                        className="inline-block mr-1 text-red-500"
                      />
                      {sellerProfile.location}
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => navigate(-1)}
                    className="mb-4 border border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition"
                  >
                    Sotuv boyicha &darr;
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row items-start justify-between px-6 mb-6">
              <div className="flex flex-col justify-between border-2 border-gray-300 p-4 rounded-lg">
                <p>
                  <Rating
                    value={sellerProfile.sellerRatings}
                    onChange={setRating}
                    showValue
                    allowHalf
                    variant="warning"
                  />
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2 font-semibold">
                  Sharhlari soni:
                  <span className="text-green-500 font-bold text-xl ml-2">
                    {sellerProfile.sellerReviews}
                  </span>
                  ta
                </p>
              </div>
              <div className="p-4 ml-4">
                <h3 className="text-gray-600 text-lg font-semibold dark:text-gray-300">
                  Contact Info:
                </h3>
                <p>{sellerProfile.contactDetails}</p>
              </div>
              <div className="p-4 ml-4">
                <h3 className="text-gray-600 text-lg font-semibold dark:text-gray-300">
                  Qo'shimcha ma'lumotlar:
                </h3>
                <p>{sellerProfile.additionalInfo}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Sotuvchining mahsulotlari
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          </div>
        </div>
      </div>
    </div>
  );
};
export default SellerProfile;
