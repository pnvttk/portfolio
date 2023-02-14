import React from "react";

function ProjectItem({ title, imgUrl, stack, link }) {
    return (
        // <div className="border-2 border-stone-900 dark:border-white rounded-md overdflow-hidden">
        <a
            href={link}
            target="_blank"
            rel="noopener noreferer"
            className="border-2 border-stone-900 dark:border-white rounded-md overdflow-hidden"
        >
            <img
                src={imgUrl}
                alt="project"
                className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-stone-200">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-stone-200">
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white 
                        rounded-md ">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </a>
        // </div >
    )
}

export default ProjectItem