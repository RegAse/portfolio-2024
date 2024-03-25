import React, { useEffect, useState } from "react";
import { data } from "../../data/data";
import { BsAward, BsFillMortarboardFill } from "react-icons/bs";
import { Education } from "../../types/Education";
import EducationDiagramListItemProject from "../EducationDiagramList/EducationDiagramListItemProject/EducationDiagramListItemProject";

interface EducationDiagramListItemProps {
    education: Education
}

function EducationDiagramListItem({ education }: EducationDiagramListItemProps) {
    const [showDetail, setShowDetail] = useState(false);
    // useEffect(() => {
    //     const startAnim = setTimeout(() => {
    //         console.log("DELAYED");
    //     }, 2000);
    // }, []);

    function handleClick() {
        console.log("Show detail")
        setShowDetail(!showDetail);
    };

    return (
        <React.Fragment>
            <div className="col-md-6">
                <div className="education">
                    <div className="education-content">
                        <h4><BsFillMortarboardFill className="education-icon" /> {education.title}</h4>
                        {education.awards?.map((award) => (
                            <p className="education-award"><BsAward /> {award.title}</p>
                        ))}
                        <p>
                            {education.description}
                        </p>
                    </div>
                    <div className="education-show-detail" onClick={handleClick}>
                        <p>{showDetail ? 'Hide' : 'Show'} Detailed Information</p>
                    </div>
                    <div className="education-detail" style={{ opacity: showDetail ? 1 : 0, display: showDetail ? "block" : "none" }}>
                        <h4>{education.courses.length} Completed Courses</h4>
                        <table className="table table-dark education-courses">
                            <thead>
                                <tr>
                                    <th scope="col">Course</th>
                                    <th scope="col">Description</th>
                                    {/* <th scope="col">Tags</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {education.courses?.map((course) => (
                                    <tr>
                                        <td style={{ color: course.highlight ? "" : "" }}>{course.name}</td>
                                        <td>{course.description}</td>
                                        {/* <td>C#, Java</td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="education-connection-right d-none d-sm-none d-md-block"></div>
                    <div className="education-connection-down d-none d-sm-none d-md-block"></div>
                </div>
            </div>
            {education.projects?.map((project) => (
                <EducationDiagramListItemProject project={project}></EducationDiagramListItemProject>
            ))}
            <div className="col-md-5">

            </div>
        </React.Fragment>
    );
}

export default EducationDiagramListItem;
