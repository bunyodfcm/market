import { Icon } from '@iconify/react';
import { useTranslation } from '../../shared/i18n';
// import DescriptionEditor from '../../features/product-crud/ui/DescriptionEditor';
import { useState } from 'react';

const CreateProductFull: React.FC = () => {
  const [description, setDescription] = useState('');
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {t.products.createProduct}
          </h1>
          <button className="inline-flex items-center px-3 py-2 border border-2 border-gray-200 text-sm font-medium rounded-md text-gray-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <Icon icon="mdi:close" width="24" height="24" className="mr-2" />
            {t.common.cancel}
          </button>
        </div>
        <div className="p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-3 grid-rows-3 gap-4">
              <div className="col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <label htmlFor="productName">Product title</label>
                <input
                  type="text"
                  id="productName"
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
                <div className="flex gap-4 mt-4 md:flex-row flex-col justify-between items-center">
                  <div>
                    <label htmlFor="description">SKU</label>
                    <input
                      type="text"
                      id="sku"
                      className="mt-1 block w-full  border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="color">Color</label>
                    <input
                      type="text"
                      id="color"
                      className="mt-1 block w-full  border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="size">Size</label>
                    <input
                      type="text"
                      id="size"
                      className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-2 col-start-1 row-start-2 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  rows={4}
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>
              <div className="col-span-2 col-start-1 row-start-3 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <label htmlFor="image">Images</label>
                <input
                  type="file"
                  id="image"
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  multiple
                />
              </div>
              <div className="row-span-3 col-start-3 row-start-1 bg-white dark:bg-gray-800 rounded-lg shadow p-6 ">
                <div className="flex flex-col gap-6 h-full justify-start">
                  <div>
                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      id="price"
                      className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="status">Status</label>
                    <input
                      type="text"
                      id="status"
                      className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="tags">Tags</label>
                    <input
                      type="text"
                      id="tags"
                      className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-medium mt-2">Category</span>

                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="category"
                        value="electronics"
                        className="accent-blue-500"
                      />
                      <span>Electronics</span>
                    </label>

                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="category"
                        value="fashion"
                        className="accent-blue-500"
                      />
                      <span>Fashion</span>
                    </label>

                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="category"
                        value="home"
                        className="accent-blue-500"
                      />
                      <span>Home</span>
                    </label>

                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="category"
                        value="books"
                        className="accent-blue-500"
                      />
                      <span>Books</span>
                    </label>

                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="category"
                        value="toys"
                        className="accent-blue-500"
                      />
                      <span>Toys</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateProductFull;
