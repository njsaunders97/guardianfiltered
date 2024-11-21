import React from 'react';
import ArticleResults from '../features/ArticleResults';
import Article from './Article';

function Feed() {
    return (
        <div className="bg-neutral-100 w-full h-screen
                        ">
            <div className="grid grid-cols-4">
                <div>
                
                </div>
                <div className="col-span-2 pt-48">
                    <Article className="" />
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Feed;