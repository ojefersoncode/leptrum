import React from 'react';
import Accordion from '../Accordion/Accordion';
import Infoplay from '../Infoplay/Infoplay';
import Timer from '../Timer/Index'

const Cardinfo = () => {
  return (

    <>
      <div className="max-w-full p-4 m-4">
        <a className='flex justify-center items-center' href="#">
          <img className="rounded-lg border border-green-700 w-2/4 
          max-sm:w-full max-md:w-5/6
          max-lg:w-5/6 max-xl:w-5/6 max-2xl:w-4/6"
            src="https://encrypted-tbn0.gstatic.com/
            images?q=tbn:ANd9GcQaZ7675LKHyRW3fGe8sPrTn1gZGH54Uh3VSqVi0fMMzR2eEvQ2fPTdFh8&s=10"
            alt="" />
        </a>
        <div className="pb-4 mt-4">
          <a className='flex justify-center items-center' href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Aqui é o espaço onde o nome do seu projeto ficarar
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400
          flex justify-center items-center">
            Esté sera o espaço onde voce poderar falar mais sobre seu projeto, ou explicar detalhadamente seus objetivos.
          </p>

          <Timer />

          <div className="pb-2">
            {/*Player de video*/}
            <Infoplay videoUrl="https://youtu.be/xUiuC3geKrU" />

          </div>
        </div>
        {/* Accordion */}
        <Accordion />
      </div>
    </>

  );
};

export default Cardinfo;