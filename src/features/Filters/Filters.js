import React from 'react';
import { MdCancel } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { addFilter, removeFilter } from './filtersSlice';

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

    return (
        <div>
            {showDropdown && <div className="flex w-full top-20 fixed
                            h-20 z-10 -mt-1
                          bg-neutral-300
                            ">
                <div className="flex flex-wrap justify-around items-center w-full">
                    {filters.includes('News') ? <FilterButtonSelected onClick={handleButtonToggle} name='News'/> : <FilterButtonUnselected onClick={handleButtonToggle} name='News'/>}
                    {filters.includes('Opinion') ? <FilterButtonSelected onClick={handleButtonToggle} name='Opinion'/> : <FilterButtonUnselected onClick={handleButtonToggle} name='Opinion'/>}
                    {filters.includes('Sport') ? <FilterButtonSelected onClick={handleButtonToggle} name='Sport'/> : <FilterButtonUnselected onClick={handleButtonToggle} name='Sport'/>}
                    {filters.includes('Culture') ? <FilterButtonSelected onClick={handleButtonToggle} name='Culture'/> : <FilterButtonUnselected onClick={handleButtonToggle} name='Culture'/>}
                    {filters.includes('Lifestyle') ? <FilterButtonSelected onClick={handleButtonToggle} name='Lifestyle'/> : <FilterButtonUnselected onClick={handleButtonToggle} name='Lifestyle'/>}
                </div>
            </div>}
        </div>
    )
};

function FilterButtonSelected( { name, onClick } ) {
    return (
        <div className="flex items-center">
            <span className="text-blue-950 mr-1"><FilterXIcon icon={<MdCancel size="12"/>}/></span>
            <button onClick={() => onClick(name)} className="button-darkblue h-9 opacity-85 hover:opacity-100">{name}</button>
        </div>
    )
}

function FilterButtonUnselected( {name, onClick } ) {
    return (
        <div className="flex items-center">
            <span className="text-blue-950 mr-1"><FilterXIcon icon={<MdCancel size="12"/>}/></span>
            <button onClick={() => onClick(name)} className="button-blue h-9 opacity-85 hover:opacity-100">{name}</button>
        </div>
    )
}

function FilterXIcon({icon}) {
    return (
        <div>
            {icon}
        </div>
    )
}

export default Filters;