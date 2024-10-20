import React from 'react';

function Navback() {
  return (
    <>


<nav class="bg-none border-gray-800">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/public/Leptrum.png" class="h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Leptrum</span>
        </a>
        <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="/" class="text-sm  text-blue-600 dark:text-[#07ff6a] hover:underline">Voltar</a>
        </div>
    </div>
</nav>

    </>
  );
}

export default Navback;