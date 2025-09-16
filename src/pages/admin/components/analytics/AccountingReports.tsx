import React, { useState } from "react";

const accountingData = [
  { month: "Yanvar", income: 5000, expense: 3200, tax: 800, status: "tayyor" },
  { month: "Fevral", income: 6000, expense: 3500, tax: 900, status: "kutilmoqda" },
  { month: "Mart", income: 7000, expense: 4000, tax: 1000, status: "topshirildi" },
];

const AccountingReports: React.FC = () => {
  const [reports, setReports] = useState(accountingData);

  const handleSubmit = (index: number) => {
    const updated = [...reports];
    updated[index].status = "topshirildi ✅";
    setReports(updated);

    // Bu yerda siz backendga yuborish uchun API chaqirishingiz mumkin:
    // fetch("/api/reports/upload", { method: "POST", body: JSON.stringify(updated[index]) })
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow space-y-4">
      <h2 className="text-xl font-semibold">📑 Buxgalteriya Hisobotlari</h2>
      <table className="w-full border-collapse border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Oy</th>
            <th className="border p-2">Daromad</th>
            <th className="border p-2">Xarajat</th>
            <th className="border p-2">Soliq</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Amal</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((row, i) => (
            <tr key={i}>
              <td className="border p-2">{row.month}</td>
              <td className="border p-2">${row.income}</td>
              <td className="border p-2">${row.expense}</td>
              <td className="border p-2">${row.tax}</td>
              <td className="border p-2">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    row.status.includes("topshirildi")
                      ? "bg-green-100 text-green-700"
                      : row.status.includes("kutilmoqda")
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {row.status}
                </span>
              </td>
              <td className="border p-2">
                {row.status !== "topshirildi ✅" && (
                  <button
                    onClick={() => handleSubmit(i)}
                    className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                  >
                    Topshirish
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountingReports;