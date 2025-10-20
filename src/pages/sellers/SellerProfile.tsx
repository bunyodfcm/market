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
            Buyurtma ma'lumotlari
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
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Icon icon="mdi:calendar" className="w-4 h-4" />
              <span>Wed, Aug 13, 2020, 4:34PM</span>
              <span className="text-gray-400">#ID 3453012</span>
            </div>
            <div className="flex gap-2 mt-2 md:mt-0 md:gap-4">
              <select className="w-28 border border-gray-300 bg-white text-gray-500 rounded-lg px-4 py-2 text-sm dark:bg-gray-800 dark:text-white">
                <option>Text</option>
                <option>Text</option>
                <option>Text</option>
              </select>
              <button className="bg-white text-gray-500 border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-200 dark:bg-gray-800 dark:text-white">
                Save
              </button>
              <button className="bg-white text-gray-500 border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-200 dark:bg-gray-800 dark:text-white">
                <Icon icon="mdi:printer-outline" className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Top info */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Customer */}
            <div className="flex">
              <div className="flex items-start justify-start gap-2 mb-2 px-4 text-blue-600 font-semibold">
                <Icon icon="mdi:user" width="24" height="24" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2 text-blue-600 font-semibold">
                  Customer
                </div>
                <p className="font-medium text-gray-800 dark:text-gray-100">
                  John Alexander
                </p>
                <p className="text-gray-500">alex@example.com</p>
                <p className="text-gray-500">+998 99 22123456</p>
                <a href="#" className="text-blue-500 text-sm hover:underline">
                  View profile
                </a>
              </div>
            </div>

            {/* Order info */}
            <div className="flex">
              <div className="flex items-start justify-start gap-2 mb-2 px-4 text-blue-600 font-semibold">
                <Icon
                  icon="mdi:truck-outline"
                  width="24"
                  height="24"
                  className="-ml-8"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2 text-blue-600 font-semibold">
                  Order info
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Shipping: <span className="font-medium">Fargo express</span>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Pay method: <span className="font-medium">Credit card</span>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Status:{' '}
                  <span className="text-red-500 font-semibold">New</span>
                </p>
                <a href="#" className="text-blue-500 text-sm hover:underline">
                  Download
                </a>
              </div>
            </div>

            {/* Delivery info */}
            <div className="flex">
              <div className="flex items-start justify-start gap-2 mb-2 px-4 text-blue-600 font-semibold">
                <Icon icon="mdi:map-marker" width="24" height="24" />{' '}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2 text-blue-600 font-semibold">
                  Deliver to
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  City: Tashkent, Uzbekistan
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Street: Beruniy 369
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Address: Block A, House 123, Floor 2
                </p>
                <a href="#" className="text-blue-500 text-sm hover:underline">
                  Open map
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-1 gap-4">
            {/* Product Table */}
            <div className="border border-gray-300 rounded-lg overflow-hidden row-span-2">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                  <tr>
                    <th className="text-left p-3">Product</th>
                    <th className="text-center p-3">Quantity</th>
                    <th className="text-center p-3">Unit Price</th>
                    <th className="text-right p-3">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
                  <tr>
                    <td className="p-3 flex items-center gap-2 text-blue-600 font-medium">
                      <img
                        src="https://via.placeholder.com/40"
                        alt="chair"
                        className="w-10 h-10 rounded"
                      />
                      Supreme helinox chair one
                    </td>
                    <td className="text-center p-3">2</td>
                    <td className="text-center p-3">$43.50</td>
                    <td className="text-right p-3">$87.00</td>
                  </tr>
                  <tr>
                    <td className="p-3 flex items-center gap-2 text-blue-600 font-medium">
                      <img
                        src="https://via.placeholder.com/40"
                        alt="gopro"
                        className="w-10 h-10 rounded"
                      />
                      Gopro hero 7
                    </td>
                    <td className="text-center p-3">1</td>
                    <td className="text-center p-3">$102.04</td>
                    <td className="text-right p-3">$203.08</td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="p-0">
                      <div className="w-full p-4 text-right text-sm">
                        <p>
                          Subtotal:{' '}
                          <span className="font-semibold">$973.35</span>
                        </p>
                        <p>
                          Shipping cost:{' '}
                          <span className="font-semibold">$10.00</span>
                        </p>
                        <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                          Grand total:{' '}
                          <span className="text-green-600">$983.00</span>
                        </p>
                        <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                          Payment made
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Payment info + Notes */}
            <div className="flex flex-col gap-4 justify-between">
              <div className="border border-gray-300 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
                  Payment info
                </h3>
                <p className="flex items-center gap-2">
                  <Icon
                    icon="mdi:credit-card-outline"
                    className="w-5 h-5 text-red-500"
                  />
                  Master Card **** **** 4768
                </p>
                <p className="text-gray-500 text-sm">
                  Business name:{' '}
                  <span className="text-gray-800 dark:text-gray-200">
                    Master Card, inc.
                  </span>
                </p>
                <p className="text-gray-500 text-sm">
                  Phone: +1 (800) 555-154-52
                </p>
              </div>

              <div className="flex flex-col">
                <textarea
                  placeholder="Notes"
                  className="border border-gray-300 rounded-lg p-3 text-sm flex-1 resize-none dark:bg-gray-800 dark:text-white"
                ></textarea>
                <button className="bg-blue-500 text-white py-2 rounded-lg mt-3 hover:bg-blue-600">
                  Save note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SellerProfile;
