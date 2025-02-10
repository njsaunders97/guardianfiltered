import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFilter, removeFilter } from './filtersSlice';
import { FaFilter } from 'react-icons/fa';
import { fetchFilterResults } from '../../app/App';
import { setFeed } from '../Feed/feedSlice';

// note that scope right now doesn't including dynamically loading individual filters from API.
// rather current scope requires dictation of a set list of possible filters. 
// filtered feed will then be loaded with results from API according to category tag.
// this may be edited in future versions. 

function Filters({ showDropdown }) {
    const filters = useSelector(state => state.filters.selectedFilters);
    const dispatch = useDispatch();

    const handleButtonToggle = (name) => {
        console.log('Before update: ', filters)
        if(!filters.includes(name)) {
            dispatch(addFilter(name))
            console.log('Adding: ', filters);
        } else {
            dispatch(removeFilter(name))
            console.log('Removing: ', filters);
        }
    };

    function handleApplyFilters() {
        console.log(filters);
        console.log('filters handled!');
        if(filters.length < 0) {
            dispatch(setFeed([]));
        } else {
            dispatch(setFeed([]));
            dispatch(fetchFilterResults(filters));
        }
    }

    return (
        <div>
            {showDropdown && <div className="flex w-full top-20 fixed flex-col
                            h-20` z-10 -mt-1
                          bg-neutral-300
                            ">
                <div className="flex flex-wrap justify-around items-center w-full my-5">
                    {filters.includes('News') ? <FilterButtonSelected onClick={handleButtonToggle} name='News'/> : <FilterButtonUnselected onClick={handleButtonToggle} name='News'/>}
                    {filters.includes('Opinion') ? <FilterButtonSelected onClick={handleButtonToggle} name='Opinion'/> : <FilterButtonUnselected onClick={handleButtonToggle} name='Opinion'/>}
                    {filters.includes('Sport') ? <FilterButtonSelected onClick={handleButtonToggle} name='Sport'/> : <FilterButtonUnselected onClick={handleButtonToggle} name='Sport'/>}
                    {filters.includes('Culture') ? <FilterButtonSelected onClick={handleButtonToggle} name='Culture'/> : <FilterButtonUnselected onClick={handleButtonToggle} name='Culture'/>}
                    {filters.includes('Lifestyle') ? <FilterButtonSelected onClick={handleButtonToggle} name='Lifestyle'/> : <FilterButtonUnselected onClick={handleButtonToggle} name='Lifestyle'/>}
                    <ApplyFilters onClick={handleApplyFilters} />
                </div>
                <div className="">
                    
                </div>
            </div>}
        </div>
    )
};


function FilterButtonSelected( { name, onClick } ) {
    return (
        <div className="flex items-center">
            <button onClick={() => onClick(name)} className="button-darkblue h-9 opacity-85 hover:opacity-100">{name}</button>
        </div>
    )
}

function FilterButtonUnselected( {name, onClick } ) {
    return (
        <div className="flex items-center">
            <button onClick={() => onClick(name)} className="button-blue h-9 opacity-85 hover:opacity-100">{name}</button>
        </div>
    )
}

function FilterIcon({ icon }) {
    return (
        <div>
            {icon}
        </div>
    )
}

function ApplyFilters({ onClick }) {
    return (
        <button onClick={() => onClick()} className="button-yellow flex items-center
                            justify-around h-9 opacity-85 hover:opacity-100 
                            ">
            <span className="mr-1.5">Apply filters</span>
            <span><FilterIcon icon={<FaFilter size="11" />}/></span>
        </button>
    )
}

export default Filters;