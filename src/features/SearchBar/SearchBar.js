import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from './searchBarSlice';
import store from '../../app/store';

function SearchBar({ onSearchBarSubmit }) {
    const dispatch = useDispatch();
    const query = useSelector(state => state.query);
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            dispatch(setSearchQuery(e.target.value));
            console.log(query);
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