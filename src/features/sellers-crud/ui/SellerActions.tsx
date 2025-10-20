import { Icon } from '@iconify/react';

type Props = {
  id?: string;
  view?: () => void;
  edit?: () => void;
  delete?: () => void;
};

const SellerActions = ({
  view = () => {},
  edit = () => {},
  delete: deleteAction = () => {},
}: Props) => {
  return (
    <div className="absolute group bottom-3 right-3">
      {/* Main action button */}
      <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition">
        <Icon icon="mdi:dots-horizontal" className="w-5 h-5 text-gray-600" />
      </button>

      {/* Hover menu */}
      <div
        className="
          absolute right-0 top-full mt-2 
          flex flex-col 
          bg-white border border-gray-200 
          rounded-xl shadow-md 
          opacity-0 invisible 
          group-hover:opacity-100 group-hover:visible 
          transition-all duration-200 ease-in-out
          z-10
          min-w-[120px]
        "
      >
        <button
          onClick={view}
          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-sm text-gray-700"
        >
          <Icon icon="mdi:eye" className="w-4 h-4" />
          View
        </button>
        <button
          onClick={edit}
          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-sm text-gray-700"
        >
          <Icon icon="mdi:pencil" className="w-4 h-4" />
          Edit
        </button>
        <button
          onClick={deleteAction}
          className="flex items-center gap-2 px-4 py-2 hover:bg-red-50 text-sm text-red-600"
        >
          <Icon icon="mdi:trash-can" className="w-4 h-4" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default SellerActions;
