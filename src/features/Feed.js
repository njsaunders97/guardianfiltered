import React from 'react';
import ArticleResults from '../features/ArticleResults';
import Article from './Article';
import { MdComment } from 'react-icons/md';

function Feed() {
    return (
        <div className="bg-neutral-100 w-full h-full
                        ">
            <div className="grid grid-cols-4">
                <div className="col-start-2 col-end-4 pt-32">
                    <div className="col-span-2 pb-14">
                        <Article className="" />
                    </div>
                    <div className="col-span-2 pb-14">
                        <Article className="" />
                    </div>
                    <div className="col-span-2 pb-14">
                        <Article className="" />
                    </div>
                    <div className="col-span-2 pb-14">
                        <Article className="" />
                    </div>
                    <div className="col-span-2 pb-14">
                        <Article className="" />
                    </div>
                    <button className="flex items-center justify-evenly button-yellow
                                               hover:opacity-100 opacity-90 transition-all cursor-pointer ease-linear 
                                               col-span-1 
                                                ">
                    <span className="">Go to Article</span>
                    <span><ShowMoreResultsIcon icon={<MdComment size="18"/>}/></span>
                </button>
                </div>
            </div>
        </div>
    )
}

function ShowMoreResultsIcon({icon}) {
    return (
        <div>
            {icon}
        </div>
    )
};

export default Feed;