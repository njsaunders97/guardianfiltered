import React  from 'react';

function NavBar() {
    return (
        <div className="fixed top-0 w-full bg-neutral-100 flex items-center text-center p-4">
            <h1>GuardianFiltered</h1>
            <p>SearchBar</p>
            <p>Filter by Category</p>
        </div>
    );
};

export default NavBar;