import React from 'react';
import Article from '../Article/Article';

// Generates a list of articles

function ArticleList({ feed, query }) {
    return (
        <div>
            <div className="col-span-2 pb-14">
                {query.length > 0 ? feed.feed.map(article => (
                    <Article 
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

export default ArticleList;
