import React from 'react';
import { useDispatch } from 'react-redux';

function SearchBar({ onSearchBarSubmit }) {

    return (
        <div className="flex w-full
                            ">
            <div className="flex w-full justify-center md:mx-auto">
                <form // submission handler comes via NavBar from App
                className="flex"
                onSubmit={onSearchBarSubmit}
                onKeyDown={handleKeyDown}
                > 
                    <input
                    className="searchbar text-center lg:w-96 md:w-60 py-2"
                    name="query"
                    autoComplete="off"
                    placeholder="Scour the archives..."
                    >
                    </input>
                </form>
            </div>
        </div>
    )
};

export default SearchBar;