import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { colors, TextField } from '@mui/material';

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col shadow-md dark:bg-[#25105a] ">
        <div className="flex-grow justify-center justify-items-center">
          <div className="w-full max-w-screen sm:w-2/4 rounded-lg p-8">
            <div className="flex justify-center mb-6">
              <div className='text-[#07ff6a]'>
                <svg xmlns="(link unavailable)" width="74" height="74" viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                class="lucide lucide-square-user-round">
                  <path d="M18 21a6 6 0 0 0-12 0" />
                  <circle cx="12" cy="11" r="4" />
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Entrar</h2>
            <form>
              <div className="mb-4">
                <TextField 
                  id="email" 
                  label="Seu email" 
                  type="email" 
                  variant="outlined" 
                  required 
                  fullWidth 
                  sx={{ 
                    marginBottom: 2, 
                    '& .MuiOutlinedInput-root .MuiOutlinedInput-input': { 
                      color: '#07ff6a' 
                    }, 
                    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { 
                      borderColor: '#07ff6a' 
                    }, 
                    '& .MuiOutlinedInput-root .MuiInputLabel-root': { 
                      color: '#07ff6a' 
                    }, 
                    '& .MuiInputLabel-shrink': { 
                      color: '#07ff6a' 
                    },
                    '& Label': {
                      color: 'gray'
                    }

                  }} 
                />
              </div>
              <div className="mb-4">
              <TextField 
                  id="password" 
                  label="Sua senha" 
                  type="password" 
                  variant="outlined" 
                  required 
                  fullWidth 
                  sx={{ 
                    marginBottom: 2, 
                    '& .MuiOutlinedInput-root .MuiOutlinedInput-input': { 
                      color: '#07ff6a' 
                    }, 
                    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { 
                      borderColor: '#07ff6a' 
                    }, 
                    '& .MuiOutlinedInput-root .MuiInputLabel-root': { 
                      color: '#07ff6a' 
                    }, 
                    '& .MuiInputLabel-shrink': { 
                      color: '#07ff6a' 
                    },
                    '& Label': {
                      color: 'gray'
                    }
                  }} 
                />

              </div>
              <div className="flex items-center justify-between mb-4">
                <button 
                  type="submit" 
                  className="w-full px-4 py-2 bg-green-500 text-blue-950 font-bold rounded-md 
                  shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-000
                   dark:bg-[#07ff6a] dark:hover:bg-[#1c8b49] dark:focus:ring-green-500"
                >
                  Entrar
                </button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-100">
                Ainda não tem uma conta? 
                <a href="/singin" className="text-[#341583] m-2 dark:text-green-500 hover:underline">
                  Criar
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>

      <div>
      <Footer />
      </div>
    </>
  );
};

export default Login;