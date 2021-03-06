import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards1(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="project-card-title1">
          {props.title}
        </Card.Title>
        <Card.Subtitle style ={{ textAlign: "center"}}>
          <em>{props.subtitle}</em>
        </Card.Subtitle> 
      <br></br>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
      <br></br>
        
      </Card.Body>
    </Card>
  );
}
export default ProjectCards1;
