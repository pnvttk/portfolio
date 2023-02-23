import React from "react";

function ProjectItem({ title, desc, imgUrl, stack, note, link }) {
    return (
        <div className="container">
            <div className="flex h-full items-stretch">
                <div className="max-w-sm border-2 border-stone-900 dark:border-white rounded-lg overdflow-hidden shadow-lg">
                    <img
                        src={imgUrl}
                        alt="project"
                        className="w-full h-36 md:h-48 object-cover"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                            <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-stone-200">{title}
                            </h3>
                        </div>
                        <p className="text-gray-700 text-base text-start text-md dark:text-stone-200 mb-2">
                            {desc}
                        </p>
                        <p className=" text-start text-xs md:text-sm text-red-600 dark:text-red-400">
                            {note}
                        </p>
                    </div>
                    <div className="px-6 pb-2">
                        {stack.map((item, index) => (
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                key={index}>
                                {item}
                            </span>
                        ))}
                    </div>
                    <div className="mb-3 justify-center flex flex-wrap gap-2 flex-row items-center  text-xs md:text-sm dark:text-stone-200 h-10 sticky top-[100vh]">
                        {link.map((item, index) => (
                            <div key={index}>
                                <a href={Object.values(item)[0]}>
                                    <button
                                        className="dark:bg-gray-200 dark:hover:bg-gray-100 dark:text-gray-700 font-semibold py-2 px-4 rounded-md shadow
                                        bg-black hover:bg-gray-700 text-white"
                                    >{Object.keys(item)[0]}
                                    </button>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProjectItem