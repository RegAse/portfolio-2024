import "./ProjectList.css";
import { data } from "../../../data/data";
import { DiReact } from "react-icons/di";
import ProjectListItem from "../ProjectListItem/ProjectListItem";

function ProjectList() {

    return (
        <div className="row section-2-content">
            {data.projects.map((project) => (
                <ProjectListItem key={project.id} project={project}></ProjectListItem>
            ))}
        </div>
    );
}

export default ProjectList;
