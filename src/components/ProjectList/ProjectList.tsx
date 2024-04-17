import "./ProjectList.css";
import { data } from "../../data/data";

function ProjectList() {

    return (
        <div className="row section-2-content">
            {data.projects.map((p) => (
                <div className="col-md-6">
                    <div>
                        Project {p.title}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;
