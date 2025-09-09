import React from "react";

interface CardListProps {
  children: React.ReactNode;
  className?: string;
}

const CardList: React.FC<CardListProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default CardList;
