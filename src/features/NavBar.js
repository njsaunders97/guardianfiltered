import React from 'react';
import { FaFilter } from 'react-icons/fa';

function NavBar() {
    return (
        <div className="fixed top-0 w-full bg-neutral-100 p-6">
            <div className="flex items-center justify-between w-full">
                <h1 className="heading-1">
                    <span className="text-blue-400">Guardian</span>
                    <span className="text-blue-950">Filtered</span>
                </h1>
                <div className="">
                    <form className="">
                        <input className="searchbar" name="query" autocomplete="off" placeholder="Scour the archives..."/>
                    </form>
                </div>
                <div className="flex justify-center items-center ">
                    <span><h2 className="heading-2">Filter by category</h2></span>
                    <span className="hover:scale-105 hover:opacity-100 opacity-60 transition-all cursor-pointer ease-linear"><NavBarIcon icon={<FaFilter size="16" />} /></span>
                </div>
            </div>
        </div>
    );
};

function NavBarIcon({ icon }) {
    return (
        <div>
            {icon}
        </div>
    )
};

export default NavBar;