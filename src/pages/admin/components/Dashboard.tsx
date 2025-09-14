import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  ShoppingBag,
  Users,
  Building2,
  Boxes,
  // TrendingUp,
} from "lucide-react";

const salesData = [
  { name: "Mon", sales: 1200 },
  { name: "Tue", sales: 900 },
  { name: "Wed", sales: 1400 },
  { name: "Thu", sales: 800 },
  { name: "Fri", sales: 1600 },
  { name: "Sat", sales: 1900 },
  { name: "Sun", sales: 1100 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Statistik kartalar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-2xl shadow flex items-center justify-between">
          <div>
            <p className="text-gray-500">Umumiy Kompaniyalar</p>
            <h2 className="text-2xl font-bold">12</h2>
          </div>
          <Building2 className="w-10 h-10 text-blue-500" />
        </div>

        <div className="bg-white p-4 rounded-2xl shadow flex items-center justify-between">
          <div>
            <p className="text-gray-500">Mijozlar</p>
            <h2 className="text-2xl font-bold">254</h2>
          </div>
          <Users className="w-10 h-10 text-green-500" />
        </div>

        <div className="bg-white p-4 rounded-2xl shadow flex items-center justify-between">
          <div>
            <p className="text-gray-500">Ombordagi Mahsulotlar</p>
            <h2 className="text-2xl font-bold">1,342</h2>
          </div>
          <Boxes className="w-10 h-10 text-purple-500" />
        </div>

        <div className="bg-white p-4 rounded-2xl shadow flex items-center justify-between">
          <div>
            <p className="text-gray-500">Umumiy Sotuvlar</p>
            <h2 className="text-2xl font-bold">$18,430</h2>
          </div>
          <ShoppingBag className="w-10 h-10 text-orange-500" />
        </div>
      </div>

      {/* Sotuvlar grafiki */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Haftalik Sotuvlar</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#4F46E5" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Oxirgi buyurtmalar jadvali */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Oxirgi Buyurtmalar</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2">Mijoz</th>
                <th className="p-2">Mahsulot</th>
                <th className="p-2">Summa</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Ali</td>
                <td className="p-2">iPhone 14</td>
                <td className="p-2">$1200</td>
                <td className="p-2 text-green-600">Yetkazildi</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Malika</td>
                <td className="p-2">AirPods Pro</td>
                <td className="p-2">$250</td>
                <td className="p-2 text-yellow-600">Jarayonda</td>
              </tr>
              <tr>
                <td className="p-2">Jasur</td>
                <td className="p-2">MacBook Pro</td>
                <td className="p-2">$2100</td>
                <td className="p-2 text-red-600">Bekor qilindi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
