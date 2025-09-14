import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Building2,
  DollarSign,
  // Users,
  // Boxes
} from "lucide-react";

const branchData = [
  { name: "Chilonzor", sales: 4500 },
  { name: "Yunusobod", sales: 3800 },
  { name: "Sergeli", sales: 5100 },
  { name: "Mirzo Ulug‘bek", sales: 2900 },
];

const expenseData = [
  { name: "Kirim", value: 24000 },
  { name: "Chiqim", value: 14500 },
  { name: "Foyda", value: 9500 },
];

const workers = [
  { id: 1, name: "Ali", role: "Kassir", sales: 12000 },
  { id: 2, name: "Malika", role: "Sotuvchi", sales: 8000 },
  { id: 3, name: "Jasur", role: "Admin", sales: 15000 },
];

const products = [
  { id: 1, name: "iPhone 14", sold: 120, stock: 30, revenue: 144000 },
  { id: 2, name: "AirPods Pro", sold: 250, stock: 80, revenue: 62500 },
  { id: 3, name: "MacBook Pro", sold: 60, stock: 10, revenue: 126000 },
];

const COLORS = ["#4F46E5", "#EF4444", "#22C55E"];

const Analytics: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Statistik bloklar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-2xl shadow flex items-center justify-between">
          <div>
            <p className="text-gray-500">Filiallar</p>
            <h2 className="text-2xl font-bold">4</h2>
          </div>
          <Building2 className="w-10 h-10 text-blue-500" />
        </div>

        <div className="bg-white p-4 rounded-2xl shadow flex items-center justify-between">
          <div>
            <p className="text-gray-500">Umumiy Kirim</p>
            <h2 className="text-2xl font-bold">$24,000</h2>
          </div>
          <DollarSign className="w-10 h-10 text-green-500" />
        </div>

        <div className="bg-white p-4 rounded-2xl shadow flex items-center justify-between">
          <div>
            <p className="text-gray-500">Umumiy Chiqim</p>
            <h2 className="text-2xl font-bold">$14,500</h2>
          </div>
          <DollarSign className="w-10 h-10 text-red-500" />
        </div>

        <div className="bg-white p-4 rounded-2xl shadow flex items-center justify-between">
          <div>
            <p className="text-gray-500">Foyda</p>
            <h2 className="text-2xl font-bold">$9,500</h2>
          </div>
          <DollarSign className="w-10 h-10 text-purple-500" />
        </div>
      </div>

      {/* Filiallar bo‘yicha sotuvlar */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">
          Filiallar bo‘yicha Sotuvlar
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={branchData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#4F46E5" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Kirim-chiqim Pie Chart */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Umumiy Kirim-Chiqim</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={expenseData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {expenseData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Ishchilar ro‘yxati */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Ishchilar Hisoboti</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">Ism</th>
              <th className="p-2">Lavozim</th>
              <th className="p-2">Sotuv</th>
            </tr>
          </thead>
          <tbody>
            {workers.map((w) => (
              <tr key={w.id} className="border-b">
                <td className="p-2">{w.name}</td>
                <td className="p-2">{w.role}</td>
                <td className="p-2">${w.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mahsulotlar bo‘yicha hisobot */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Mahsulotlar Hisoboti</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">Mahsulot</th>
              <th className="p-2">Sotilgan</th>
              <th className="p-2">Qoldiq</th>
              <th className="p-2">Tushum</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b">
                <td className="p-2">{p.name}</td>
                <td className="p-2">{p.sold}</td>
                <td className="p-2">{p.stock}</td>
                <td className="p-2">${p.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Analytics;
