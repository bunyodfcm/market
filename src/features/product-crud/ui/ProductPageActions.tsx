type Props = {};

const ProductPageActions = (props: Props) => {
  return (
    <div className="flex justify-between px-6">
      <input
        type="text"
        placeholder="Search products..."
        className="w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex space-x-4">
        <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Status</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
          <option value="books">Books</option>
          <option value="toys">Toys</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Show 20</option>
          <option value="price-asc">15</option>
          <option value="price-desc">10</option>
          <option value="newest">5</option>
        </select>
        <select
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          typeof="date"
        >
          <option value="">Date</option>
          <option value="price-asc">Low to High</option>
          <option value="price-desc">High to Low</option>
          <option value="newest">Arrivals</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
};

export default ProductPageActions;
