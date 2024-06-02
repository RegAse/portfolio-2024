import React, { useEffect, useState } from "react";
import { BsAward, BsFillMortarboardFill } from "react-icons/bs";
import { Project, ProjectImage } from "../../../types/Education";

interface ProjectListItemProps {
    project: Project
}

function ProjectListItem({ project }: ProjectListItemProps) {
    // const [currentImage, setCurrentImage] = useState<ProjectImage | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    function nextImage() {
        setCurrentImageIndex(currentImageIndex + 1);
    };

    function previousImage() {
        setCurrentImageIndex(currentImageIndex - 1);
    };

    return (
        <React.Fragment>
            <div className="col-md-5 offset-md-1">
                <div className="project">
                    {(project.images) &&
                        <>
                            {/* <img className="img-fluid" src={project.images[currentImageIndex].source} alt="Failed loading" /> */}
                            <div className="project-cover fadein" style={{ backgroundImage: "url(" + project.images[currentImageIndex].source + ")" }}></div>
                        </>
                    }
                    {/* <div className="project-cover" style={{ backgroundImage: "url(" + project.cover + ")" }}></div> */}
                    <div className="project-info">
                        <h2>{project.title}</h2>
                        <p className="project-desc">{project.description}</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        {/* <button onClick={nextImage}>
                            Next Image
                        </button>
                        <button onClick={previousImage}>
                            Prev Image
                        </button> */}

                        {project.tags.map((t, index) => (
                            <span key={index} className="tag">{t}</span>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProjectListItem;
