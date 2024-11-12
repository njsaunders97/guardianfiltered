import React from 'react';
import { FaFilter } from 'react-icons/fa';

function NavBar() {
    return (
        <div className="fixed top-0 w-full bg-neutral-100 block p-8">
            <div className="flex items-center justify-between mx-20">
                <h1 className="heading-1 -m-12">
                    <span className="text-blue-400">Guardian</span>
                    <span className="text-blue-950">Filtered</span>
                </h1>
                <form>
                    <input className="searchbar" name="query" autocomplete="off" placeholder="Scour the archives..."/>   
                </form>
                <div className="flex justify-center items-center ">
                    <span><h2 className="heading-2">Filter by category</h2></span>
                    <span className="p-4 ml-4 hover:rounded-3xl transition-all cursor-pointer ease-linear duration-300 bg-blue-300"><NavBarIcon icon={<FaFilter size="16" />} /></span>
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