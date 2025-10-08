import React from 'react';
import ProductPageHeader from '../../features/product-crud/ui/ProductPageHeader';
import ProductPageActions from '../../features/product-crud/ui/ProductPageActions';
import ProductCard from '../../features/product-crud/ui/ProductCard';
import CreateProduct from './CreateProduct';

const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <ProductPageHeader />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow py-6">
          <div className="text-gray-600 dark:text-gray-300 border-b-2 pb-4 border-gray-200">
            <ProductPageActions />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
          </div>
          <CreateProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
