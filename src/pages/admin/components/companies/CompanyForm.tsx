import React, { useState } from "react";
import { createCompany } from "../../../../services/companyApi";
import type { Company } from "./types";

type CompanyFormData = Company

const CompanyForm: React.FC = () => {
  const [formData, setFormData] = useState<CompanyFormData>({
    name: "",
    desc: "",
    address: { street: "", city: "", region: "" },
    mainPhone: "",
    phones: [""],
    bannerUrl: "",
    logoUrl: "",
    emails: [""],
    websiteUrl: "",
    type: "",
    isActive: true,
    isBranch: true,
    companyId: 0,
    categoryIds: [],
  });

  // input change handler
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // address change handler
  const handleAddressChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      address: { ...prev.address, [field]: value },
    }));
  };

  // dynamic array fields (phones, emails, categoryIds)
  const handleArrayChange = (
    field: "phones" | "emails" | "categoryIds",
    index: number,
    value: string
  ) => {
    setFormData((prev) => {
      const updated = [...(prev[field] as any[])];
      updated[index] = field === "categoryIds" ? Number(value) : value;
      return { ...prev, [field]: updated };
    });
  };

  const addField = (field: "phones" | "emails" | "categoryIds") => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...(prev[field] as any[]), field === "categoryIds" ? 0 : ""],
    }));
  };

  // submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("📤 Yuboriladigan ma'lumot:", formData);
    // API chaqirig‘i yoki boshqa yuborish logikasi shu yerda
    try{
    const response = createCompany(formData)
    console.log("Company created successfully:", response);
    }catch(error){
        console.error("Error creating company:", error);
    }

  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto">
      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="Company Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />

      {/* Description */}
      <textarea
        name="desc"
        placeholder="Description"
        value={formData.desc}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      {/* Address */}
      <div className="grid grid-cols-3 gap-2">
        <input
          type="text"
          placeholder="Street"
          value={formData.address.street}
          onChange={(e) => handleAddressChange("street", e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="City"
          value={formData.address.city}
          onChange={(e) => handleAddressChange("city", e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Region"
          value={formData.address.region}
          onChange={(e) => handleAddressChange("region", e.target.value)}
          className="p-2 border rounded"
        />
      </div>

      {/* Main phone */}
      <input
        type="text"
        name="mainPhone"
        placeholder="Main Phone"
        value={formData.mainPhone}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      {/* Phones */}
      <div>
        <label className="font-medium">Phones</label>
        {formData.phones.map((phone, i) => (
          <input
            key={i}
            type="text"
            placeholder={`Phone ${i + 1}`}
            value={phone}
            onChange={(e) => handleArrayChange("phones", i, e.target.value)}
            className="w-full p-2 border rounded my-1"
          />
        ))}
        <button
          type="button"
          onClick={() => addField("phones")}
          className="text-blue-500 text-sm"
        >
          + Add phone
        </button>
      </div>

      {/* Emails */}
      <div>
        <label className="font-medium">Emails</label>
        {formData.emails.map((email, i) => (
          <input
            key={i}
            type="email"
            placeholder={`Email ${i + 1}`}
            value={email}
            onChange={(e) => handleArrayChange("emails", i, e.target.value)}
            className="w-full p-2 border rounded my-1"
          />
        ))}
        <button
          type="button"
          onClick={() => addField("emails")}
          className="text-blue-500 text-sm"
        >
          + Add email
        </button>
      </div>

      {/* Logo & Banner */}
      <input
        type="text"
        name="logoUrl"
        placeholder="Logo URL"
        value={formData.logoUrl}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="bannerUrl"
        placeholder="Banner URL"
        value={formData.bannerUrl}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      {/* Website */}
      <input
        type="text"
        name="websiteUrl"
        placeholder="Website URL"
        value={formData.websiteUrl}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      {/* Type */}
      <input
        type="text"
        name="type"
        placeholder="Company Type"
        value={formData.type}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      {/* Status */}
      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.isActive}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, isActive: e.target.checked }))
            }
          />
          Active
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.isBranch}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, isBranch: e.target.checked }))
            }
          />
          Branch
        </label>
      </div>

      {/* CompanyId */}
      <input
        type="number"
        name="companyId"
        placeholder="Parent Company ID"
        value={formData.companyId}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      {/* Categories */}
      <div>
        <label className="font-medium">Category IDs</label>
        {formData.categoryIds.map((cat, i) => (
          <input
            key={i}
            type="number"
            placeholder={`Category ${i + 1}`}
            value={cat}
            onChange={(e) =>
              handleArrayChange("categoryIds", i, e.target.value)
            }
            className="w-full p-2 border rounded my-1"
          />
        ))}
        <button
          type="button"
          onClick={() => addField("categoryIds")}
          className="text-blue-500 text-sm"
        >
          + Add category
        </button>
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Yuborish
      </button>
    </form>
  );
};

export default CompanyForm;
