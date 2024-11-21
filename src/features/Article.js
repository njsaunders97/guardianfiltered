import React from 'react';

function Article() {
    return (
        <div className="relative text-center
                        rounded-md shadow-sm bg-white
                        h-full
                        ">
            <div className="grid grid-cols-7">
                <div>
                    <p>CommentCount</p>
                </div>
                <div className="grid col-span-5">
                    <div className="grid grid-cols-5">
                        <div className="flex justify-start col-span-5">
                            <h1 className="heading-1 text-blue-950">Headline</h1>
                        </div>
                        <h3 className="flex justify-start heading-3 col-span-2">Author</h3>
                        <div className="flex justify-center col-span-5 h-80 -mt-10">
                            <img src="/resources/images/no-image.jpg" alt="No image available"></img>
                        </div>
                        <p className="col-span-5">ArticlePreview</p>
                        <p className="col-span-1">Button - GoTo</p>
                        <div className="col-span-1"></div>
                        <p className="col-span-1">Button - Expand</p>
                        <div className="col-span-1"></div>
                        <p className="col-span-1">Button - Comments</p>
                    </div>
                </div>
                <div>
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
};

export default Article;