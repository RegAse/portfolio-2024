import React from "react";
import {Project} from "../../../types/Education";
// import "./EducationDiagramListItem.css";

interface EducationDiagramListItemProjectProps {
	project: Project
}

function EducationDiagramListItemProject({ project }: EducationDiagramListItemProjectProps) {
	return (
		<React.Fragment>
			<div className="col-md-5 offset-md-2 project-container mt-5">
				<div
					className="project"
					style={{ backgroundImage: "url(" + project.cover + ")", animationDelay: 1 * 1.2 + "s" }}
				>
					<div className="project-info">
						<h3>{project.title}</h3>
						<p>{project.description}</p>
					</div>
				</div>
				<div className="project-connection-left" style={{ animationDelay: 1 * 1 + "s" }}></div>
				<div className="project-connection-left-title" style={{ animationDelay: 1 * 1 + "s" }}>GCDD Course</div>
			</div>
			<div className="col-md-5">
			</div>
		</React.Fragment>
	);
}

export default EducationDiagramListItemProject;
