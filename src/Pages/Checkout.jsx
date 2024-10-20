import React from 'react';
import Footer from '../components/Footer/Footer'

const Checkout = () => {
  
  return (
    
    <>
    <div className="min-w-screen min-h-screen bg-transparent py-5">
      <div className="px-5">
        <div className="mb-2">
          <a href="/" className="focus:outline-none hover:underline text-[#07ff6a] text-sm">
            <i className="mdi mdi-arrow-left text-[#07ff6a]"></i>Voltar</a>
        </div>
        <div className="mb-2">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Checkout.</h1>
        </div>
        <div className="mb-5 text-gray-400">
          <a href="#" className="focus:outline-none hover:underline text-white">Home</a> / 
          <a href="#" className="focus:outline-none hover:underline text-white">Projeto</a> / 
          <span className="text-white">Checkout</span>
        </div>
      </div>
      <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
        <div className="w-full">
          <div className="-mx-3 md:flex items-start">
            <div className="px-3 md:w-7/12 lg:pr-10">
              <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                <div className="w-full flex items-center">
                  <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                    <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="Nome do projeto"/>
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-semibold uppercase text-gray-600">nome do projeto.</h6>
                    <p className="text-gray-400">x 1</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600 text-xl">R$:200</span><span className="font-semibold text-gray-600 text-sm">.00</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
            <div className="w-full flex mb-3 items-center">
              <div className="flex-grow">
                <span className="text-gray-600">Valor</span>
              </div>
              <div className="pl-3">
                <span className="font-semibold">R$:190.91</span>
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="flex-grow">
                <span className="text-gray-600">Taxas (TXP)</span>
              </div>
              <div className="pl-3">
                <span className="font-semibold">R$:9.09</span>
              </div>
            </div>
          </div>
          <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
            <div className="w-full flex items-center">
              <div className="flex-grow">
                <span className="text-gray-600">Total</span>
              </div>
              <div className="pl-3">
                <span className="font-semibold text-gray-400 text-sm">BRL</span> 
                <span className="font-semibold">R$:200.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 w-full ">
          <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
            <div className="w-full flex mb-3 items-center">
              <div className="w-32">
                <span className="text-gray-600 font-semibold">Contato</span>
              </div>
              <div className="flex-grow pl-3">
                <span>Leptrum corporation</span>
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-32">
                <span className="text-gray-600 font-semibold">Endereço da empresa</span>
              </div>
              <div className="flex-grow pl-3">
                <span>123 Rua tabajara, Minas Gerais, 35439000 Brazil</span>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
            <div className="w-full p-3 border-b border-gray-200">
              <div className="mb-5">
                <label htmlFor="type1" className="flex items-center cursor-pointer">
                  <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" defaultChecked/>
                  <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-6 ml-3" alt="Card Payment"/>
                </label>
              </div>
              <div>
                <div className="mb-3">
                  <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Nome do cartão</label>
                  <div>
                    <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text"/>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Numero do cartão</label>
                  <div>
                    <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text"/>
                  </div>
                </div>
<div className="mb-3 -mx-2 justify-between flex w-full items-end">
  <div className="px-2 w-1/4">
    <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Mes</label>
    <div>
      <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
        <option value="01">01 - Janeiro</option>
        <option value="02">02 - Fevereiro</option>
        <option value="03">03 - Março</option>
        <option value="04">04 - Abril</option>
        <option value="05">05 - Maio</option>
        <option value="06">06 - Junho</option>
        <option value="07">07 - Julho</option>
        <option value="08">08 - Agosto</option>
        <option value="09">09 - Setembro</option>
        <option value="10">10 - Outubro</option>
        <option value="11">11 - Novembro</option>
        <option value="12">12 - Dezembro</option>
      </select>
    </div>
  </div>
  <div className="px-2 w-1/4">
    <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Ano</label>
    <div>
      <select className="form-select w-full px-1.7 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
        <option value="2028">2028</option>
        <option value="2029">2029</option>
        <option value="2030">2030</option>
      </select>
    </div>
  </div>
  <div className="px-2 w-1/4">
    <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">CVV</label>
    <div>
      <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text" />
    </div>
  </div>
</div>
                </div>
              </div>
            </div>
            <div className="w-full p-3">
              <label htmlFor="type2" className="flex items-center cursor-pointer">
                <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" width="80" className="ml-3" alt="PayPal Payment"/>
              </label>
            </div>
          </div>
          <div>
            <button className="block w-full max-w-xs mx-auto mt-4 bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold">
              <i className="mdi mdi-lock-outline mr-1"></i> Enviar
           </button>
          </div>
         </div>
        </div>
       <div>
      <Footer />
     </div>
    </>
  );
};

export default Checkout;