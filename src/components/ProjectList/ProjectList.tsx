import "./ProjectList.css";
import { data } from "../../data/data";

function ProjectList() {

    return (
        <div className="row section-2-content">
            {data.projects.map((p) => (
                <div className="col-md-5 offset-md-1">
                    <div className="project">
                        <div className="project-cover" style={{ backgroundImage: "url(" + p.cover + ")" }}></div>
                        <div className="project-info">
                            <h2>{p.title}</h2>
                            <p>{p.description}</p>
                            
                            <p>Show Tags here....</p>
                            <p>Show Tags here....</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;
