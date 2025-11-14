import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiClient } from "../../shared/api/client";

export default function CompanyPage() {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCompany = async () => {
    try {
      const res = await apiClient.get(`/companies/${id}`);
      setCompany(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompany();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!company) return <p>Company not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{company}</h1>

      <div className="mt-4 space-y-2">
        <p><strong>Industry:</strong> {company}</p>
        <p><strong>Location:</strong> {company}</p>
        <p><strong>Employees:</strong> {company}</p>
        <p><strong>Description:</strong> {company}</p>
      </div>
    </div>
  );
}
