import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Singin = () => {
  return (
    <>

      <Navbar />
      <div className="flex flex-col bg-gray-100 dark:bg-gray-800">
        <div className="flex-grow justify-center justify-items-center">
          <div className="w-full max-w-screen-xl bg-white rounded-lg shadow-md dark:bg-gray-800 p-8">
            <div className="flex justify-center mb-6">

              <div className='text-[#07ff6a]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" class="lucide lucide-contact"><path d="M16 2v2" />
                  <path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
                  <path d="M8 2v2" /><circle cx="12" cy="11" r="3" /><rect x="3" y="4" width="18" height="18" rx="2" /></svg>
              </div>

            </div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Cadastre-se</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Endereço de email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="seu@examplo.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Senha</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor=" password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirmar senha</label>
                <input
                  type="confirm password"
                  id="password"
                  name="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
                >
                  Cadastrar
                </button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Ja tem uma conta? <a href="/login" className="text-blue-600 dark:text-blue-400 hover:underline">Entrar</a>
              </p>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Singin;