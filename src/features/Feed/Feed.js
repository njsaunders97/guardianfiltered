import React from 'react';
import ArticleList from '../ArticleList/ArticleList';
import FilteredArticleList from '../FilteredArticleList/FilteredArticleList';
import { MdExpandCircleDown } from 'react-icons/md';
import { useSelector } from 'react-redux';

function Feed({ feed, query }) {
    const filters = useSelector(state => state.filters.selectedFilters);

    let feedShell;
    if(filters.length > 0) {
        feedShell = <FilteredArticleList feed={feed}/>
    } else if (query.length > 0) {
        feedShell = <ArticleList feed={feed} query={query}/>
    };

    return (
        <div className="bg-neutral-100 w-full h-full
                        opacity-100 min-h-[350px] -mt-8
                        "> {/* Feed Container */}
            <div className="grid lg:grid-cols-[1fr,minmax(768px,1024px),1fr] md:grid-cols-[1fr,8fr,1fr] sm:grid-cols-[1fr,8fr,1fr]"> {/* Feed Grid */}
                <div className="col-start-2 col-end-3">
                    <div className="pt-28">
                        {feedShell}
                        <div className="flex top-4 justify-center
                                    -mt-2 mb-8
                                    "> {/* ShowMoreResults Container */}
                            {filters.length > 0 || query.length > 0 ? <button className="flex items-center justify-center button-yellow
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