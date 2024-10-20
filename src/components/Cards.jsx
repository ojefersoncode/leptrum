import React, { useEffect, useState } from 'react';

const Card = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=9')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (!products.length) {
       return <div class="flex items-center justify-center w-full min-h-screen">
     <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-[#07ff6a] border-solid"></div>
              </div>;
  }

  return (
    <div className="max-w-screen-xl flex-wrap items-center justify-between mx-auto p-4 grid grid-cols-1 md:grid-cols-3 
    sm:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
      {products.map((product) => (
        <div key={product.id} className="w-full  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#14043b] dark:border-[#07ff6a] flex flex-col">
          <a href="#">
            <img className="p-5 mt-3 mb-2 rounded-t-lg w-full h-72 object-cover" src={product.image} alt={product.title} />
          </a>

          <div className="px-4 pb-4 flex-1">
            {/* Badge */}
            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
              {product.category}
            </span>
          </div>

          <div className="px-5 pb-5 flex-1">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-1">
                {product.title}
              </h5>
            </a>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 line-clamp-3">
              {product.description}
            </p>

            {/* Progress Bar */}
            <div className="w-full mt-4 mb-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-[#07ff6a] h-2.5 rounded-full" style={{ width: '45%' }}></div>
            </div>

            <div className="pb-1 text-sm">
              <span>Total arrecadado</span>
            </div>

            <div className="flex items-center justify-between mt-auto mb-4">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                R$: {product.price.toFixed(2)}
              </span>

            </div>
<div className="w-full flex">
  <a
    href="/detalhes"
    className="text-[#14043b] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-12 py-1.5 text-center w-full dark:bg-[#07ff6a] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Ver projeto
  </a>
</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;