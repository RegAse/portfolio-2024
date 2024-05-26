import "./EducationList.css";
import { BsAward, BsFillMortarboardFill } from "react-icons/bs";
import { data } from "../../data/data";
import { DiReact } from "react-icons/di";
import { useState } from "react";
import EducationListItem from "../EducationListItem/EducationListItem";

function EducationList() {
    const [showDetail, setShowDetail] = useState(false);

    function handleClick() {
        console.log("Show detail")
        setShowDetail(!showDetail);
    };

    return (
        <div className="row section-2-content">
            {data.education.map((education) => (
                <EducationListItem education={education}></EducationListItem>
            ))}
        </div>
    );
}

export default EducationList;
