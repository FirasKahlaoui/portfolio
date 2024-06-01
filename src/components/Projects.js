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
  const first_projects = [
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
  ];

  const second_projects = [
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

  const third_projects = [
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
                    Each project in my portfolio embodies a journey of exploring
                    cutting-edge technologies, collaborating with diverse teams,
                    and creatively overcoming challenges. From innovative
                    software solutions to groundbreaking engineering feats, my
                    work reflects a commitment to impactful technology and
                    design.
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
                          {first_projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {second_projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {third_projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
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
