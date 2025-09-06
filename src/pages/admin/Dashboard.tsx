import { useState } from "react";
import Card from "../../components/ui/Card";
// import Table from "../../components/ui/Table";
// import Modal from "../../components/ui/Modal";
import { useAuth } from "../../hooks/useAuth";

// const usersData = [
//   { id: 1, name: "Admin User", email: "admin@example.com", role: "admin" },
//   { id: 2, name: "Regular User", email: "user@example.com", role: "user" },
// ];

// const userColumns = [
//   { key: "name", header: "Name" },
//   { key: "email", header: "Email" },
//   { key: "role", header: "Role" },
// ];

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
      {/* <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="User List"
        size="md"
      >
        <Table id="users-table" />
      </Modal> */}
    </div>
  );
};

export default Dashboard;
