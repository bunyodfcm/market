import React from "react";

interface UserCardProps {
  nickname: string;
  phone: string;
  roles: string;
  isActive: boolean;
  avatar?: string;
  createdAt?: string;
  onViewProfile?: () => void;
}

const UserCard: React.FC<UserCardProps> = ({
  nickname,
  roles,
  phone,
  isActive,
  onViewProfile,
}) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
      {/* Header (rangli qism) */}
      <div className="bg-yellow-100 h-20 relative">
        <div className="absolute left-1/2 top-full transform -translate-x-1/2 -translate-y-1/2">
          <img
            src={`https://ui-avatars.com/api/?name=${nickname}&background=random`}
            alt={nickname}
            className="w-24 h-24 rounded-full border-4 border-white shadow"
          />
        </div>
        {isActive ? (
          <span className="absolute top-2 right-2 px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
            Active
          </span>
        ) : (
          <span className="absolute px-2 py-1 text-xs bg-red-100 text-red-700 rounded-full">
            Inactive
          </span>
        )}
      </div>

      {/* Body */}
      <div className="pt-16 pb-6 px-6 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{nickname}</h3>
        <p className="relative text-gray-500 text-sm">Role: {roles}</p>
        <p className="text-gray-500 text-sm">{phone}</p>

        <button
          onClick={onViewProfile}
          className="mt-5 w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition"
        >
          View profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;
