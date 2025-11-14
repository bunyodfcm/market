import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiClient } from "../../shared/api/client";

export default function CompaniesPage() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCompanies = async () => {
    try {
      const res = await apiClient.get("/companies");
      setCompanies(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Companies</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {companies.map((c) => (
          <Link
            key={c}
            to={`/companies/${c}`}
            className="border p-4 rounded-lg hover:shadow"
          >
            <h3 className="font-semibold text-lg">{c}</h3>
            <p className="text-gray-600">{c}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
