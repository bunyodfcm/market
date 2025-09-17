import React, { useEffect } from "react";
import CompanyCard from "../../../../components/ui/Cards/CompanyCard";
// import { companies } from "./data";
import ShowList from "../../../../components/ui/Cards/ShowList";
import DelayedMount from "../../../../components/ui/DelayedMount";
import ButtonWithIcon from "../../../../components/ui/Buttons/ButtonWithIcon";
// import CompanyCard from "../../../../components/ui/Cards/CompaniesCard";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Modal from "../../../../components/ui/Modal";
import CompanyForm from "./CompanyForm";
import { getCompanyList } from "../../../../services/companyApi";
import type { Company } from "./types";

const Companies: React.FC = () => {
  type CompanyData = Company[]
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [companyList, setCompanyList] = useState<CompanyData>([]);
    const [loading, setLoading] = useState(true);
  const fetchCompanies = async () => {
    try {
      setLoading(true);
      const {data}= await getCompanyList();
      console.log("📋 Barcha kompaniyalar:", data);
      
      setCompanyList(data || []); // agar null bo‘lsa ham bosh massiv bo‘lib ketsin
    } catch (error) {
      console.error("❌ Kompaniya ro‘yxatini olishda xatolik:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold mb-4">Kompaniya</h1>
        <ButtonWithIcon
          icon={
            <Icon
              icon="material-symbols:add-home-work-outline-rounded"
              width="24"
              height="24"
            />
          }
          className="bg-blue-500 text-white font-semibold hover:bg-blue-600"
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          Qo'shish
        </ButtonWithIcon>
      </div>
      {
        isModalOpen && (
          <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="🏢 Yangi Filial Qo‘shish"
        size="md"
      >
            <CompanyForm />
          </Modal>
        )
      }
      <ShowList className="bg-white p-6 rounded-lg shadow space-y-6 ">
        {companyList.map((company, index) => (
          <DelayedMount
            key={index}
            delay={300 * (index + 1)}
            onFinish={() => index + 1}
          >
            <CompanyCard
              key={index}
              company={company}
              // onViewProfile={() => {
              //   // Kompaniya profiliga o'tish logikasi
              //   console.log(`Viewing profile for company ID: ${company.id}`);
              // }}
            />
          </DelayedMount>
        ))}
      </ShowList>
    </div>
  );
};

export default Companies;
