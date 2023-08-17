import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/LogoRemI.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/twitter-svgrepo-com.svg";
import navIcon5 from "../assets/img/github-mark.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <a href="#home" className="footer-logo">
              <img src={logo} alt="Logo" title="Home" />
            </a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <br></br>
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/firas-kahlaoui-b0a031253/"
                target="blank"
              >
                <img src={navIcon1} alt="Icon" title="LinkedIn" />
              </a>
              <a
                href="https://www.facebook.com/firas.kahlaoui.566/"
                target="blank"
              >
                <img src={navIcon2} alt="Icon" title="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/firas_kahlaouii/"
                target="blank"
              >
                <img src={navIcon3} alt="Icon" title="Instagram" />
              </a>
              <a href="https://twitter.com/firas_kahlaoui" target="blank">
                <img src={navIcon4} alt="Icon" title="Twitter" />
              </a>
              <a href="https://github.com/FirasKahlaoui" target="blank">
                  <img src={navIcon5} alt="" title="GitHub" />
                </a>
            </div>
            <p></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
