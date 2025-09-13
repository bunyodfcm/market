import React, { useEffect, useState } from "react";
import CardList from "../../../../components/ui/Cards/ShowList";
import Table from "../../../../components/ui/Table";
import type { Warehouse } from "./types";
import { warehouses } from "./data";

const Warehouses: React.FC = () => {
  const [warehousesList, setWarehouses] = useState<Warehouse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const getUsers = async () => {
    // Dummy function to mimic user fetching
    // Replace with actual API call if needed
    // const users = await fetchUsers({ page: 1, limit: 10, ...data });
    // setUsers(users.data);
  };
  useEffect(() => {
    // Replace with your API call
    const fetchWarehouses = async () => {
      setLoading(true);
      // Dummy data for demonstration
      const data = warehouses;

      setWarehouses(data);
      setLoading(false);
    };
    fetchWarehouses();
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Warehouses</h1>
        <p className="text-gray-600">Manage your all Warehouses</p>
      </div>

      <CardList
        className="bg-white rounded-lg shadow mt-8"
        arrows={true}
        grid={false}
      >
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Warehouses</h3>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Search..."
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
        <Table
          data={warehousesList}
          columns={[
            { key: "name", header: "Name" },
            { key: "location", header: "Location" },
            { key: "capacity", header: "Capacity" },
            { key: "manager", header: "Manager" },
            { key: "phone", header: "Phone" },
            { key: "isActive", header: "Status" },
            { key: "createdAt", header: "Created At" },
          ]}
        />
      </CardList>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Warehouses;
