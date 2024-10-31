import React, { useState } from 'react';

const Accordion = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleAccordion = (tab) => {
    if (activeTab === tab) {
      setActiveTab(null); // Fecha se já estiver aberto
    } else {
      setActiveTab(tab); // Abre a aba selecionada
    }
  };

  return (
    <div id="accordion-collapse">
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-gray-500
          border border-b-0 border-green-400 rounded-t-xl  dark:border-green-700 dark:text-gray-400 gap-3"
          onClick={() => toggleAccordion(1)}
          aria-expanded={activeTab === 1}
          aria-controls="accordion-collapse-body-1"
        >
          <span>O que é crowndfoundig?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 text-green-400 ${activeTab === 1 ? 'rotate-180' : ''} shrink-0`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={`${activeTab === 1 ? 'block' : 'hidden'} p-5 border border-b-0 border-green-400
         dark:border-green-700`}
      >
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is an open-source library of interactive components built on top of
          Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Check out this guide to learn how to{' '}
          <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">
            get started
          </a>{' '}
          and start developing websites even faster with components on top of Tailwind CSS.
        </p>
      </div>

      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-gray-500
           border border-b-0 border-green-400  dark:border-green-700 dark:text-gray-400  gap-3"
          onClick={() => toggleAccordion(2)}
          aria-expanded={activeTab === 2}
          aria-controls="accordion-collapse-body-2"
        >
          <span>É seguro investir?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 text-green-400 ${activeTab === 2 ? 'rotate-180' : ''} shrink-0`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-2"
        className={`${activeTab === 2 ? 'block' : 'hidden'} p-5 border border-b-0 border-green-400
         dark:border-green-700`}
      >
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is first conceptualized and designed using the Figma software so everything
          you see in the library has a design equivalent in our Figma file.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Check out the{' '}
          <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">
            Figma design system
          </a>{' '}
          based on the utility classes from Tailwind CSS and components from Flowbite.
        </p>
      </div>

      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-gray-500 
          border border-green-400 rounded-b-xl dark:border-green-700 dark:text-gray-400   gap-3"
          onClick={() => toggleAccordion(3)}
          aria-expanded={activeTab === 3}
          aria-controls="accordion-collapse-body-3"
        >
          <span>Como posso colaborar?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 text-green-400 ${activeTab === 3 ? 'rotate-180' : ''} shrink-0`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-3"
        className={`${activeTab === 3 ? 'block' : 'hidden'} p-5 border   border-green-400 dark:border-green-700`}
      >
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          The main difference is that the core components from Flowbite are open source
          under the MIT license, whereas Tailwind UI is a paid product.
        </p>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Another difference is that Flowbite relies on smaller and standalone components,
          whereas Tailwind UI offers sections of pages.
        </p>
        <p className="text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
        <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
          <li>
            <a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">
              Flowbite Pro
            </a>
          </li>
          <li>
            <a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600
             dark:text-blue-500 hover:underline">
              Tailwind UI
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Accordion;