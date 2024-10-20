import React from 'react';
import { ChevronLeft, ChevronDown, Plus, Image, Link, Info, Share } from 'lucide-react';
import Footer from '../components/Footer/Footer';
import NavbarLogado from '../components/NavbarLogado';

const Criar = () => {
  return (
    <>
      <NavbarLogado />
      
    <div className="text-[#07ff6a] min-h-full">
      <div className="p-4">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold">Crie seu projeto</h1>
          <button className="bg-[#07ff6a] px-3 py-1 font-bold text-[#14043b] rounded text-sm">Cancelar</button>
        </header>

        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-gray-700 rounded-full mr-3 overflow-hidden">
            <img src="/public/Perfil.jpg" alt="Perfil" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-semibold text-white">Seu Nome</h2>
            <div className="flex space-x-2">
              <button className="bg-[#07ff6a] px-3 py-1 rounded-full font-bold text-[#14043b] text-sm flex items-center">
                Público 
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <button className="bg-[#07ff6a] px-3 py-1 rounded-full font-bold text-[#14043b] text-sm flex items-center">
                 Categorias 
               <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>

       <div className="mt-7">
        <textarea
          className="w-full border border-[#07ff6a] bg-transparent text-lg p-2 rounded resize-none outline-none text-white"
          placeholder="Dê um título para seu projeto..."
          rows={1}
        />
      </div>
        
        
        <div className="mt-4">
        <textarea
          className="w-full border border-[#07ff6a] bg-transparent text-lg p-2 rounded resize-none outline-none text-white"
          placeholder="Descreva o seu projeto..."
          rows={4}
        />
      </div>

        <div className="mt-4 border-t border-gray-700 pt-4">
          <button className="flex items-center text-gray-400">
            <Image className="w-6 h-6 mr-2" />
            Foto/vídeo
          </button>
        </div>
       
        <div className="mt-4 border-t border-gray-700 pt-4">
          <button className="flex items-center text-gray-400">
            <Link className="w-6 h-6 mr-2" />
            Links
          </button>
        </div>
      
      
           <div className="mt-4 border-t border-gray-700 pt-4">
          <button className="flex items-center text-gray-400">
            <Info className="w-6 h-6 mr-2" />
            Duvidas
          </button>
        </div>
      </div>
    </div>
    
<div className="flex mt-3 mb-7 items-center justify-center">
  <button className="bg-[#07ff6a] w-full m-4 px-4 py-2 text-[#14043b] flex items-center font-bold justify-center rounded text-xl">
    Publicar Projeto   
    <Share className="w-6 h-6 ml-2" />
  </button>
</div>
    
    <Footer />
    
  </>
  );
};

export default Criar;