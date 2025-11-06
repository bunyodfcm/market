import { Icon } from '@iconify/react';

const Topbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-6 border-b-2 border-b-gray-200 bg-gray-50 shadow-sm">
      {/* Search Box */}
      <div className="flex items-center  rounded-md px-3 py-1 w-64">
        <Icon
          icon="mdi:search"
          width="24"
          height="24"
          className="text-gray-400 mr-2"
        />
        <input
          type="text"
          placeholder="Search"
          className="outline-none w-full text-gray-400 placeholder-gray-400"
        />
      </div>

      {/* Right Side Icons and Profile */}
      <div className="flex items-center space-x-6">
        {/* Sun Icon */}
        <Icon
          icon="mdi:white-balance-sunny"
          className="text-gray-400 cursor-pointer hover:text-gray-600"
          width="24"
          height="24"
        />

        {/* Notification Icon with red dot */}
        <div className="relative cursor-pointer">
          <Icon
            icon="mdi:bell"
            className="text-gray-400 hover:text-gray-600"
            width="24"
            height="24"
          />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-600"></span>
        </div>

        {/* Profile Image */}
        <div className="relative flex items-center space-x-1">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="profile"
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
          />
          <Icon
            icon="ep:arrow-down-bold"
            className="text-gray-400 hover:text-gray-600"
            width="16"
            height="16"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
