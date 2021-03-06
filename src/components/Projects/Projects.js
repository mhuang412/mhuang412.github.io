import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectCard1 from "./ProjectCards1";
import Particle from "../Particle";
import crypto from "../../Assets/animation_500_kyj9ad2l.gif";
import nanotubes from "../../Assets/nanotubes.jpeg";
import astro from "../../Assets/eaglenebula.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Research Projects 
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard1
              imgPath={crypto}
              title="Cryptocurrency Model"
              subtitle="December 2021 - present"
              description="Machine learning model to predict price trends of Bitcoin. Built with TensorFlow and Scikit-learn."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nanotubes}
              title="Fabrication & Optimization of Titania Dioxide Nanotubes"
              subtitle="June 2019 - September 2019"
              description="Synthesized and determined optimization of ordered titania nanotubes via two-step anodic oxidation process."
              link="https://raw.githubusercontent.com/mhuang412/mhuang412.github.io/master/src/Assets/SSU_Abstract.pdf"
              link2="https://raw.githubusercontent.com/mhuang412/mhuang412.github.io/master/src/Assets/SSU_Poster.pdf"
            />
          </Col>
         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={astro}
              title="Orbit Determination of Asteroid 2007KN4"
              subtitle="June 2019 - July 2019"
              description= "Determined the orbital elements of Asteroid 355256 (KN4) via the Method of Gauss (aperture photometry, astrometry, localized surface plasmon resonance with flattening, and linear regression). Integrated Monte Carlo simulations and differential correction."
              link="https://raw.githubusercontent.com/mhuang412/mhuang412.github.io/master/src/Assets/SSP_Abstract.pdf"
              link2="https://raw.githubusercontent.com/mhuang412/mhuang412.github.io/master/src/Assets/SSP_Poster.pdf"
            />
          </Col>
       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
