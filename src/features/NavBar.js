import React from 'react';
import { FaFilter } from 'react-icons/fa';

function NavBar() {
    return (
        <div className="flex m-auto fixed w-full top-0 left-0 right-0
                        bg-neutral-100"> {/* NavBar */}
            <div className="flex m-auto items-center
                            py-4 w-full"> {/* NavBar Container */}
                <div className="heading-1">
                    <span className="heading-1 text-blue-950">Guardian</span>
                    <span className="heading-1">Filtered</span>
                </div>
                <div className="flex pr-80 pl-60">
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
                <div className="flex items-center">
                    <span className="heading-2 mr-4">Filter by category</span>
                    <span className="hover:scale-105 hover:opacity-100 opacity-60 transition-all cursor-pointer ease-linear"><NavBarIcon icon={<FaFilter size="16" />} /></span>
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