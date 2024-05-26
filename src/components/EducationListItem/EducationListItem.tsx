import React, { useEffect, useState } from "react";
import { data } from "../../data/data";
import { BsAward, BsFillMortarboardFill } from "react-icons/bs";
import { Education } from "../../types/Education";

interface EducationListItemProps {
    education: Education
}

function EducationListItem({ education }: EducationListItemProps) {
    const [showDetail, setShowDetail] = useState(false);

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
                                            <td>{course.name}</td>
                                            <td>{course.description}</td>
                                            {/* <td>C#, Java</td> */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
}

export default EducationListItem;
