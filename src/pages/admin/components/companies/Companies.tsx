import React from "react";
import CompanyCard from "../../../../components/ui/Cards/CompanyCard";
import { companies } from "./data";
import ShowList from "../../../../components/ui/Cards/ShowList";
// import CompanyCard from "../../../../components/ui/Cards/CompaniesCard";

const Companies: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Companies</h1>
      <ShowList className="bg-white p-6 rounded-lg shadow space-y-6 ">
        {companies.map((company) => (
          <CompanyCard
            key={company.id}
            company={company}
            // onViewProfile={() => {
            //   // Kompaniya profiliga o'tish logikasi
            //   console.log(`Viewing profile for company ID: ${company.id}`);
            // }}
          />
        ))}
      </ShowList>
    </div>
  );
};

export default Companies;
