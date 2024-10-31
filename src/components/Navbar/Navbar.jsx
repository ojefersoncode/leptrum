import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <nav className="border-gray-200 bg-[#14043b]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/public/Leptrum.png" className="h-8" alt="ADSTRONG Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ADstrong</span>
        </a>
        <div className="flex md:order-2">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm
             text-[#07ff6a] rounded-lg md:hidden dark:text-[#07ff6a] dark:hover:bg-[gray-700]
              dark:focus:ring-gray-600"
            aria-controls="navbar-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1
             ${isMenuOpen ? 'block' : 'hidden'}`}
          id="navbar-menu"
        >
          <ul className="flex justify-between flex-col p-2 md:p-0 mt-4 font-medium border 
           rounded-lg bg-[#14043b] md:space-x-8 rtl:space-x-reverse 
          md:flex-row md:mt-0 md:border-0 md:bg-[#14043b] dark:bg-[#07ff6a]
           md:dark:bg-[#14043b] border-[#07ff6a]">
            <li>
              <a
                href="/"
                className="block m-1 py-2 px-3 text-[#07ff6a] bg-[#14043b] rounded-lg 
                md:bg-transparent md:text-[#07ff6a] md:p-0 md:dark:text-[#07ff6a]"
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="block m-1 py-2 px-3 text-[#14043b] rounded-lg hover:bg-[#14043b] 
                md:hover:bg-[#14043b] md:hover:text-[#14043b] md:p-0 md:dark:hover:text-[#07ff6a]
                 dark:text-white dark:hover:bg-[#14043b] dark:hover:text-[#07ff6a] md:dark:hover:bg-[#14043b]"
              >
                Entrar
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block m-1 py-2 px-3 text-[#14043b] rounded-lg hover:bg-[#14043b] md:hover:bg-[#14043b] md:hover:text-[#07ff6a] md:p-0 md:dark:hover:text-[#07ff6a] dark:text-white dark:hover:bg-[#14043b] dark:hover:text-[#07ff6a] md:dark:hover:bg-[#14043b]"
              >
                Ajuda e suporte
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;