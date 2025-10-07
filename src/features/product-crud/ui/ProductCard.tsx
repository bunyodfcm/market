type Props = {};

const ProductCard = (props: Props) => {
  return (
    <div className="flex flex-col space-y-4 border-2 border-gray-200 rounded-lg p-6">
      <div>
        <img src="" alt="Image" />
      </div>
      <div className="flex flex-col space-y-4">
        <p>
            Product name
        </p>
        <p className="font-bold">
            $100.00
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
