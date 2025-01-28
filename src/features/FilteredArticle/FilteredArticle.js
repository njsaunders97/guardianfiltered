import React from 'react';
import { MdExpandCircleDown, MdComment, MdIosShare} from "react-icons/md";
import { GrArticle } from 'react-icons/gr';

function FilteredArticle({ article }) {
    return (
        <div data-testid="article-element" className="relative text-center
                        rounded-md shadow-sm bg-white
                        h-full py-10 mx-2 my-10
                        ">
            <div className="grid grid-cols-7">
                <div className="p-0">
                    <button className="hover:opacity-100 opacity-95 transition-all cursor-pointer ease-linear
                                  text-yellow-300
                                 "><CommentCountIcon icon={<MdComment size="34" />} /></button>
                    <span className="grid row-start-2 heading-3 -mt-2">{article.commentCount}</span>
                </div>
                <div className="grid col-span-5">
                    <div className="grid grid-cols-5">
                        <div className="flex justify-start col-span-5">
                            <h1 className="heading-1 text-blue-950">{article.webTitle}</h1>
                        </div>
                        <h3 className="flex justify-start col-span-2
                                        heading-3
                                        ">{article.author}</h3>
                        <div className="flex justify-center col-span-5 
                                        mt-3
                                        ">
                            <img className="" src="/resources/images/test-image.jpg" alt="No image available"></img>
                        </div>
                        <div className="text-justify article-text
                                        line-clamp-4 col-span-5 mb-6 mt-3
                                        ">
                            <p>{article.articleContent}</p>
                        </div>
                        <div className="flex col-span-5 justify-between">
                            <button className="md:flex hidden items-center justify-evenly button-yellow flex-shrink
                                               hover:opacity-100 opacity-90 transition-all cursor-pointer ease-linear 
                                               col-span-1 
                                                ">
                        
                                <span className="mr-1">Go to Article</span>
                                <span><ArticleIcon icon={<GrArticle size="18"/>}/></span>
                            </button>
                            <button className="md:hidden flex items-center justify-evenly button-yellow flex-shrink
                                               hover:opacity-100 opacity-90 transition-all cursor-pointer ease-linear 
                                               col-span-1 w-14                                                     ">
                                <span><ArticleIcon icon={<GrArticle size="18"/>}/></span>
                            </button>
                            <button className="md:flex hidden items-center justify-evenly button-blue
                                               hover:opacity-100 opacity-95 transition-all cursor-pointer ease-linear 
                                               col-span-1 
                                                ">
                                <span className="-mr-1">Expand</span>
                                <span><ExpandIcon icon={<MdExpandCircleDown size="18"/>}/></span>
                            </button>
                            <button className="md:hidden flex items-center justify-evenly button-blue flex-shrink
                                               hover:opacity-100 opacity-90 transition-all cursor-pointer ease-linear 
                                               col-span-1 w-14                                                      ">
                                <span><ExpandIcon icon={<MdExpandCircleDown size="18"/>}/></span>
                            </button>
                            <button className="md:flex hidden items-center justify-evenly button-blue
                                               hover:opacity-100 opacity-95 transition-all cursor-pointer ease-linear 
                                               col-span-1 
                                                ">
                                <span className="">Comments</span>
                                <span><CommentIcon icon={<MdComment size="18"/>}/></span>
                            </button>
                            <button className="md:hidden flex items-center justify-evenly button-blue flex-shrink
                                               hover:opacity-100 opacity-90 transition-all cursor-pointer ease-linear 
                                               col-span-1 w-14                                                
                                               ">
                                <span><CommentIcon icon={<MdComment size="18"/>}/></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-0">
                    <button className=" hover:opacity-100 opacity-95 transition-all cursor-pointer ease-linear
                                  text-yellow-300
                                 "><ShareIcon icon={<MdIosShare size="34"/>} /></button>
                </div>
            </div>
        </div>
    )
};

function CommentCountIcon ({icon}) {
    return (
        <div>
            {icon}
        </div>
    )
};

function ShareIcon ({icon}) {
    return (
        <div>
            {icon}
        </div>
    )
};

function ExpandIcon ({icon}) {
    return (
        <div>
            {icon}
        </div>
    )
};

function ArticleIcon ({icon}) {
    return (
        <div>
            {icon}
        </div>
    )
};

function CommentIcon ({icon}) {
    return (
        <div>
            {icon}
        </div>
    )
};



export default FilteredArticle;