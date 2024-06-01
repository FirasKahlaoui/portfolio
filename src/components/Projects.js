import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import coming_soon from "../assets/img/coming_soon.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import heart from "../assets/img/heart.png";
import grade from "../assets/img/Grade Calc.png";
import stock from "../assets/img/stock.jpg";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Grade Claculator",
      description: "React & HTML/CSS",
      imgUrl: grade,
      githubLink: "https://github.com/FirasKahlaoui/Moy_Calculator_ISAMM",
    },
    {
      title: "Heart Disease Prediction",
      description: "Python & Machine Learning",
      imgUrl: heart,
      githubLink: "https://github.com/FirasKahlaoui/Heart_Disease_Prediction",
    },
    {
      title: "Worth The Wait",
      description: "Scrapping & Data Analysis",
      imgUrl: stock,
      githubLink: "https://github.com/FirasKahlaoui/FirasKahlaoui",
    },
    {
      title: "Worth The Wait",
      description: "Design & Development",
      imgUrl: coming_soon,
      githubLink: "https://github.com/FirasKahlaoui/FirasKahlaoui",
    },
    {
      title: "Worth The Wait",
      description: "Design & Development",
      imgUrl: coming_soon,
      githubLink: "https://github.com/FirasKahlaoui/FirasKahlaoui",
    },
    {
      title: "Worth The Wait",
      description: "Design & Development",
      imgUrl: coming_soon,
      githubLink: "https://github.com/FirasKahlaoui/FirasKahlaoui",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Each project represents a unique journey, where I've
                    explored cutting-edge technologies, collaborated with
                    diverse teams, and unleashed my creativity to overcome
                    challenges. From software solutions that streamline
                    processes to engineering marvels that push the boundaries of
                    what's possible, my portfolio showcases my commitment to
                    making a meaningful impact through technology and design.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          While my portfolio may currently be in its early
                          stages, my passion and determination to make a
                          difference in the tech world are stronger than ever. I
                          am excited to be on the cusp of greatness and embrace
                          each step of this transformative journey. Instead of
                          being discouraged by the absence of projects, I view
                          it as an opportunity to explore new possibilities and
                          identify areas where I can truly make a unique impact
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          As an aspiring technologist, I am eager to embark on a
                          journey of innovation and creativity. While I may not
                          have a portfolio of projects just yet, my passion for
                          technology and design is unwavering. I see every
                          challenge as an opportunity to learn and grow, and I
                          am committed to making a meaningful impact through my
                          work.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
