import React from 'react';
import ArticleResults from '../features/ArticleResults';
import Article from './Article';

function Feed() {
    return (
        <div className="flex centerline justify-center items-center h-screen w-screen
                         bg-neutral-100
                        ">
            <Article />
        </div>
    )
}

export default Feed;