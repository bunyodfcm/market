import React from "react";
import type { Company } from "../../../pages/admin/components/companies/types";

interface CompanyCardProps {
  company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <div className="max-w-4xl mx-auto mt-8 rounded-lg overflow-hidden bg-white shadow-lg">
      {/* Header with background */}
      <div className="bg-yellow-700 rounded-t-lg h-28 opacity-60"></div>

      {/* Main content */}
      <div className="md:flex px-6 py-2 pt-0 -mt-4 relative z-10">
        {/* Logo */}
        <div className="flex-shrink-0 bg-white rounded-lg shadow-lg p-4 -translate-y-10 w-32 h-32 flex items-center justify-center mr-6">
          <img
            src={company.logoUrl || `https://ui-avatars.com/api/?name=${company.name}&background=random`}
            alt={`${company.name} Logo`}
            className="max-h-20 object-contain"
          />
        </div>

        {/* Info section */}
        <div className="flex flex-col justify-center flex-grow">
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl font-bold text-black">{company.name}</h2>
            {company.isActive && (
              <div className="bg-green-600 rounded-full p-1 w-6 h-6 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-1">{company.desc}</p>
        </div>

        {/* Buttons */}
        <div className="ml-auto flex items-center space-x-4 mt-4 md:mt-0">
          <button className="border border-gray-300 text-gray-500 text-sm rounded-md px-4 py-2 hover:bg-gray-100 focus:outline-none">
            Shop actions <span className="ml-1">▾</span>
          </button>
          <button className="border border-gray-300 text-gray-500 text-sm rounded-md px-4 py-2 flex items-center hover:bg-gray-100 focus:outline-none">
            View live&nbsp;
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
            </svg>
          </button>
        </div>
      </div>

      <hr className="border-t border-gray-300" />

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row p-6 gap-4 md:gap-8">
        {/* Contacts */}
        <div className="flex-1">
          <h3 className="font-semibold text-black mb-2">Contacts</h3>
          <div className="space-y-1 text-gray-500 text-sm">
            <p>
              Manager:{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                {company.emails}
              </span>
            </p>
            <p className="cursor-pointer hover:underline">{company.emails}</p>
            <p>{company.isBranch}</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex-1">
          <h3 className="font-semibold text-black mb-2">Address</h3>
          <div className="text-gray-500 text-sm space-y-1">
            <p>
              <span className="font-semibold mr-2">Country:</span>{" "}
              {company.address.country}
            </p>
            <p>
              <span className="font-semibold mr-2">Address:</span>{" "}
              {company.address.street}, {company.address.city}, {company.address.region}
            </p>
            <p>
              <span className="font-semibold mr-2">Postal code:</span>{" "}
              {company.address.zipCode}
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="w-full md:w-64 rounded-md overflow-hidden shadow-lg relative">
          {/* <img
          //   src={`https://maps.googleapis.com/maps/api/staticmap?center=${company.address.street},${company.address.country}&zoom=14&size=256x150&markers=color:red|${company.location?.lat},${company.location?.lng}&key=YOUR_API_KEY`}
          //   alt="Map location"
          //   className="w-full h-full object-cover"
          // /> */}
          <div className="absolute inset-0 bg-red-500 bg-opacity-30 rounded-md pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
