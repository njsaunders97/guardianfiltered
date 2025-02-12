import React from 'react';
import { MdExpandCircleDown, MdComment, MdIosShare, MdOutlineAccountCircle} from "react-icons/md";
import { FaReadme } from 'react-icons/fa';
import { GrArticle } from 'react-icons/gr';

function Article({ article }) {
    console.log(article);
    return (
        <div data-testid="article-element" className="relative text-center
                        rounded-md shadow-sm bg-white
                        h-full py-10 mx-2 my-8
                        ">
            <div className="grid grid-cols-7">
                <div className="p-0">
                    <button className="hover:opacity-100 opacity-95 transition-all cursor-pointer ease-linear
                                  text-yellow-300
                                 "><WordCountIcon icon={<FaReadme size="26" />} /></button>
                    <span className="grid row-start-2 heading-3 -mt-2">{article.fields.wordcount}</span>
                </div>
                <div className="grid col-span-5">
                    <div className="grid grid-cols-5">
                        <div className="flex justify-start col-span-5">
                            <h1 className="heading-1 line-clamp-1 text-blue-950">{article.fields.headline}</h1>
                        </div>
                        <div className="flex items-center justify-start col-span-5
                                        byline mt-1">
                            <span className="mr-1">
                                <AuthorIcon icon={<MdOutlineAccountCircle size="16"/>}/>
                            </span>
                            <span>
                                <p className="">{article.fields.byline}</p>
                            </span>
                        </div>
                        <div className="flex justify-center col-span-5 
                                        mt-3
                                        ">
                            <img className="" src={article.elements?.[0]?.assets?.[0]?.file} alt="No image available"></img>
                        </div>
                        <div className="text-justify
                                        line-clamp-4 col-span-5 mt-2
                                        standfirst">
                            <h3>{article.fields.trailText}</h3>
                        </div>
                        <div className="text-justify article-text
                                        line-clamp-2 col-span-5 mb-4 mt-2
                                        ">
                            <p>{article.fields.bodyText}</p>
                        </div>
                        <div className="flex col-span-5 justify-between">
                            <a href={article.webUrl}>
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
                            </a>
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
                                 "><ShareIcon icon={<MdIosShare size="26"/>} /></button>
                </div>
            </div>
        </div>
    )
};

function AuthorIcon ({icon}) {
    return (
        <div>
            {icon}
        </div>
    )
};

function WordCountIcon ({icon}) {
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



export default Article;