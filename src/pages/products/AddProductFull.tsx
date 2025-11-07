import { Icon } from '@iconify/react';
import { useTranslation } from '../../shared/i18n';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductCrud } from '../../features/product-crud/model/useProductCrud';
import type { Product } from '../../app/store/types';

const CreateProductFull: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { handleAdd, isLoading } = useProductCrud();

  const [description, setDescription] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    name: '',
    price: 0,
    description: '',
    image: '',
    category: '',
    stock: 0,
  });

  // 🔹 Checkboxlarni boshqarish
  const handleCategoryChange = (value: string) => {
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((c) => c !== value)
        : [...prev, value]
    );
  };

  // 🔹 Inputlar uchun umumiy handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // 🔹 Formani yuborish
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct: Omit<Product, 'id'> = {
      ...formData,
      description,
      category: selectedCategories.join(', '),
    };

    await handleAdd(newProduct);
    navigate(-1); // qaytish
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            {t.products.createProduct}
          </h1>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center px-3 py-2 border-2 border-gray-200 text-sm font-medium rounded-md text-gray-500 bg-white hover:bg-gray-100"
            >
              <Icon icon="mdi:close" width="24" height="24" className="mr-2" />
              {t.common.cancel}
            </button>

            <button
              type="submit"
              form="create-product-form"
              disabled={isLoading}
              className="inline-flex items-center px-3 py-2 border-2 border-gray-200 text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 disabled:opacity-50"
            >
              <Icon icon="mdi:content-save" width="24" height="24" className="mr-2" />
              {isLoading ? 'Saving...' : t.common.save}
            </button>
          </div>
        </div>

        <div className="p-6">
          <form id="create-product-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-3 grid-rows-3 gap-4">
              {/* Product Info */}
              <div className="col-span-2 bg-white rounded-lg shadow p-6">
                <label htmlFor="name">Product title</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3"
                />
                <div className="flex gap-4 mt-4 md:flex-row flex-col justify-between items-center">
                  <div>
                    <label htmlFor="sku">SKU</label>
                    <input
                      type="text"
                      id="sku"
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="color">Color</label>
                    <input
                      type="text"
                      id="color"
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="size">Size</label>
                    <input
                      type="text"
                      id="size"
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3"
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="col-span-2 col-start-1 row-start-2 bg-white rounded-lg shadow p-6">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3"
                ></textarea>
              </div>

              {/* Image */}
              <div className="col-span-2 col-start-1 row-start-3 bg-white rounded-lg shadow p-6">
                <label htmlFor="image">Images</label>
                <input
                  type="file"
                  id="image"
                  multiple
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3"
                />
              </div>

              {/* Right Sidebar */}
              <div className="row-span-3 col-start-3 row-start-1 bg-white rounded-lg shadow p-6">
                <div className="flex flex-col gap-6 h-full justify-start">
                  <div>
                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      id="price"
                      value={formData.price}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="stock">Stock</label>
                    <input
                      type="number"
                      id="stock"
                      value={formData.stock}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-medium mt-2">Category</span>
                    {['electronics', 'fashion', 'home', 'books', 'toys'].map((cat) => (
                      <label key={cat} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          value={cat}
                          checked={selectedCategories.includes(cat)}
                          onChange={() => handleCategoryChange(cat)}
                          className="accent-blue-500"
                        />
                        <span className="capitalize">{cat}</span>
                      </label>
                    ))}
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
