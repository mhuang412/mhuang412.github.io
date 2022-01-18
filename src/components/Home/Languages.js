import React from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from '@iconify/react';

function LanguageIcons() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={1} className="tech-icons">
        <Icon icon="logos:python" />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <Icon icon="logos:java" />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <Icon icon="logos:c" />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <Icon icon="logos:c-plusplus" />
      </Col>
    
      <Col xs={4} md={1} className="tech-icons">
        <Icon icon="logos:r-lang" width="50px" />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <Icon icon="logos:kotlin" />
      </Col>
    </Row>
  );
}

export default LanguageIcons;
