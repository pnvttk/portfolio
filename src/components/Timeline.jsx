import React from "react";
import timeline from '../data/timelines.js';
import TimelineItem from "./TimelineItem";
import Title from "./Title.jsx";

function Timeline() {
    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-9/12 ">
                <Title>Timeline</Title>
                {timeline.map((item, index) => (
                    <TimelineItem
                        key={index}
                        year={item.year}
                        title={item.title}
                        duration={item.duration}
                        detail={item.detail}
                    />
                ))}
            </div>
        </div>
    )
}

export default Timeline