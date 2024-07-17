import React, { useEffect, useState } from "react";
import { data } from "../../data/data";
import { BsAward, BsFillMortarboardFill } from "react-icons/bs";
import { Education } from "../../types/Education";
import { motion} from "framer-motion";


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
                <motion.div whileInView={{opacity: 1, left: 0}} transition={{duration: 1}} className="col-md-6 mb-5 education-list-container">
                    <div className="education">
                        <div className="education-content">
                            <h3><BsFillMortarboardFill className="education-icon" /> {education.title}</h3>
                            {education.awards?.map((award) => (
                                <p key={award.id} className="education-award"><BsAward /> {award.title}</p>
                            ))}
                            <p className="education-description">
                                {education.description}
                            </p>
                            {/* education tags */}
                            <div className="education-tags">
                                <h6 className="fw-bold">Technologies learned</h6>
                                {education.tags.map((t, index) => (
                                    <div key={index} className="tag">{t}</div>
                                ))}
                            </div>
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
                                        <tr key={course.id}>
                                            <td>{course.name}</td>
                                            <td>{course.description}</td>
                                            {/* <td>C#, Java</td> */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>
        </React.Fragment>
    );
}

export default EducationListItem;
