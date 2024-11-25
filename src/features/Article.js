import React from 'react';
import { FaComment, FaShare } from 'react-icons/fa';
import { MdExpandCircleDown, MdArticle, MdComment, MdIosShare} from "react-icons/md";

function Article() {
    return (
        <div className="relative text-center
                        rounded-md shadow-sm bg-white
                        h-full py-10 mx-2
                        ">
            <div className="grid grid-cols-7">
                <div className="p-0">
                    <button className="hover:opacity-100 opacity-95 transition-all cursor-pointer ease-linear
                                  text-yellow-300
                                 "><CommentCountIcon icon={<MdComment size="34" />} /></button>
                    <span className="grid row-start-2 heading-3 -mt-2">23</span>
                </div>
                <div className="grid col-span-5">
                    <div className="grid grid-cols-5">
                        <div className="flex justify-start col-span-5">
                            <h1 className="heading-1 text-blue-950">Headline</h1>
                        </div>
                        <h3 className="flex justify-start col-span-2
                                        heading-3
                                        ">Author</h3>
                        <div className="flex justify-center col-span-5 
                                        mt-3
                                        ">
                            <img className="" src="/resources/images/test-image.jpg" alt="No image available"></img>
                        </div>
                        <div className="text-justify article-text
                                        line-clamp-4 col-span-5 mb-6 mt-3
                                        ">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id viverra nunc, id imperdiet est. Vestibulum ut tortor eget ex luctus aliquet eu vel diam. Nulla viverra et leo eu rutrum. Integer facilisis, massa in efficitur convallis, massa ligula lobortis dolor, quis vehicula ligula ex sed est. Vivamus eleifend bibendum mi nec pharetra. Duis porttitor vulputate eros eget scelerisque. Fusce sodales sit amet ipsum nec finibus. Maecenas porttitor ex ut velit tempus pretium. Praesent feugiat viverra mi, ut dictum ante feugiat ac. Sed non libero rhoncus, tempor arcu id, viverra lacus. Donec vitae efficitur sem. Donec egestas tortor in quam semper, sed semper lectus dapibus.</p>
                        </div>
                        <div className="flex col-span-5 justify-between">
                            <button className="md:flex hidden items-center justify-evenly button-yellow flex-shrink
                                               hover:opacity-100 opacity-90 transition-all cursor-pointer ease-linear 
                                               col-span-1 
                                                ">
                        
                                <span className="">Go to Article</span>
                                <span><ArticleIcon icon={<MdArticle size="18"/>}/></span>
                            </button>
                            <button className="md:hidden flex items-center justify-evenly button-yellow flex-shrink
                                               hover:opacity-100 opacity-90 transition-all cursor-pointer ease-linear 
                                               col-span-1 w-14                                                     ">
                                <span><ArticleIcon icon={<MdArticle size="18"/>}/></span>
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



export default Article;