import React from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from '@iconify/react';


function AstroIcons() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={1} className="tech-icons">
        <Icon icon="simple-icons:imagej" color="#1572b6" />   
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <Icon icon="simple-icons:labview"/>
      </Col>
    </Row>
  );
}

export default AstroIcons;
