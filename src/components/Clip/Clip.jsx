import React, { useState } from 'react';

const Clip = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const urlField = document.getElementById('website-url');
    navigator.clipboard.writeText(urlField.value).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="w-full max-w-full p-4">
      <div className="mb-2 flex justify-between items-center">
        <label htmlFor="website-url" className="text-sm font-medium text-gray-900 dark:text-white">
          Compartilhe o projeto:
        </label>
      </div>
      <div className="flex items-center">
        <span className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-[#14043b] border border-[#07ff6a] rounded-s-lg dark:bg-[#14043b]-50% dark:text-white dark:border-[#07ff6a]">
          URL
        </span>
        <div className="relative w-full">
          <input
            id="website-url"
            type="text"
            className="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#14043b] dark:border-[#07ff6a] dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-[#07ff6a]"
            value="https://leptrum.com"
            readOnly
            disabled
          />
        </div>
        <button
          className="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-[#14043b] bg-[#07ff6a] rounded-e-lg hover:bg-[#07ff6a]  dark:bg-[#07ff6a] border border-[#07ff6a] dark:border-[#07ff6a]"
          type="button"
          onClick={handleCopy}
        >
          {!isCopied ? (
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
            </svg>
          )}
        </button>
        <div
          id="tooltip-website-url"
          role="tooltip"
          className={`absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm ${isCopied ? 'opacity-100' : 'invisible opacity-0'}`}
        >
          {isCopied ? 'Copiado!' : 'Copy link'}
        </div>
      </div>
      <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Ajude a divulgar este projeto, mande o link para seus amigos!
      </p>
    </div>
  );
};

export default Clip;
