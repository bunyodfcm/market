import React from "react";
import AccountingReports from "./AccountingReports";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, Legend
} from "recharts";

const revenueData = [
  { name: "Yan", income: 4000, expense: 2400 },
  { name: "Fev", income: 3000, expense: 1398 },
  { name: "Mar", income: 5000, expense: 2000 },
  { name: "Apr", income: 2780, expense: 3908 },
];

const branchData = [
  { name: "Toshkent", sales: 2400 },
  { name: "Samarqand", sales: 1398 },
  { name: "Andijon", sales: 980 },
  { name: "Buxoro", sales: 2000 },
];

const employees = [
  { id: 1, name: "Aliyev", position: "Manager", salary: 800, report: "Yaxshi" },
  { id: 2, name: "Karimov", position: "Sales", salary: 500, report: "O'rtacha" },
  { id: 3, name: "Xolmatova", position: "Accountant", salary: 700, report: "Yaxshi" },
];

const productData = [
  { name: "Non", value: 400 },
  { name: "Sut", value: 300 },
  { name: "Go‘sht", value: 300 },
  { name: "Sabzavot", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Analytics: React.FC = () => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">📊 Analytics Dashboard</h1>

      {/* Kirim-chiqimlar grafigi */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-2">Umumiy Kirim / Chiqimlar</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="income" stroke="#4CAF50" />
            <Line type="monotone" dataKey="expense" stroke="#F44336" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Filiallar bo‘yicha savdo */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-2">Filiallar bo‘yicha savdo</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={branchData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#2196F3" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Xodimlar ro‘yxati */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-2">Xodimlar ro‘yxati</h2>
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Ism</th>
              <th className="border p-2">Lavozim</th>
              <th className="border p-2">Maosh</th>
              <th className="border p-2">Hisobot</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td className="border p-2">{emp.name}</td>
                <td className="border p-2">{emp.position}</td>
                <td className="border p-2">${emp.salary}</td>
                <td className="border p-2">{emp.report}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mahsulotlar */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-2">Mahsulotlar hisobotlari</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={productData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={120}
              dataKey="value"
              label
            >
              {productData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

<AccountingReports />

      {/* Buxgalteriya */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-2">Buxgalteriya hisob-kitoblari</h2>
        <ul className="list-disc pl-6">
          <li>📌 Umumiy balans: $15,000</li>
          <li>📌 Joriy daromad: $5,000</li>
          <li>📌 Joriy xarajatlar: $3,200</li>
          <li>📌 Soliq majburiyatlari: $1,500</li>
        </ul>
      </div>
    </div>
  );
};

export default Analytics;
