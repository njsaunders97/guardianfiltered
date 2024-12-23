import React from 'react';
import ArticleList from '../ArticleList/ArticleList';
import { MdExpandCircleDown } from 'react-icons/md';

function Feed({ feed }) {
    return (
        <div className="bg-neutral-100 w-full h-full
                        opacity-60 min-h-[350px]
                        "> {/* Feed Container */}
            <div className="grid lg:grid-cols-[1fr,minmax(768px,1024px),1fr] md:grid-cols-[1fr,8fr,1fr] sm:grid-cols-[1fr,8fr,1fr]"> {/* Feed Grid */}
                <div className="col-start-2 col-end-3">
                    <div className="pt-32">
                        <ArticleList feed={feed}/>
                        <div className="flex top-4 justify-center
                                    -mt-2 mb-8
                                    "> {/* ShowMoreResults Container */}
                            {feed.feed.length > 0 ? <button className="flex items-center justify-center button-yellow
                                                hover:opacity-100 opacity-90 transition-all cursor-pointer ease-linear
                                                w-40
                                                ">
                                <span className="mr-1">Show more results</span>
                                {<span><ShowMoreResultsIcon icon={<MdExpandCircleDown size="18"/>}/></span>}
                            </button> :
                            null
                            }
                        </div>
                    </div>
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