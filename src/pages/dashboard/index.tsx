import React from "react";
import { Icon } from "@iconify/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const DashboardPage: React.FC = () => {
  const salesData = [
    { month: "Jan", current: 800, previous: 700 },
    { month: "Feb", current: 900, previous: 650 },
    { month: "Mar", current: 1200, previous: 800 },
    { month: "Apr", current: 750, previous: 600 },
    { month: "May", current: 850, previous: 700 },
    { month: "Jun", current: 500, previous: 400 },
    { month: "Jul", current: 950, previous: 650 },
    { month: "Aug", current: 1100, previous: 850 },
    { month: "Sep", current: 1150, previous: 900 },
    { month: "Oct", current: 1000, previous: 800 },
    { month: "Nov", current: 900, previous: 700 },
    { month: "Dec", current: 950, previous: 750 },
  ];

  const pieData = [
    { name: "Social media", value: 50, color: "#3b82f6" },
    { name: "Purchased visitors", value: 30, color: "#93c5fd" },
    { name: "By advertisement", value: 15, color: "#a78bfa" },
    { name: "Affiliate visitors", value: 5, color: "#6ee7b7" },
  ];

  const orders = [
    { id: 2323, name: "Devon Lane", email: "devon@example.com", price: 778.35, status: "Delivered", date: "07.05.2020" },
    { id: 2458, name: "Darrell Steward", email: "darrell@example.com", price: 219.78, status: "Canceled", date: "03.07.2020" },
    { id: 6289, name: "Darlene Robertson", email: "darlene@example.com", price: 928.41, status: "Pending", date: "23.03.2020" },
    { id: 3869, name: "Courtney Henry", email: "courtney@example.com", price: 90.51, status: "Delivered", date: "23.03.2020" },
    { id: 1247, name: "Eleanor Pena", email: "eleanor@example.com", price: 275.43, status: "Delivered", date: "10.03.2020" },
    { id: 3961, name: "Ralph Edwards", email: "ralph@example.com", price: 630.44, status: "Delivered", date: "23.03.2020" },
  ];

  const statusColor = {
    Delivered: "bg-green-100 text-green-600",
    Pending: "bg-yellow-100 text-yellow-600",
    Canceled: "bg-red-100 text-red-600",
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex items-center gap-3 p-5 bg-white rounded-2xl shadow">
          <div className="p-3 bg-orange-100 rounded-xl">
            <Icon icon="mdi:currency-usd" className="text-orange-500 text-2xl" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Sales</p>
            <h2 className="text-xl font-semibold">$19,626,058.20</h2>
          </div>
        </div>

        <div className="flex items-center gap-3 p-5 bg-white rounded-2xl shadow">
          <div className="p-3 bg-green-100 rounded-xl">
            <Icon icon="mdi:cart-outline" className="text-green-500 text-2xl" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Orders</p>
            <h2 className="text-xl font-semibold">3290</h2>
          </div>
        </div>

        <div className="flex items-center gap-3 p-5 bg-white rounded-2xl shadow">
          <div className="p-3 bg-blue-100 rounded-xl">
            <Icon icon="mdi:package-variant" className="text-blue-500 text-2xl" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Products</p>
            <h2 className="text-xl font-semibold">332</h2>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow lg:col-span-2">
          <h3 className="font-semibold mb-4">Sale statistics</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="current" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              <Bar dataKey="previous" fill="#cbd5e1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow flex flex-col items-center justify-center">
          <h3 className="font-semibold mb-2">Visitors</h3>
          <p className="text-sm text-gray-500 mb-2">Recent month</p>
          <PieChart width={180} height={180}>
            <Pie
              data={pieData}
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
              paddingAngle={3}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
          <p className="text-lg font-semibold mt-2">97.14% Website growth</p>
          <div className="mt-4 space-y-1 text-sm text-gray-500">
            {pieData.map((item) => (
              <div key={item.name}>
                <span
                  className="inline-block w-3 h-3 rounded-full mr-2"
                  style={{ background: item.color }}
                ></span>
                {item.name} {item.value}%
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest orders */}
      <div className="bg-white p-5 rounded-2xl shadow">
        <h3 className="font-semibold mb-4">Latest orders</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="p-3">ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Email</th>
                <th className="p-3">Price</th>
                <th className="p-3">Status</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">{order.id}</td>
                  <td className="p-3">{order.name}</td>
                  <td className="p-3 text-gray-500">{order.email}</td>
                  <td className="p-3 font-medium">${order.price}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[order.status as keyof typeof statusColor]}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-3">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
