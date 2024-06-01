import html from "../assets/img/html-5-svgrepo-com.svg";
import css from "../assets/img/css-svgrepo-com.svg";
import js from "../assets/img/javascript-1.svg";
import react from "../assets/img/react-svgrepo-com.svg";
import mongoDB from "../assets/img/mongo-svgrepo-com.svg";
import node from "../assets/img/nodejs-1-logo-svgrepo-com.svg";
import mysql from "../assets/img/mysql-logo-svgrepo-com.svg";
import python from "../assets/img/icons8-python.svg";
import php from "../assets/img/icons8-php.svg";
import c from "../assets/img/icons8-c.svg";
import java from "../assets/img/icons8-java.svg";
import hadoop from "../assets/img/apache_hadoop-icon.svg";
import spark from "../assets/img/apache_spark-icon.svg";
import r from "../assets/img/r-project-icon.svg";
import git from "../assets/img/git-scm-icon.svg";
import docker from "../assets/img/docker-icon.svg";
import firebase from "../assets/img/firebase-icon.svg";
import bootstrap from "../assets/img/getbootstrap-icon.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Enthusiastic and motivated beginner developer eager to learn and
                grow,
                <br></br>
                with a passion for creating beautiful, responsive and user
                friendly websites.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={html} alt="HTML" />
                  <h5>HTML 5</h5>
                </div>
                <div className="item">
                  <img src={css} alt="CSS" />
                  <h5>CSS 3</h5>
                </div>
                <div className="item">
                  <img src={js} alt="JavaScript" />
                  <h5>Java Script</h5>
                </div>
                <div className="item">
                  <img src={react} alt="React" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Bootstrap" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={node} alt="Node" />
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <img src={mongoDB} alt="mongoDB" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="MySQL" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={php} alt="PHP" />
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={c} alt="C" />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <img src={java} alt="Java" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={hadoop} alt="Hadoop" />
                  <h5>Hadoop</h5>
                </div>
                <div className="item">
                  <img src={spark} alt="Spark" />
                  <h5>Spark</h5>
                </div>
                <div className="item">
                  <img src={r} alt="R" />
                  <h5>R</h5>
                </div>
                <div className="item">
                  <img src={git} alt="Git" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={docker} alt="Docker" />
                  <h5>Docker</h5>
                </div>
                <div className="item">
                  <img src={firebase} alt="Firebase" />
                  <h5>Firebase</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="colorSharp"
      />
    </section>
  );
};
