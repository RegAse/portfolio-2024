import React, { useState } from "react";
import {Project} from "../../../types/Education";
import "../EducationDiagramList.css";

interface EducationDiagramListItemProjectProps {
	project: Project
}

function EducationDiagramListItemProject({ project }: EducationDiagramListItemProjectProps) {
	const [count, setCount] = useState(0);

	return (
		<React.Fragment>
			<div className="col-md-4 col-sm-12 offset-md-2 project-container mt-5">
				<a href={project.link} target={project.link === "#" ? "":"_"}>
				<div
					className="project"
					style={{ backgroundImage: "url(" + project.cover + ")", animationDelay: (project.id + 1) * 1.2 + "s" }}
				>
					<div className="project-video-container">
						<video className="project-video" autoPlay muted loop>
							<source src={project.video} type="video/mp4"></source>
						</video>
					</div>
					<div className="project-info">
						<h3>{project.title}</h3>
						<p>{project.description}</p>
					</div>
				</div>
				</a>
				<div className="project-connection-left d-sm-none d-md-block" style={{ animationDelay: (project.id + 1) * 1 + "s" }}></div>
				<div className="project-connection-left-title d-none d-xxl-block" style={{ animationDelay: (project.id + 1) * 1 + "s" }}>{project.course}</div>
			</div>
			<div className="col-md-4 offset-md-2 project-container mt-5">
				{/* <div
					className="project"
					style={{ backgroundImage: "url(" + project.cover + ")", animationDelay: (project.id + 1) * 1.2 + "s" }}
				>
					<div className="project-info">
						<h3>{project.title}</h3>
						<p>{project.description}</p>
					</div>
				</div>
				<div className="project-connection-left" style={{ animationDelay: (project.id + 1) * 1 + "s" }}></div>
				<div className="project-connection-left-title" style={{ animationDelay: (project.id + 1) * 1 + "s" }}>{project.course}</div> */}
			</div>
		</React.Fragment>
	);
}

export default EducationDiagramListItemProject;
