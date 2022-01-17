import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body style={{textAlign: 'center'}}>
        <Card.Title className="project-card-title">
          {props.title}
        </Card.Title>
        <Card.Subtitle style ={{ textAlign: "center"}}>
          <em>{props.subtitle}</em>
        </Card.Subtitle> 
      <br></br>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
      
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {"View Abstract"}
        </Button>
        <br></br>
        <br></br>
        <Button variant="primary" href={props.link2} target="_blank">
          <BiLinkExternal /> &nbsp;
          {"View Poster"}
        </Button>
        
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
