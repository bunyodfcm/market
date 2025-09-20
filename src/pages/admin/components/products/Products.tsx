import React, { useState,useEffect } from "react";
import Table from "../../../../components/ui/Table";
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import Modal from "../../../../components/ui/Modal";
import ProductForm from "../ui/ProductForm";
import type { Product } from "./types";
import {products}  from "./data";

const Products: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productList, setProductList] = useState<Product[]>([]);



  useEffect(() => {
    setProductList(products);
  }, []);

  const getStatusBadge = (st: string) => {
    switch (st) {
      case "in_stock":
        return (
          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
            In Stock
          </span>
        );
      case "low_stock":
        return (
          <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
            Low Stock
          </span>
        );
      case "out_of_stock":
        return (
          <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
            Out of Stock
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-600">Manage your product catalog</p>
        </div>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          onClick={() => setIsModalOpen(true)}
        >
          <PlusIcon className="w-5 h-5" />
          <span>Add Product</span>
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Mahsulot qo'shish"
        size="md"
      >
        <ProductForm />
      </Modal>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
           <input
            type="text"
            placeholder="Search products..."
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="flex space-x-4">
          <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Sports</option>
            <option>Clothing</option>
          </select>
          <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>All Status</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
         </div>
        </div>
      </div>

      {/* Products Grid */}
     <div className="overflow-x-auto">
       <Table<Product>
            data={productList}
            columns={[
              {
                key: "name",
                header: "Image",
                render: (_, row:Product) => (
                  <img
                    src={`https://ui-avatars.com/api/?name=${row.name}&background=random`}
                    alt={row.name}
                    className="w-10 h-10 rounded-full border"
                  />
                ),
              },
              { key: "name", header: "Name" },
              { key: "price", header: "Price" },
              { key: "category", header: "Category" },
              {
                key: "status",
                header: "Status",
                render: (value: any) => getStatusBadge(value),
              },
              {
              key: "actions",
              header: "Actions",
              render: (_, _row:any) => (
                <div className="flex space-x-2">
                  <button className="p-1 text-blue-600 hover:bg-blue-100 rounded">
                    <EyeIcon className="w-5 h-5" />
                  </button>
                  <button className="p-1 text-green-600 hover:bg-green-100 rounded">
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button className="p-1 text-red-600 hover:bg-red-100 rounded">
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              ),
            },
            ]}
            onRowClick={(products:any) => alert(`Clicked user: ${products.name}`)}
          />
      </div>
    </div>
  );
};

export default Products;
