import "./ProjectDisplay.css";
import { data } from "../../../data/data";
import { DiReact } from "react-icons/di";
import ProjectListItem from "../ProjectListItem/ProjectListItem";
import { useState } from "react";

function ProjectDisplay() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(3);

    return (
        <div className="row section-2-content">
            <div className="project-display" style={{ backgroundImage: "url(" + data.projects[currentProjectIndex].images[0].source + ")" }}>
                <div className="project-display-fade">

                </div>
                <div className="project-display-content row">
                    <div className="col-1">

                    </div>
                    <div className="col-4">
                        <h1>{data.projects[currentProjectIndex].title}</h1>
                        <p>
                            {data.projects[currentProjectIndex].description}
                        </p>
                    </div>
                </div>

                {/*  Stick to bottom */}
                <div className="container-fluid project-display-select">
                    <div className="row">
                        <h5>Projects</h5>
                        {data.projects.map((project, index) => (
                            <div className="project-display-select-item col-2">
                                <div className="project-display-select-item-cover" style={{ backgroundImage: "url(" + project.images[0].source + ")" }}>
                                    <div className={`project-display-select-item-overlay ${currentProjectIndex === index ? "active": ""} `} onClick={() => setCurrentProjectIndex(index)}>
                                        <div className="project-display-select-item-overlay-bottom">
                                            <h5 className="text-center mt-2">{project.title}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            // <ProjectListItem key={project.id} project={project}></ProjectListItem>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDisplay;
