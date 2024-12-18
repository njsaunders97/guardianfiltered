import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from './searchBarSlice';

function SearchBar({ onSearchBarSubmit }) {
    const dispatch = useDispatch();
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            dispatch(setSearchQuery(e.target.value));
        }
    };

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