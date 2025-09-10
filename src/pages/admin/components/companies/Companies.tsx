import React from "react";
import { companies } from "./data";
import CardList from "../../../../components/ui/CardList";
import CompanyCard from "../../../../components/ui/CompaniesCard";

const Companies: React.FC = () => {
  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">Companies</h1>
      <CardList className="bg-white p-6 rounded-lg shadow">
        {companies.map((company) => (
          <CompanyCard
            key={company.id}
            company={company}
            onViewProfile={() => {
              // Bu yerda kompaniya profiliga o'tish logikasini qo'shishingiz mumkin  
              console.log(`Viewing profile for company ID: ${company.id}`);
            }}
          />
        ))}
      </CardList>
    </div>
  );
};

export default Companies;
