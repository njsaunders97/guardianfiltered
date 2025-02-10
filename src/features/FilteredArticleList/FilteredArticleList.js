import React from 'react';
import FilteredArticle from '../FilteredArticle/FilteredArticle';
import { useSelector } from 'react-redux';
 
// Generates a list of filtered articles

function FilteredArticleList({ feed }) {
    const filters = useSelector(state => state.filters.selectedFilters);
    return (
        <div>
            <div className="col-span-2 pb-14">
                {feed.feed.length > 0 || filters.length > 0 ? feed.feed.map(article => (
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