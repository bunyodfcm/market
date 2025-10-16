import OrderActions from './OrderActions';

type Props = {
  id?: string;
  name?: string;
  price?: number;
  image?: string;
  description?: string;
};

const ProductCard = ({
  name = 'Product name',
  price = 100.0,
  image,
  description,
}: Props) => {
  return (
    <div className="group/item relative flex flex-col space-y-4 border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-400 text-sm">No image</span>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="font-semibold text-lg">{name}</h3>
        {description && (
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        )}
        <p className="font-bold text-xl text-blue-600">${price.toFixed(2)}</p>
        <div className="group/edit invisible group-hover/item:visible transition-all duration-200 ease-in-out">
          <OrderActions />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
