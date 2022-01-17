import React from "react";

function Resumecontent(props) {
  return (
    <div className="resume-item">
      <h5 className={props.title ? "resume-title" : "resume-no-title"}> 
        {props.title}
      </h5>
        <em>{props.date}</em>
        
      <h5 className={props.subtitle ? "resume-subtitle" : "resume-no-subtitle"}>
        {props.subtitle}
      </h5>
      <ul>
        {props.content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resumecontent;