import React, { useEffect, useState } from "react";
import { BsAward, BsChevronLeft, BsChevronRight, BsCircle, BsCircleFill, BsFillMortarboardFill } from "react-icons/bs";
import { Project, ProjectImage } from "../../../types/Education";
import { motion} from "framer-motion";

interface ProjectListItemProps {
    project: Project
}

function ProjectListItem({ project }: ProjectListItemProps) {
    // const [currentImage, setCurrentImage] = useState<ProjectImage | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    function nextImage() {
        if(project.images !== undefined && currentImageIndex + 1 >= project.images?.length) {
            // Wrap around
            setCurrentImageIndex(0); 
        }
        else {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    function previousImage() {
        if(currentImageIndex - 1 < 0 && project.images !== undefined) {
            // Wrap Around
            console.log(project.images.length);
            setCurrentImageIndex(project.images?.length - 1); 
        }
        else {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    return (
        <React.Fragment>
            <motion.div 
                // whileHover={{boxShadow: "0px 0px 10px rgba(122, 122, 122, 0.1)"}}
                whileInView={{opacity: 1, top: 0}} 
                transition={{ ease: "easeInOut", duration: 1}} 
                viewport={{ once: true, amount: 0.5 }} 
                className="project-card">
                <div className="row g-0">
                    {(project.images) &&
                        <>
                            {/* <img className="img-fluid" src={project.images[currentImageIndex].source} alt="Failed loading" /> */}
                            <div
                                className="col-md-7 project-cover d-flex justify-content-between align-items-center" 
                                // style={{ backgroundImage: "url(" + project.images[currentImageIndex].source + ")" }}>
                                >
                               {/* Video */}
                               {(project.video === "") &&
                                <img className="img-fluid" src={project.images[currentImageIndex].source} alt="Failed loading" />
                               }
                               {(project.video !== "") &&
                               <video className="project-video" autoPlay muted loop>
                                    <source src={project.video} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                                }
                                {/* <button className="btn btn-slide" onClick={previousImage}>
                                    <BsChevronLeft className="fs-1" />
                                </button>
                                <button className="btn btn-slide" onClick={nextImage}>
                                    <BsChevronRight className="fs-1" />
                                </button>
                                <div className="project-cover-overlay">
                                    {project.images.map((t, index) => (
                                        <div key={index} className={`slide-location ${currentImageIndex === index ? "active": ""} `}/>
                                        // <span key={index} className="tag">{index}</span>
                                    ))}
                                </div> */}
                            </div>
                        </>
                    }
                    {/* <div className="project-cover" style={{ backgroundImage: "url(" + project.cover + ")" }}></div> */}
                    <div className="col-md-5 project-info">
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-desc">{project.description}</p>

                        {
                            (project.link !== "" &&
                                <a className="btn btn-secondary" href={project.link}>Check out live version</a>
                            )
                        }
                        {
                            (project.source !== "" &&
                                <a className="btn btn-secondary" href={project.source}>Check out the source</a>
                            )
                        }
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="project-tags-container">
                            <h6 className="project-tags-title">Tech Used</h6>
                            {project.tags.map((t, index) => (
                                <span key={index} className="tag">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </React.Fragment>
    );
}

export default ProjectListItem;
