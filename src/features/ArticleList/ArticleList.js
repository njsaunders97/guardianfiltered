import React from 'react';
import Article from '../Article/Article';

// Generates a list of articles

function ArticleList({ feed }) {
    return (
        <div>
            <div className="col-span-2 pb-14">
                {feed.feed.map(article => (
                    <Article 
                    article={article}
                    key={article.id}
                    title={article.webTitle}
                    author={article.author}
                    commentCount={article.commentCount}
                    webUrl={article.webUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default ArticleList;
