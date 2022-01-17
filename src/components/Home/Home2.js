import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import DataSciIcons from "./Techstack2";
import AstroIcons from "./Techstack3";
import Particle from "../Particle";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Particle />
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm an engineering student at <b className="purple"> Princeton 
              University </b> with interests in <b className="purple">statistics</b>, 
              <b className="purple"> data science</b>, and <b className="purple">
              economics</b>.
              <br />
              <br />
              My main fields of research are in <b className="purple">machine learning </b>
              and <b className="purple">physics </b> &nbsp;
              <i>
                <b className="purple">(astrophysics & nanotechnology)</b>. 
              </i>
              <br />
              <br />
              I also enjoy <b className="purple">design</b> and Android 
              <b className="purple"> app development</b>.
              <br />
              <br />
              Besides coding, I love composing, swimming, and baking!
            </p>            
          
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <br />
        <br />
        <br />
        
        <h1 className="project-heading">
          Technical <strong className="purple">Skills </strong>
        </h1>
        <br />
        <h1 className="project-subheading">
          <strong className="purple">Data Science & Analysis </strong>
        </h1>

        <DataSciIcons />
        <br />
        <h1 className="project-subheading">
          <strong className="purple">Physics & Astronomy </strong>
        </h1>

        <DataSciIcons />

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mhuang412"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/michelle-j-huang/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/michelle_h2020"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
           
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
