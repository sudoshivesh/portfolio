import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Visitor, I am <span className="purple">Shivesh Shivam </span>
            from <span className="purple"> Greater Noida, India.</span>
            <br />
            I am currently pursuing B.Tech(CSE) from NIET, Gr. Noida.
            <br />
            Final-year student wielding expertise in Java, Python, Web Development, and DBMS. 
            These skills, honed throughout my academic journey, embody my passion for technology as 
            I approach the professional threshold.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Workout, Gym, Travelling, Interacting with Stranger
            </li>
            <li className="about-activity">
              <ImPointRight /> Trying and Learning various technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Website & Tools to make my Work Easy
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Aspire to create meaningful impact through the things I build."{" "}
          </p>
          <footer className="blockquote-footer">Shivesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
