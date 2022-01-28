import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import LeadershipContent from "./LeadershipContent";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
       <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Machine Learning Researcher"
              subtitle="QuantCap | Weston, FL (remote)"
              date="December 2021 - present"
              content={["Predicted cryptocurrency prices by analyzing over 33 million transactions via linear and logistic regression, voting algorithms, and reinforcement learning", 
              "Built web scraper, data pipeline, and infrastructure for training, cross-validation, hyperparameter tuning, testing, and visualization with TensorFlow and Scikit-learn"]}
            />
            <Resumecontent
              title="Data Analyst Intern"
              subtitle="Montefiore Einstein Center for Cancer Care | New York City, NY"
              date="June 2021 - August 2021"
              content={["Analyzed over 1 million patient records for quality management and timelines of care in clinical pathways", 
              "Optimized timelines for cancer patient treatments", 
              "Identified sources of delay and solutions to improve communication between service and administrative teams"]}
            />
            <Resumecontent
              title="CS Lab Facilitator & Grader" 
              subtitle="Princeton University, Department of Computer Science"
              date="February 2021 - present"
              content={["Taught computer science lab sections of about 15 students", 
              "Graded & provided feedback on assignments and exams"]}
            />
            <Resumecontent
              title="Investment Team Intern" 
              subtitle="Deerpath Capital Management | New York City, NY"
              date="December 2020 - January 2021"
              content={["Participated in investment committee conferences to discuss debt financing deals", 
              "Worked with investment professionals to gain insight into strong investment models"]}
            />
            <Resumecontent
              title="Astrophysics Researcher" 
              subtitle="Summer Science Program | New Mexico Tech"
              date="June 2019 - July 2019"
              content={["Determined orbit of Asteroid 355256 (KN4) through telescope imaging, data extraction, and visualization using Python and astrophysics software", 
              "Integrated Monte Carlo simulations and differential correction to calculate orbit and predict next 50-million-year behavior with 99% confidence",
              "Published data with the Minor Planet Center"]}
            />
            <Resumecontent
              title="Physics Research Assistant" 
              subtitle="Sonoma State University, Department of Physics & Astronomy"
              date="June 2019 - September 2019"
              content={["Synthesized and determined optimization of ordered titania nanotubes via two-step anodic oxidation process", 
              "Operated scanning electron microscope with EDX analysis to image samples & analyze composition spectrum",
              "Presented research at the 2019 American Geophysical Union Fall Meeting"]}
            />

            
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Princeton University"
              date="2020 - present"
              content={["B.S.E. in Operations Research and Financial Engineering", 
                      "Certificates: Statistics/ML, Computer Science, and Optimization", 
                      "Relevant Coursework: Intro to Machine Learning (COS324), Intro to Programming Systems (COS217), Fundamentals of Queueing Theory (ORF407), Mathematics for Computing and Machine Learning (COS302), Optimization (ORF307), Probability and Stochastic Systems (ORF309), Statistics (ORF245)"]}
            />
            <Resumecontent
              title="Maria Carrillo High School"
              date="2016 - 2020"
              content={["Valedictorian: 4.96 (W) / 4.0 (UW) GPA", 
                      "Awards: National AP Scholar, National Merit Finalist, Science Department Award, Seal of Biliteracy, CSF Life Member", 
                      "Extracurriculars: Varsity Swim, Mathcounts Head Coach, Founder & President of Physics Club, Founder & President of STEM Club, Secretary of Math Club, Business Club Director of Education"]}
            />
            <Resumecontent
              title="Santa Rosa Junior College"
              date="2014 - 2020 (dual enrollment)"
              content={["GPA: 4.0", 
                      "Relevant Coursework: Multivariable Calculus, Discrete Math, Statistics, Algebra II, Trig & Pre-Calc"]}
            />

            <h3 className="resume-title">Leadership </h3>
            <LeadershipContent
              subtitle= "Julis-Rabinowitz Center for Public Policy & Finance | Undergraduate Associate"
              content={[]}
            />
            <LeadershipContent
              subtitle= "HackPrinceton | Operations Subteam"
              content={[]}
            />
            <LeadershipContent
              subtitle= "Princeton Envision | Finance Team"
              content={[]}
            />
            <LeadershipContent
              subtitle= "Princeton University Science Olympiad | Finance Committee"
              content={[]}
            />
            <LeadershipContent
              subtitle= "Princeton Engineering Council | Teaching Awards Chair"
              content={[]}
            />
            <LeadershipContent
              subtitle= "Manna Christian Fellowship | Care & Praise Team"
              content={[]}
            />
            <LeadershipContent
              subtitle= "Princeton University Club Swim | Treasurer"
              content={[]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
