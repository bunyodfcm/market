import React from "react";
import { companies } from "./data";
import CardList from "../../../../components/ui/Cards/CardList";
import CompanyCard from "../../../../components/ui/Cards/CompaniesCard";

const Companies: React.FC = () => {
  return (
    <div>

      <h1 className="text-2xl font-bold mb-4">Companies</h1>
      <CardList className="bg-white p-6 rounded-lg shadow" arrows={true}>
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
