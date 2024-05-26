import "./ProjectList.css";
import { data } from "../../data/data";
import { DiReact } from "react-icons/di";

function ProjectList() {

    return (
        <div className="row section-2-content">
            {data.projects.map((p) => (
                <div className="col-md-5 offset-md-1">
                    <div className="project">
                        <div className="project-cover" style={{ backgroundImage: "url(" + p.cover + ")" }}></div>
                        <div className="project-info">
                            <h2>{p.title}</h2>
                            <p className="fs-6">{p.description}</p>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            
                            {p.tags.map((t) => (
                                <span className="tag">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;
