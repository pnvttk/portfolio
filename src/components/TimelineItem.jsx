import React from "react";

function TimelineItem({ year, title, duration, detail }) {
    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-600">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white dark:border-stone-900 dark:bg-stone-500" />
                <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-600 bg-stone-900 dark:bg-stone-200 rounded-md">
                        {year}
                    </span>
                    <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-200">
                        {title}
                    </h3>
                    <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                        {duration}
                    </div>
                    <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
                        {detail}
                    </p>
                </div>
            </li>
        </ol>
    )
}

export default TimelineItem