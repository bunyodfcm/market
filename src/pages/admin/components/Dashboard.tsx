import { useState } from "react";
import Card from "../../../components/ui/Cards/Card";
import Modal from "../../../components/ui/Modal";
import { useAuth } from "../../../hooks/useAuth";




const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen, "isModalOpen");
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <Card title="Welcome" subtitle={user ? `Hello, ${user.nickname}!` : ""}>
        <p>
          This is the admin dashboard. Here you can manage users and view
          statistics.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setIsModalOpen(true)}
        >
          Show Users
        </button>
      </Card>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="User List"
        size="md"
      >
        <p>Lorem ipsum dolor sit amet.</p>
        {/* <Table data={usersData} columns={userColumns} className="" onRowClick={()=>alert()} /> */}
      </Modal>

      <div className="p-6 space-y-6">
      <Card title="User Stats" subtitle="Overview of active users">
        <p className="text-gray-700">Total Users: 120</p>
        <p className="text-gray-700">Active: 90</p>
        <p className="text-gray-700">Inactive: 30</p>
      </Card>

      <Card>
        <p className="text-gray-700">This is a simple card without header</p>
      </Card>
    </div>
    </div>
  );
};

export default Dashboard;
