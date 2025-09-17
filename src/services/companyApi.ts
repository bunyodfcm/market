import { createItem, getItems } from "./api"

export const createCompany = async (data:any
): Promise<{ token: any }> => {
  return await createItem("company", data);
};

export const getCompanyList = async (): Promise<{ data: any }> => {
  return await getItems("companies");
};

