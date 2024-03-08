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
			<div className="col-md-4 offset-md-2 project-container mt-5">
				<div
					className="project"
					style={{ backgroundImage: "url(" + project.cover + ")", animationDelay: (project.id + 1) * 1.2 + "s" }}
				>
					<div className="project-info">
						<h3>{project.title}</h3>
						<p>{project.description}</p>
					</div>
				</div>
				<div className="project-connection-left" style={{ animationDelay: (project.id + 1) * 1 + "s" }}></div>
				<div className="project-connection-left-title" style={{ animationDelay: (project.id + 1) * 1 + "s" }}>{project.course}</div>
			</div>
			<div className="col-md-4 offset-md-1 project-container mt-5">
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
