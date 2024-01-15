import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SkySense from "../../Assets/Projects/SkySense.png";
import SecureSign from "../../Assets/Projects/SecureSign.png";
import portfolioui from "../../Assets/Projects/portfolioui.png";
import LookSense from "../../Assets/Projects/LookSense.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioui}
              isBlog={false}
              title="Portfolio"
              description="Embark on a visual journey through my captivating portfolio, a seamless fusion of React.js and Express.js magic. Explore a world of responsiveness and aesthetic allure, where every detail invites you to witness the essence of my skills and creativity. Welcome to a showcase that goes beyond the ordinary—welcome to my exceptional portfolio."
              ghLink="https://github.com/sudoshivesh/portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LookSense}
              isBlog={false}
              title="LookSense - A Facial Expression Recoginition"
              description="FacialSense utilizes deep convolutional neural networks to categorize expressions into seven emotions. Trained on the FER-2013 dataset from ICML, it comprises 35,887 48x48 grayscale images, capturing emotions like anger, disgust, fear, happiness, neutrality, sadness, and surprise."
              ghLink="https://github.com/sudoshivesh/LookSense"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SecureSign}
              isBlog={false}
              title="SecureSign - Java Based User Authentication System"
              description="Explore SecureSign: a robust Java-based user authentication system with JSP, Servlets, and SQL. Prioritizing security and seamless experiences, it offers a reliable foundation for building secure web applications with robust user management capabilities."
              ghLink="https://github.com/sudoshivesh/SecureSign"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SkySense}
              isBlog={false}
              title="SkySense - A Weather App using Java and OpenWeatherAPI"
              description="SkySense, a Java-based web app with JSP and Servlets, integrates OpenWeatherAPI for real-time updates on temperature, date, time, humidity, and wind speed. Its user-friendly design enhances weather awareness through intuitive location-based search features."
              ghLink="https://github.com/sudoshivesh/SkySense"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
