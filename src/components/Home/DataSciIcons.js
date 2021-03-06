import React from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from '@iconify/react';


function DataSciIcons() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={1} className="tech-icons">
        <Icon icon="logos:tensorflow" />   
      </Col>
      
      <Col xs={4} md={1} className="tech-icons">
        <Icon icon="simple-icons:pandas" color="#3776ab" />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <Icon icon="logos:numpy" />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <Icon icon="simple-icons:scikitlearn" />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <Icon icon="logos:opencv" />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <Icon icon="logos:matplotlib-icon" />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <Icon icon="vscode-icons:file-type-jupyter" />
      </Col>
    </Row>
  );
}

export default DataSciIcons;
