import React from 'react';
import Article from './Article';

function ArticleContainer() {
    return (
        <div className="flex justify-center items-center
                        h-40 w-40 centerline bg-slate-300
                        ">
            <Article />
        </div>
    )
};

export default ArticleContainer;