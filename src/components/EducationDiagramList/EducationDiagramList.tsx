import React, { useEffect, useState } from "react";
import "./EducationDiagramList.css";
// import Education from "../../types/Education";
import { data } from "../../data/data";
import { BsAward, BsFillMortarboardFill } from "react-icons/bs";
import EducationDiagramListItem from "../EducationDiagramListItem/EducationDiagramListItem";

function EducationDiagramList() {
    // useEffect(() => {
    //     const startAnim = setTimeout(() => {
    //         console.log("DELAYED");
    //     }, 2000);
    // }, []);

    // function handleClick() {
    //     console.log("Show detail")
    //     document.querySelector(".education-detail");
    // };

    return (
        <div className="row section-2-content">
            {data.education.map((education) => (
                <EducationDiagramListItem education={education}></EducationDiagramListItem>
                // <React.Fragment>
                //     <div className="col-md-6">
                //         <div className="education">
                //             <div className="education-content">
                //                 <h4><BsFillMortarboardFill className="education-icon" /> {education.title}</h4>
                //                 {education.awards?.map((award) => (
                //                     <p className="education-award"><BsAward/> {award.title}</p>
                //                 ))}
                //                 <p>
                //                     {education.description}
                //                 </p>
                //             </div>
                //             <div className="education-show-detail" onClick={handleClick}>
                //                 <p>Show Detailed Information</p>
                //             </div>
                //             <div className="education-detail">
                //                 Course List here
                //             </div>
                //             <div className="education-connection-right"></div>
                //             <div className="education-connection-down"></div>
                //         </div>
                //     </div>
                //     {education.projects?.map((project) => (
                //         <EducationDiagramListItemProject project={project}></EducationDiagramListItemProject>
                //     ))}
                //     <div className="col-md-5">

                //     </div>
                // </React.Fragment>
            ))}
        </div>
    );
}

export default EducationDiagramList;
