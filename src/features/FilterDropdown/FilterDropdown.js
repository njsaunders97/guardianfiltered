import React from 'react';
import { MdCancel } from 'react-icons/md';

function FilterDropdown({ showDropdown }) {
    return (
        <div>
            {showDropdown && <div className="flex w-full top-20 fixed
                            h-20 z-10 -mt-1
                          bg-neutral-300
                            ">
                <div className="flex flex-wrap justify-around items-center w-full">
                    <div className="flex items-center">
                        <span className="text-blue-950 mr-1"><FilterXIcon icon={<MdCancel size="12"/>}/></span>
                        <button className="button-blue h-9 opacity-85 hover:opacity-100">Category 1</button>
                    </div>
                    <div className="flex items-center">
                        <span className="text-blue-950 mr-1"><FilterXIcon icon={<MdCancel size="12"/>}/></span>
                        <button className="button-blue h-9 opacity-85 hover:opacity-100">Category 2</button>
                    </div>
                    <div className="flex items-center">
                        <span className="text-blue-950 mr-1"><FilterXIcon icon={<MdCancel size="12"/>}/></span>
                        <button className="button-blue h-9 opacity-85 hover:opacity-100">Category 3</button>
                    </div>
                    <div className="flex items-center">
                        <span className="text-blue-950 mr-1"><FilterXIcon icon={<MdCancel size="12"/>}/></span>
                        <button className="button-blue h-9 opacity-85 hover:opacity-100">Category 4</button>
                    </div>
                    <div className="flex items-center">
                        <span className="text-blue-950 mr-1"><FilterXIcon icon={<MdCancel size="12"/>}/></span>
                        <button className="button-blue h-9 opacity-85 hover:opacity-100">Category 5</button>
                    </div>
                </div>
            </div>}
        </div>
    )
};

function FilterXIcon({icon}) {
    return (
        <div>
            {icon}
        </div>
    )
}

export default FilterDropdown;