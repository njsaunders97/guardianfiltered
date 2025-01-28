import React from 'react';
import FilteredArticle from '../FilteredArticle/FilteredArticle';
 
// Generates a list of filtered articles

function FilteredArticleList({ feed }) {
    return (
        <div>
            <div className="col-span-2 pb-14">
                {feed.feed.length > 0 ? feed.feed.map(article => (
                    <FilteredArticle 
                    article={article}
                    key={article.id}
                    title={article.webTitle}
                    author={article.author}
                    commentCount={article.commentCount}
                    webUrl={article.webUrl}
                    />
                )) : 
                null
                }
            </div>
        </div>
    )
}

export default FilteredArticleList;