import React, { useEffect, useState } from "react";
import "./EducationDiagramList.css";
// import Education from "../../types/Education";
import { data } from "../../data/data";
import EducationDiagramListItemProject from "./EducationDiagramListItemProject/EducationDiagramListItemProject";

function EducationDiagramList() {
    
    useEffect(() => {
        const startAnim = setTimeout(() => {
            console.log("DELAYED");
        }, 2000);
    }, []);

    return (
        <div className="row section-2-content">
            {data.education.map((education) => (
                <React.Fragment>
                    <div className="col-md-5">
                        <div className="education">
                            <h4>{education.title}</h4>
                            <p>
                                {education.description}
                            </p>
                            <div className="education-connection-right"></div>
                            <div className="education-connection-down"></div>
                        </div>
                    </div>
                    {education.projects?.map((project) => (
                        <EducationDiagramListItemProject project={project}></EducationDiagramListItemProject>
                    ))}
                    <div className="col-md-5">

                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}

export default EducationDiagramList;
