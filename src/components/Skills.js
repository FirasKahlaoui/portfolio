import html from "../assets/img/html-5-svgrepo-com.svg";
import css from "../assets/img/css-svgrepo-com.svg";
import js from "../assets/img/js-svgrepo-com.svg";
import react from "../assets/img/react-svgrepo-com.svg";
import mongoDB from "../assets/img/mongo-svgrepo-com.svg";
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
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
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
                  <img src={html} alt="" />
                  <h5>HTML 5</h5>
                </div>
                <div className="item">
                  <img src={css} alt="" />
                  <h5>CSS 3</h5>
                </div>
                <div className="item">
                  <img src={js} alt="" />
                  <h5>Java Script</h5>
                </div>
                <div className="item">
                  <img src={react} alt="" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={mongoDB} alt="" />
                  <h5>MongoDB</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
