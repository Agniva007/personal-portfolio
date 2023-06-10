import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proj-img1.png";
import projImg2 from "../assets/img/proj-img2.png";
import projImg3 from "../assets/img/proj-img3.png";
import projImg4 from "../assets/img/proj-img4.png";
import tabImg1 from "../assets/img/tab3-1.jpg";
import tabImg2 from "../assets/img/tab3-2.jpg";
import tabImg3 from "../assets/img/tab3-3.jpg";
import tabImg4 from "../assets/img/tab3-4.jpg";
import tabImg5 from "../assets/img/tab3-5.jpg";
import tabImg6 from "../assets/img/tab3-6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Bloggers",
      description: "A Blogging Website",
      imgUrl: projImg1,
      gitUrl: "https://github.com/Agniva007/BLOG-WEBSITE/tree/modify",
    },
    {
      title: "Book-Buddy",
      description: "A Online Library",
      imgUrl: projImg2,
      gitUrl: "https://github.com/Agniva007/book-buddy",
    },
    {
      title: "Ghare-Baire",
      description: "A Hotel Booking Website",
      imgUrl: projImg3,
      gitUrl: "https://github.com/Agniva007/Ghare-Baire",
    },
    {
      title: "DaSocial",
      description: "A Social Media Website",
      imgUrl: projImg4,
      gitUrl: "https://github.com/Agniva007/Social-Media-App",
    },
  ];

  return (
    <section className="project" id="projects">
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
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
                        <h2>A Banking Application</h2>
                        <p>
                          A simple banking application using JAVA. It consists
                          of 4 fetaures. You can deposit also withdraw money and
                          you can check your total balance present in your bank
                          account and you can see the last transaction you have
                          made.
                        </p>
                        <br />
                        <h5 class="text-center">
                          <a href="https://github.com/Agniva007/BankingApplication">
                            Github Repo
                          </a>
                        </h5>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <h2>Digital Paintings</h2> <br></br>
                        <Row>
                          <Col size={12} sm={4}>
                            <div className="proj-imgbx">
                              <img src={tabImg1} />
                            </div>
                          </Col>
                          <Col size={12} sm={4}>
                            <div className="proj-imgbx">
                              <img src={tabImg2} />
                            </div>
                          </Col>
                          <Col size={12} sm={4}>
                            <div className="proj-imgbx">
                              <img src={tabImg5} />
                            </div>
                          </Col>
                          <Col size={12} sm={4}>
                            <div className="proj-imgbx">
                              <img src={tabImg4} />
                            </div>
                          </Col>
                          <Col size={12} sm={4}>
                            <div className="proj-imgbx">
                              <img src={tabImg3} />
                            </div>
                          </Col>
                          <Col size={12} sm={4}>
                            <div className="proj-imgbx">
                              <img src={tabImg6} />
                            </div>
                          </Col>
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
