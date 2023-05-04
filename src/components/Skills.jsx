import React from "react";
import { skills } from "./Data";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';






const Skills = () => {
    return(
        <>
        {skills.map(({title, percentage}, index)=> {
            return(
                <div className="progress__box" key={index}>
                    <div className="progress">
                        <CircularProgressbar strokeWidth={8} text={`${percentage}%`}
                        value={percentage}
                        />
                    </div>
                    <h3 className="title">{title}</h3>
                </div>
            )
        })}
        </>
    )
}

export default Skills;