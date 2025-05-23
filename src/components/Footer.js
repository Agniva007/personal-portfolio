import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/portfolio-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from "../assets/img/nav-icon5.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/agnivadas007/"><img src={navIcon1} /></a>
              <a href="https://www.facebook.com/agniva.das.90/"><img src={navIcon2} /></a>
              <a href="https://www.instagram.com/_bohemiiannn/"><img src={navIcon3} /></a>
              <a href="https://github.com/Agniva007"><img src={navIcon4} /></a>
              <a href="https://leetcode.com/Agniva007/"><img src={navIcon5} /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
