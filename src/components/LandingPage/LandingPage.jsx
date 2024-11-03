import React from "react";
import Footer from "../Footer/Footer";



function LandingPage() {

    return (
        <>
            <main className="m-2">

                <div className="bg-white relative pt-10  lg:pt-44 max-sm:pt-20 dark:bg-[#14043b]">
                    <div className="relative xl:container m-auto px-4 md:px-12 lg:px-6">
                        <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl
            text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl
            dark:text-white">
                            Transforme seu hobby em <br className="lg:block hidden" />
                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r
                from-blue-600 to-cyan-500 dark:from-[#07ff6a] dark:to-[#b3dbc3]">
                                Monetização
                            </span>.
                        </h1>
                        <div className="lg:flex">
                            <div className="relative mt-8 md:mt-16 space-y-6 sm:w-10/12 md:w-2/3 lg:ml-0
                sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                                <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                                    Somos a solução ideal para quem busca, monetizar seus conteudos,
                                     sem muitas borocraçias e restrições,
                                    queremos conectar influençers com empreas que visam gerar trafego
                                     100% organico para seus negoçios.
                                </p>
                                <span className="block pt-2 font-semibold text-gray-500 dark:text-gray-400">
                                    Como quer se cadastrar?.
                                </span>
                                <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex 
                md:justify-center max-sm:flex justify-center lg:justify-start">
                                    <a aria-label="add to slack" href="#" className="p-4 border
                        border-gray-200
                        dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300
                        hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20
                        dark:hover:border-cyan-300/30">
                                        <div className="flex justify-center space-x-4">
                                            <img className="w-6 h-6"
                                                src="https://tailus.io/sources/blocks/tech-startup/preview/images/slack.png"
                                                alt="slack logo" loading="lazy" width="128" height="128" />
                                            <span className="hidden font-medium md:block max-sm:block dark:text-white">
                                                Influençer</span>
                                        </div>
                                    </a>
                                    <a aria-label="add to chat" href="#" className="p-4 border border-gray-200
                        dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300
                        hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20
                        dark:hover:border-green-300/30">
                                        <div className="flex justify-center space-x-4">
                                            <img className="w-6 h-6"
                                                src="https://tailus.io/sources/blocks/tech-startup/preview/images/chat.png"
                                                alt="chat logo" loading="lazy" width="128" height="128" />
                                            <span className="hidden font-medium md:block  max-sm:block dark:text-white">
                                                Empresa
                                            </span>
                                        </div>
                                    </a>
                                </div>

                                <div className="dark:text-gray-300 pt-20 max-sm:pt-7">
                                    🔥🌟
                                    <a className="font-bold">Empresas parçeiras :</a>

                                </div>

                                <div className="pt-2 flex gap-6 lg:gap-12 justify-between  lg:w-2/3">
                                    <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/airbnb.svg"
                                        className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                                    <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/ge.svg"
                                        className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                                    <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/coty.svg"
                                        className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                                    <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/microsoft.svg"
                                        className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                                </div>
                            </div>
                            <div className="mt-12 w-full max-sm:hidden max-lg:hidden md:mt-0 lg:absolute -right-5 lg:w-5/12">
                                <div className="relative w-full">
                                    <div aria-hidden="true" className=" w-full h-full ">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="340" height="340"
                                        className="text-green-500 relative w-full "
                                        viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-chart-no-axes-combined"><path d="M12 16v5" /><path d="M16 14v7" />
                                        <path d="M20 10v11" />
                                        <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
                                        <path d="M4 18v3" /><path d="M8 14v7" />
                                    </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <div className="mt-32  max-sm:mt-0  ">
                <Footer />
            </div>

        </>
    )
}

export default LandingPage;