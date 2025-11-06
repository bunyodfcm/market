import { create } from 'zustand';
import type { Company } from './types';

interface CompanyState {
  // State
  companies: Company[];
  selectedCompanyId: number | null;
  currentCompany: Company | null;

  // Actions
  setCompanies: (companies: Company[]) => void;
  setSelectedCompanyId: (id: number | null) => void;
  setCurrentCompany: (company: Company | null) => void;
  addCompany: (company: Company) => void;
  updateCompany: (id: number, company: Partial<Company>) => void;
  removeCompany: (id: number) => void;
}

export const useCompanyStore = create<CompanyState>(set => ({
  // Initial state
  companies: [],
  selectedCompanyId: null,
  currentCompany: null,

  // Actions
  setCompanies: companies => {
    set({ companies });
  },

  setSelectedCompanyId: id => {
    set({ selectedCompanyId: id });
  },

  setCurrentCompany: company => {
    set({ currentCompany: company });
  },

  addCompany: company => {
    set(state => ({
      companies: [...state.companies, company],
    }));
  },

  updateCompany: (id, companyData) => {
    set(state => ({
      companies: state.companies.map(company =>
        company.id === id ? { ...company, ...companyData } : company
      ),
      currentCompany:
        state.currentCompany?.id === id
          ? { ...state.currentCompany, ...companyData }
          : state.currentCompany,
    }));
  },

  removeCompany: id => {
    set(state => ({
      companies: state.companies.filter(company => company.id !== id),
      currentCompany:
        state.currentCompany?.id === id ? null : state.currentCompany,
      selectedCompanyId:
        state.selectedCompanyId === id ? null : state.selectedCompanyId,
    }));
  },
}));
