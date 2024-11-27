import React from 'react';
import { useDispatch } from 'react-redux';

function SearchBar({ onSearchBarSubmit }) {
    
    return (
        <div className="flex w-full
                            ">
            <div className="flex w-full justify-center md:mx-auto">
                <form 
                className="flex"
                onSubmit={onSearchBarSubmit} // submission handler comes via NavBar from App
                >
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
    )
};

export default SearchBar;