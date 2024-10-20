import React, { useState, useEffect, useRef } from "react";

const NavbarLogado = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="dark:bg-[#14043b]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/public/Leptrum.png" className="h-8" alt="Leptrum logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Leptrum</span>
        </a>

        <div className="items-center flex">
          <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-1 focus:ring-gray-300 dark:focus:ring-[#07ff6a]"
              id="user-menu-button"
              aria-expanded={isDropdownOpen}
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src="/public/Perfil.jpg" alt="user photo" />
            </button>
          </div>

          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 z-50 mr-4 mt-72 w-56 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-green-500 dark:divide-green-900"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block font-bold text-sm text-gray-900 dark:text-[#14043b]">Seu nome</span>
                <span className="block font-bold text-sm text-gray-500 opacity-50 truncate dark:text-[#14043b]">seu-nome@email.com</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a href="#" className="block font-bold px-4 py-2 m-1 rounded-xl text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-[#14043b] dark:text-[#14043b] dark:hover:text-[#07ff6a]">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#" className="block font-bold px-4 py-2 m-1 rounded-xl text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-[#14043b] dark:text-[#14043b] dark:hover:text-[#07ff6a]">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#" className="block font-bold px-4 py-2 m-1 rounded-xl text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-[#14043b] dark:text-[#14043b] dark:hover:text-[#07ff6a]">
                    Configurações
                  </a>
                </li>
                <li>
                  <a href="#" className="block font-bold px-4 py-2 m-1 rounded-xl text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-[#14043b] dark:text-[#14043b] dark:hover:text-[#07ff6a]">
                    Sair
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

    <div className="border-b border-b-green-400 opacity-50 mb-4"></div>
    </nav>
  );
};

export default NavbarLogado;