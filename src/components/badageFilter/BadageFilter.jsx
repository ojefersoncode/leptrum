import React from "react";

const BadageFilter = () => {
  return (
    <div className="px-2 relative w-full md:ml-9 flex justify-center items-center">
      <div className="flex space-x-2 overflow-x-auto flex-nowrap p-2 w-full
      justify-start items-center scrollbar-hide">
        <span className="bg-gray-100 cursor-pointer text-[#07ff6a] text-xs font-medium px-2.5 py-0.5
         rounded dark:bg-gray-700 dark:text-[#07ff6a] border border-[#07ff6a]">
          Tecnologia
        </span>
        <span className="bg-gray-100 cursor-pointer text-[#07ff6a] text-xs font-medium px-2.5 py-0.5
         rounded dark:bg-gray-700 dark:text-[#07ff6a] border border-[#07ff6a]">
          Moda
        </span>
        <span className="bg-gray-100 cursor-pointer text-[#07ff6a] text-xs font-medium px-2.5 py-0.5
         rounded dark:bg-gray-700 dark:text-[#07ff6a] border border-[#07ff6a]">
          Cassino
        </span>
        <span className="bg-gray-100 cursor-pointer text-[#07ff6a] text-xs font-medium px-2.5 py-0.5
         rounded dark:bg-gray-700 dark:text-[#07ff6a] border border-[#07ff6a]">
          Finanças
        </span>
        <span className="bg-gray-100 cursor-pointer text-[#07ff6a] text-xs font-medium px-2.5 py-0.5
         rounded dark:bg-gray-700 dark:text-[#07ff6a] border border-[#07ff6a]">
          Infantil
        </span>
        <span className="bg-gray-100 cursor-pointer text-[#07ff6a] text-xs font-medium px-2.5 py-0.5
         rounded dark:bg-gray-700 dark:text-[#07ff6a] border border-[#07ff6a]">
          Cursos
        </span>
        <span className="bg-gray-100 cursor-pointer text-[#07ff6a] text-xs font-medium px-2.5 py-0.5
         rounded dark:bg-gray-700 dark:text-[#07ff6a] border border-[#07ff6a]">
          Saúde
        </span>
      </div>
    </div>
  );
};

export default BadageFilter;
