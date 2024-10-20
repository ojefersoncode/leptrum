import React, { useState } from 'react';

const SearchBar = () => {




  return (
        <div className="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
            <svg
              className="w-4 h-4 text-[#07ff6a]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 ps-8 text-sm text-[#07ff6a] border
             border-[#07ff6a] rounded-lg bg-[#14043b] dark:bg-[#14043b]
              dark:placeholder-[#07ff6a] dark:text-[#07ff6a]"
            placeholder="Buscar..."
          />
        </div>
  );
};

export default SearchBar;