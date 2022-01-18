import React from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from '@iconify/react';


function WebDevIcons() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={1} className="tech-icons">
        <Icon icon="vscode-icons:file-type-html" />   
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <Icon icon="fa-css3" color="#1572B6" />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <Icon icon="logos:bootstrap" />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <Icon icon="vscode-icons:file-type-js-official" />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <Icon icon="logos:react" />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <Icon icon="simple-icons:node-dot-js" color="#339933" />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <Icon icon="simple-icons:npm" color="#CB3837" />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <Icon icon="cib:flask" />
      </Col>
    </Row>
  );
}

export default WebDevIcons;
