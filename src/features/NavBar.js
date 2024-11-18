import React from 'react';
import { FaFilter } from 'react-icons/fa';

function NavBar() {
    return (
        <div className=" fixed w-full top-0 left-0 right-0
                        bg-neutral-100"> {/* NavBar */}
            {/* DESKTOP */}
            <div className="flex flex-wrap justify-around m-auto items-center md:justify-around
                            py-4"> {/* NavBar Container */}
                <div className="heading-1 hidden flex-shrink lg:flex">
                    <span className="heading-1 text-blue-950">Guardian</span>
                    <span className="heading-1 text-blue-400">Filtered</span>
                </div>
                <div className="hidden flex-shrink lg:flex pr-80 pl-60">
                    <form className="">
                        <input
                        className="searchbar text-center px-10 py-2"
                        name="query"
                        autocomplete="off"
                        placeholder="Scour the archives..."
                        >
                        </input>
                    </form>
                </div>
                <div className="items-center hidden lg:flex">
                    <span className="heading-2 mr-2">Filter by category</span>
                    <span className="hover:scale-105 hover:opacity-100 opacity-60 transition-all cursor-pointer ease-linear"><NavBarIcon icon={<FaFilter size="12" />} /></span>
                </div>

                {/* TABLET */}
                <div className="flex flex-grow items-center justify-around list-none lg:hidden md:flex sm:hidden">
                    <li className="px-2">
                        <h1 className="heading-1-phone">
                            <span className="text-blue-950">G</span>
                            <span className="text-blue-400">F</span>
                        </h1>
                    </li>
                    <li className="flex justify-center px-2">
                        <form className="">
                            <input
                            className="searchbar-phone text-center px-20 py-2"
                            name="query"
                            autocomplete="off"
                            placeholder="Tablet"
                            >
                            </input>
                        </form>
                    </li>
                    <li className="px-2">
                        <span className="hover:scale-105 hover:opacity-100 opacity-60 transition-all cursor-pointer ease-linear"><NavBarIcon icon={<FaFilter size="14" />} /></span>
                    </li>
                </div>
                

                {/* PHONE */}
                <div className="flex flex-grow items-center justify-around list-none md:hidden">
                    <li className="px-2">
                        <h1 className="heading-1-phone">
                            <span className="text-blue-950">G</span>
                            <span className="text-blue-400">F</span>
                        </h1>
                    </li>
                    <li className="flex justify-center px-2">
                        <form className="">
                            <input
                            className="searchbar-phone text-center px-4 py-2"
                            name="query"
                            autocomplete="off"
                            placeholder="Phone"
                            >
                            </input>
                        </form>
                    </li>
                    <li className="px-2">
                        <span className="hover:scale-105 hover:opacity-100 opacity-60 transition-all cursor-pointer ease-linear"><NavBarIcon icon={<FaFilter size="10" />} /></span>
                    </li>
                </div>
            </div>
        </div>
    )
};

function NavBarIcon({ icon }) {
    return (
        <div>
            {icon}
        </div>
    )
};

export default NavBar;