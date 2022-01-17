import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiTwotoneMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function ContactCard() {
  return (
    <Container fluid className="contact-section" id="about">
    <Particle />
    <Container>
          
      <Row>
        <Col md={12} className="contact-social">
         
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a href="mailto:mh52@princeton.edu" className="icon-colour  home-social-icons"><AiTwotoneMail/></a>
            </li>
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

export default ContactCard;