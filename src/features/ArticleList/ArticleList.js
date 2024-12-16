import React from 'react';
import Article from '../Article/Article';

function ArticleList() {
    return (
        <div>
            <div className="col-span-2 pb-14"> {/* Articles */}
                <Article />
            </div>
        </div>
    )
}

export default ArticleList;
