import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ContactCard from "./ContactCard";
import contactImg from "../../Assets/animation_500_kyj6nxa7.gif";

function Contact() {
  return (
    <Container fluid className="contact-title">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Contact Me!
            </h1>
            <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
           The best way to contact me is through email <br/> 
           <b className="purple"> mh52@princeton.edu </b> <br/>
           or any of the socials below:
                     
          </p>
        </blockquote>
            <ContactCard />

            <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "An investment in knowledge pays the best interest."{" "}
          </p>
          <footer className="blockquote-footer">Benjamin Franklin</footer>

          </Col>
          <Col
            md={5}
            style={{ paddingTop: "0px", paddingBottom: "50px" }}
            className="contact-img"
          >
            <img src={contactImg} alt="contact" className="img-fluid" />
          </Col>
        </Row>
   
      </Container>
    </Container>
  );
}

export default Contact;