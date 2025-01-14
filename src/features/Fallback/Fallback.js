import React from 'react';
import { GrArticle } from 'react-icons/gr';

function Fallback() {
    return (
        <div className="bg-neutral-100 w-full h-full
                        opacity-100 min-h-[580px]
                        "> {/* Feed Container */}
            <div className="grid lg:grid-cols-[1fr,minmax(768px,1024px),1fr] md:grid-cols-[1fr,8fr,1fr] sm:grid-cols-[1fr,8fr,1fr]"> {/* Feed Grid */}
                <div className="col-start-2 col-end-3">
                    <div className="pt-32">
                        <div className="flex my-20 flex-col
                                    text-center
                                    ">
                            <h1 className="heading-1">
                                <span data-testid="fallback-title" className="text-blue-950">Welcome to Guardian</span>
                                <span className="text-blue-400">Filtered</span>
                                <span className="text-blue-950">.</span>
                            </h1>
                            <h3 className="mt-4
                                        heading-3 text-blue-950
                                        ">
                                <span>There's far too much news - read</span>
                                <span className="font-semibold"> what you want </span>
                                <span>to read.</span>
                            </h3>
                            <p className="text-blue-950 heading-3">Tailor your Guardian feed to your taste via search terms or category filters above.</p>
                            <span className="flex justify-center
                                            mt-4
                                            ">
                                <ArticleIcon
                                icon={<GrArticle size="80" className="text-blue-400"/>}
                                >
                            
                                </ArticleIcon>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ArticleIcon ({icon}) {
    return (
        <div>
            {icon}
        </div>
    )
};

export default Fallback;