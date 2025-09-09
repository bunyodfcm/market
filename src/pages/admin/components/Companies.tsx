import React from "react";

const Companies: React.FC = () => {
  return (
    <div>
      <h2>Companies List</h2>
      <ul>
        {[
          "Acme Corp",
          "Globex Inc",
          "Umbrella LLC",
          "Stark Industries",
          "Wayne Enterprises",
        ].map((company, idx) => (
          <li key={idx}>{company}</li>
        ))}
      </ul>
    </div>
  );
};

export default Companies;
