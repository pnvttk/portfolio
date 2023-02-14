import React from "react";
import projects from '../data/projects'
import ProjectItem from "./ProjectItem";
import Title from "./Title";

function Project() {
    return (
        <div className="flex flex-col justify-center text-center">
            <Title>Projects</Title>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="grid gird-cols-1
            md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map(project => (
                        <ProjectItem
                            imgUrl={project.imgUrl}
                            title={project.title}
                            stack={project.stack}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project