import { Icon } from "@iconify/react";

const OrdersPageActions = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-2">
      {/* 🔍 Search Input */}
      <div className="relative w-full md:w-1/3">
        <Icon
          icon="mdi:magnify"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
        />
        <input
          type="text"
          placeholder="Search products..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* ⚙️ Filters */}
      <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
        {/* Category Filter */}
        <select className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Category</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
          <option value="books">Books</option>
          <option value="toys">Toys</option>
        </select>

        {/* Show Count */}
        <select className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Show 20</option>
          <option value="15">15</option>
          <option value="10">10</option>
          <option value="5">5</option>
        </select>

        {/* Sort by Date or Rating */}
        <select className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Sort by</option>
          <option value="date-asc">Oldest</option>
          <option value="date-desc">Newest</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
};

export default OrdersPageActions;
