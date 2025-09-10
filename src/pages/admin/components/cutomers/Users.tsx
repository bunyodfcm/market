import React, { useEffect, useState } from "react";
import type { User } from "./types";
// import { PencilIcon, TrashIcon, EyeIcon } from "@heroicons/react/24/outline";
import { fetchUsers } from "../../../../services/authApi";
import Table from "../../../../components/ui/Table";


const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const getUsers = async (data?: any) => {
    const users = await fetchUsers({ page: 1, limit: 10, ...data });

    setUsers(users.data);
  };

  useEffect(() => {
    getUsers(searchTerm ? { search: searchTerm } : undefined);
  }, [searchTerm]);

  const getStatusBadge = (status: boolean) => {
    return status ? (
      <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
        Active
      </span>
    ) : (
      <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
        Inactive
      </span>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
          <p className="text-gray-600">Manage your application Customers</p>
        </div>
      </div>

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
              {
                key: "nickname",
                header: "Image",
                render: (_, row) => (
                  <img
                    src={`https://ui-avatars.com/api/?name=${row.nickname}&background=random`}
                    alt={row.nickname}
                    className="w-10 h-10 rounded-full border"
                  />
                ),
              },
              { key: "nickname", header: "Nickname" },
              { key: "phone", header: "Phone" },
              { key: "roles", header: "Roles" },
              {
                key: "isActive",
                header: "Status",
                render: (value: any) => getStatusBadge(value),
              },
              {
                key: "createdAt",
                header: "Created At",
                render: (value: any) => new Date(value).toLocaleDateString(),
              },
            ]}
            onRowClick={(user) => alert(`Clicked user: ${user.nickname}`)}
          />
          {/* <CardList className="bg-white p-6 rounded-lg shadow">
           
          </CardList> */}
        </div>
      </div>
    </div>
  );
};

export default Users;
