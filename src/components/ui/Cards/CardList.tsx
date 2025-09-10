import React from "react";
import {Icon} from "@iconify/react"

interface CardListProps {
  children: React.ReactNode;
  className?: string;
  arrows?: boolean;
  arrowFunc?:()=>void;
}

const CardList: React.FC<CardListProps> = ({ children, className = "", arrows, arrowFunc }) => {
  return (
    <div className={className}>
    <div
      className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center`}
    >
      {children}
      
    </div>
    <div>
        {arrows && (
          <div className="w-full flex  items-center justify-center mt-8 py-4 border-t-2">
          <button className='bg-white border rounded-md px-4 py-2'>
            <Icon icon="iconamoon:arrow-left-2-light" width="24" height="24" />
          </button>
          <span className='bg-white border rounded-md px-4 py-2'>
            1
          </span>
          <button className='bg-white border rounded-md px-4 py-2'>
            <Icon icon="iconamoon:arrow-right-2-light" width="24" height="24" />
          </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardList;
