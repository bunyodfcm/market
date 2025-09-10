import React, { useEffect, useState } from "react";
// import { PencilIcon, TrashIcon, EyeIcon } from "@heroicons/react/24/outline";
import { fetchUsers } from "../../../services/authApi";
import Table from "../../../components/ui/Table";
import UserCard from "../../../components/ui/UserCard";
import CardList from "../../../components/ui/CardList";
import Modal from "../../../components/ui/Modal";

interface User {
  id: number;
  nickname: string;
  phone: string;
  roles: string;
  isActive: boolean;
  createdAt: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getUsers = async (data?: any) => {
    const users = await fetchUsers({ page: 1, limit: 10, ...data });

    setUsers(users.data);
  };

  useEffect(() => {
    getUsers(searchTerm ? { search: searchTerm } : undefined);
  }, [searchTerm]);

  // const getStatusBadge = (status: string) => {
  //   return status === "active" ? (
  //     <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
  //       Active
  //     </span>
  //   ) : (
  //     <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
  //       Inactive
  //     </span>
  //   );
  // };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Users</h1>
          <p className="text-gray-600">Manage your application users</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"onClick={() => setIsModalOpen(true)}>
          Add User
        </button>
      </div>
       <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="User List"
        size="md"
      >
       <div className="p-4">
        data
        </div>
      </Modal>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">All Users</h3>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Search users..."
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  // Implement search functionality here
                  if (e.target.value === "") {
                    getUsers();
                  }
                }}
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table<User>
            data={users}
            columns={[
              { key: "nickname", header: "Nickname" },
              { key: "phone", header: "Phone" },
              { key: "roles", header: "Roles" },
              {
                key: "isActive",
                header: "Status",
                render: (value) =>
                  value ? (
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                      Active
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded-full">
                      Inactive
                    </span>
                  ),
              },
              {
                key: "createdAt",
                header: "Created At",
                render: (value: any) => new Date(value).toLocaleDateString(),
              },
            ]}
            onRowClick={(user) => alert(`Clicked user: ${user.nickname}`)}
          />
          <CardList>
            {users.map((user) => (
              <UserCard
                key={user.id}
                nickname={user.nickname}
                phone={user.phone}
                roles={user.roles}
                isActive={user.isActive}
                createdAt={user.createdAt}
              />
            ))}
          </CardList>
        </div>
      </div>
    </div>
  );
};

export default Users;
