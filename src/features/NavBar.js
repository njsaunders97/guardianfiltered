import React from 'react';
import { FaFilter } from 'react-icons/fa';

function NavBar() {
    return (
        <div className="fixed w-full top-0 left-0 right-0 z-10 
                        
                        "> {/* NavBar Container */}
            <header className="pointer-events-auto border-solid border-0 border-b 
                                px-4
                                border-white bg-white">
                <nav className="flex items-center
                                h-[75px]
                                ">
                    <div className="flex items-center
                                    
                                    ">
                        <h1 className="heading-2 hidden lg:flex">
                            <span className="text-blue-950">Guardian</span>
                            <span className="text-blue-400">Filtered</span>
                        </h1>
                        <h1 className="heading-2-tablet lg:hidden">
                            <span className="text-blue-950">G</span>
                            <span className="text-blue-400">F</span>
                        </h1>
                    </div>
                    <div className="flex items-center justify-stretch flex-1
                                    h-[40px] lg:-ml-7 md:ml-[20px]
                                    ">
                        <div className="flex w-full
                                        ">
                            <div className="flex w-full justify-center md:mx-auto">
                                <form className="flex">
                                    <input
                                    className="searchbar text-center lg:w-96 md:w-60 py-2"
                                    name="query"
                                    autocomplete="off"
                                    placeholder="Scour the archives..."
                                    >
                                    </input>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center
                                    md:pl-6 pl-3">
                        <div className="flex items-center 
                                        h-[40px]
                                        ">
                            <h3 className="heading-3 hidden lg:flex lg:mr-2">Filter by category</h3>
                            <span className="md:mr-2 text-blue-950 hover:opacity-100 opacity-90 transition-all cursor-pointer ease-linear"><FilterIcon icon={<FaFilter size="11" />} /></span>
                        </div>
                    </div>
                </nav>
            </header>  
        </div>
    )
};

function FilterIcon({ icon }) {
    return (
        <div>
            {icon}
        </div>
    )
};

export default NavBar;