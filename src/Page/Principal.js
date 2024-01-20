import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import StyledButton from "./components/StyledButton";
import StyledWhiteButton from "./components/StyledWhiteButton";
import ImageHeader from "./img/fondototal1.png";
import DecoImage from "./img/someImages.png";
import DecoImage1 from "./img/someImages-1.png";
import Photo from "./img/photo.png";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import MyCV from "./files/CV2022.pdf";
import MyPortfolio from "./files/Portfolio.pdf";
import WhiteCard from "./components/WhiteCard";
import PortfolioWhiteCard from "./components/PortfolioWhiteCard";
import PortfolioContent from "../Components/PortfolioContent.json";
import ContactImage from "./img/contact.png";
import LinkedinIcon from "./img/linkedin.png";
import InstagramIcon from "./img/instagram.png";
import GithubIcon from "./img/github.png";

const PrincipalContainer = styled.div`
  display: flex;
  width: 100vw;
  margin: 0;
`;

const HomeContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const PrincipalImage = styled.img`
  width: 100%;
  height: 90%;
  position: absolute;
  pointer-events: none;
`;
const CentralPhoto = styled.img`
  height: 300px;
`;

const ImagenFondoDeco = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80%;
  margin-bottom: 300px;
  background-image: url(${DecoImage});
  background-size: 100% 100%;
`;

const ImagenFondoDeco1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80%;
  margin-top: 300px;
  background-image: url(${DecoImage1});
  background-size: 100% 100%;
`;
const ImagenFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  margin-bottom: 0px;
  background-image: url(${ContactImage});
  background-size: 100% 100%;
`;

const Central = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;
const ServicesSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;
const PortfolioSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;

const Title = styled.span`
  text-align: center;
  margin-bottom: 40px;
  margin-top: 50px;
  color: var(--main-color);
  font-size: 45px;
  font-weight: 500;
  line-height: 1.2;
`;

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Send Email
  </Tooltip>
);
const renderTooltip1 = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Enter link
  </Tooltip>
);

const Principal = () => {
  return (
    <PrincipalContainer>
      <HomeContainer>
        <Header style={{ backgroundColor: "red" }}> </Header>
        <div
          className="h-100 w-100 m-0 overflow-auto p-0"
          style={{ position: "relative" }}
        >
          <PrincipalImage
            alt="Pink Background"
            src={ImageHeader}
          ></PrincipalImage>
          <Row
            id="home"
            className=" position-relative h-100 text-light align-items-center justify-content-center m-0 p-0"
          >
            <Col className="d-flex justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center align-items-sm-start justify-content-sm-center align-items-sm-center d-sm-none d-none d-md-block m-0 p-0">
              <CentralPhoto src={Photo} alt="Face Photo" />
            </Col>

            <Col className="d-flex flex-column align-items-center align-items-start justify-content-center align-items-sm-center align-items-lg-start align-items-md-start m-1 p-1">
              <h6>Hello I'm</h6>
              <h1>Yulieth Lubo</h1>
              <h5>Front-end Developer & Digital content creator</h5>

              <a href="#contact">
                <StyledWhiteButton Title="Contact me"></StyledWhiteButton>
              </a>
            </Col>
          </Row>
          <Row className="h-100 w-100 m-0 p-0">
            <Col lg={2} className="p-0">
              <ImagenFondoDeco1 />
            </Col>
            <Col lg={8} className="p-0">
              <Central>
                <aboutme
                  id="about"
                  className="d-flex justify-content-center flex-wrap"
                >
                  <Title>About me</Title>
                  <p class="mb-4 text-center">
•2 + years of experience, solid background in programming, creating fully responsive web applications. 

•Proficiency in React JS, HTML & CSS.

•Experience in creating mockups and prototypes to emulate users web experience.

•Excellent communication skills by being a teacher for 4+ years.

•An insatiable curiosity and lifelong learning.

•Working to become a full-time data scientist, passionate about database management and data analysis, with good SQL experience to extract and manage data.
 
 I'm ready to new challenges, looking for new opportunities.
                  </p>
                  //<a href={MyCV} download="CV_Yulieth_Lubo.pdf">
                  //  <StyledButton Title="Download CV"></StyledButton>
                  //</a><a style={{ marginLeft: "10px" }} href={MyPortfolio} download="Porfolio_Yulieth_Lubo.pdf">
                   // <StyledButton Title="Download Portfolio"></StyledButton>
                  //</a>
                </aboutme>
                <SkillsSection>
                  <Title>Skills</Title>
                  <skills
                    id="skills"
                    className="d-flex justify-content-center flex-wrap"
                  >
                    <StyledWhiteButton Title="SQL"></StyledWhiteButton>
                    <StyledWhiteButton Title="JavaScript"></StyledWhiteButton>
                    <StyledWhiteButton Title="ReactJS"></StyledWhiteButton>
                    <StyledWhiteButton Title="HTML & CSS"></StyledWhiteButton>
                    <StyledWhiteButton Title="Python"></StyledWhiteButton>
                    <StyledWhiteButton Title="VB.Net"></StyledWhiteButton>
                    <StyledWhiteButton Title="Git & Github"></StyledWhiteButton>
                    <StyledWhiteButton Title="Design thinking"></StyledWhiteButton>
                    <StyledWhiteButton Title="UI & UX"></StyledWhiteButton>
                    <StyledWhiteButton Title="Copywriting"></StyledWhiteButton>
                    <StyledWhiteButton Title="Strong analytical skills"></StyledWhiteButton>
                    <StyledWhiteButton Title="Teamwork"></StyledWhiteButton>
                    <StyledWhiteButton Title="Well-organized"></StyledWhiteButton>
                    <StyledWhiteButton Title="Honesty"></StyledWhiteButton>
                    <StyledWhiteButton Title="Accountability"></StyledWhiteButton>
                    <StyledWhiteButton Title="Spanish"></StyledWhiteButton>
                    <StyledWhiteButton Title="English"></StyledWhiteButton>
                    <StyledWhiteButton Title="Italian"></StyledWhiteButton>
                  </skills>
                </SkillsSection>
                <ServicesSection>
                  {/* <Title>Services</Title> */}
                  <services className="d-flex justify-content-center flex-wrap">
                    <WhiteCard
                      Title="Web Applications"
                      Description="Developing fully functional web
                    apllications with interactive elements
                    and API integrations."
                    ></WhiteCard>
                    <WhiteCard
                      Title="Responsive Web Design"
                      Description="These will show on 
                      different devices (smartphones, 
                      tablets, desktops, etc.)."
                    ></WhiteCard>
                    <WhiteCard
                      Title="Data Analysis"
                      Description="Inspecting, cleansing, transforming, and modelling data with the goal of discovering useful information and informing the conclusions."
                    ></WhiteCard>
                  </services>
                </ServicesSection>
                <PortfolioSection id="portfolio">
                  <Title>Portfolio</Title>
                  <ul class="nav nav-pills" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="all-tab"
                        data-toggle="tab"
                        href="#all"
                        role="tab"
                        aria-controls="all"
                        aria-selected="false"
                      >
                        All
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="development-tab"
                        data-toggle="tab"
                        href="#development"
                        role="tab"
                        aria-controls="development"
                        aria-selected="true"
                      >
                        Development
                      </a>
                    </li>
                    {/* <li class="nav-item">
                      <a
                        class="nav-link"
                        id="data-science-tab"
                        data-toggle="tab"
                        href="#data-science"
                        role="tab"
                        aria-controls="data-science"
                        aria-selected="false"
                      >
                        Data Science
                      </a>
                    </li> */}

                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="certifications-tab"
                        data-toggle="tab"
                        href="#certifications"
                        role="tab"
                        aria-controls="certifications"
                        aria-selected="false"
                      >
                        Certifications
                      </a>
                    </li>

                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="others-tab"
                        data-toggle="tab"
                        href="#others"
                        role="tab"
                        aria-controls="others"
                        aria-selected="false"
                      >
                        Others
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade"
                      id="all"
                      role="tabpanel"
                      aria-labelledby="all-tab"
                      style={{ minHeight: "300px" }}
                    >
                      <div className="d-flex justify-content-center align-items-center flex-wrap">
                        {PortfolioContent.map((project) =>
                          project ? (
                            <PortfolioWhiteCard
                              Title={project.Title}
                              Subtitle={project.Subtitle}
                              Description={project.Description}
                              Button="Details"
                              ProjectSlides={project.ImageSlides}
                              TechUsed={project.TechUsed}
                              ProjectURL={project.URL}
                              ProjectClient={project.Client}
                              ProjectDate={project.ProjectDate}
                              SubCategory={project.SubCategory}
                            >
                              {" "}
                            </PortfolioWhiteCard>
                          ) : (
                            <div
                              className="d-flex justify-content-center align-items-center"
                              style={{ minHeight: "300px" }}
                            >
                              No projects here
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div
                      class="tab-pane fade show active"
                      id="development"
                      role="tabpanel"
                      aria-labelledby="development-tab"
                      style={{ minHeight: "300px" }}
                    >
                      <div className="d-flex justify-content-center align-items-center flex-wrap">
                        {PortfolioContent.filter(
                          (project) => project.Category === "Development"
                        ).map((project) => (
                          <PortfolioWhiteCard
                            Title={project.Title}
                            Subtitle={project.Subtitle}
                            Description={project.Description}
                            Button="Details"
                            ProjectSlides={project.ImageSlides}
                            TechUsed={project.TechUsed}
                            ProjectURL={project.URL}
                            ProjectClient={project.Client}
                            ProjectDate={project.ProjectDate}
                            SubCategory={project.SubCategory}
                          ></PortfolioWhiteCard>
                        ))}
                      </div>
                    </div>

                    <div
                      class="tab-pane fade"
                      id="data-science"
                      role="tabpanel"
                      aria-labelledby="data-science-tab"
                      style={{ minHeight: "300px" }}
                    >
                      <div className="d-flex justify-content-center align-items-center flex-wrap">
                        {PortfolioContent.filter(
                          (project) => project.Category === "Data Science"
                        ).map((project) => (
                          <PortfolioWhiteCard
                            Title={project.Title}
                            Subtitle={project.Subtitle}
                            Description={project.Description}
                            Button="Details"
                            ProjectSlides={project.ImageSlides}
                            TechUsed={project.TechUsed}
                            ProjectURL={project.URL}
                            ProjectClient={project.Client}
                            ProjectDate={project.ProjectDate}
                            SubCategory={project.SubCategory}
                          ></PortfolioWhiteCard>
                        ))}
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="certifications"
                      role="tabpanel"
                      aria-labelledby="certifications-tab"
                      style={{ minHeight: "300px" }}
                    >
                      <div className="d-flex justify-content-center align-items-center flex-wrap">
                        {PortfolioContent.filter(
                          (project) => project.Category === "Certifications"
                        ).map((project) => (
                          <PortfolioWhiteCard
                            Title={project.Title}
                            Subtitle={project.Subtitle}
                            Description={project.Description}
                            Button="Details"
                            ProjectSlides={project.ImageSlides}
                            TechUsed={project.TechUsed}
                            ProjectURL={project.URL}
                            ProjectClient={project.Client}
                            ProjectDate={project.ProjectDate}
                            SubCategory={project.SubCategory}
                          ></PortfolioWhiteCard>
                        ))}
                      </div>
                    </div>

                    <div
                      class="tab-pane fade"
                      id="others"
                      role="tabpanel"
                      aria-labelledby="others-tab"
                      style={{ minHeight: "300px" }}
                    >
                      <div className="d-flex justify-content-center align-items-center flex-wrap">
                        {PortfolioContent.filter(
                          (project) => project.Category === "Others"
                        ).map((project) => (
                          <PortfolioWhiteCard
                            Title={project.Title}
                            Subtitle={project.Subtitle}
                            Description={project.Description}
                            Button="Details"
                            ProjectSlides={project.ImageSlides}
                            TechUsed={project.TechUsed}
                            ProjectURL={project.URL}
                            ProjectClient={project.Client}
                            ProjectDate={project.ProjectDate}
                            SubCategory={project.SubCategory}
                          ></PortfolioWhiteCard>
                        ))}
                      </div>
                    </div>
                  </div>
                </PortfolioSection>
              </Central>
            </Col>
            <Col lg="2" className="p-0">
              <ImagenFondoDeco />
            </Col>
            <Row
              className="w-100 d-flex m-0 p-0"
              style={{ height: "450px" }}
              id="contact"
            >
              <Col
                lg="4"
                className="d-flex align-items-end justify-content-center"
              >
                <Title>Contact me</Title>
              </Col>

              <Col lg="8" className="m-0 p-0">
                <ImagenFooter>
                  <div className="d-flex justify-content-evenly align-items-end h-100 w-100 mb-4 flex-wrap">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <a
                        className="h4 text-decoration-none m-0 p-0 text-white"
                        href="mailto: contact@yulieth.com"
                      >
                        contact@yulieth.com
                      </a>
                    </OverlayTrigger>
                    <div>
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip1}
                      >
                        <a
                          href="https://github.com/yuliethc"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={GithubIcon}
                            alt="Github link"
                            style={{ height: "50px" }}
                          />
                        </a>
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip1}
                      >
                        <a
                          href="https://www.linkedin.com/in/yulieth/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={LinkedinIcon}
                            alt="Linkedin link"
                            style={{ height: "50px" }}
                          />
                        </a>
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip1}
                      >
                        <a
                          href="https://www.instagram.com/forever.turista/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={InstagramIcon}
                            alt="Instagram link"
                            style={{ height: "50px" }}
                          />
                        </a>
                      </OverlayTrigger>
                    </div>
                  </div>
                </ImagenFooter>
              </Col>
            </Row>
          </Row>
        </div>
      </HomeContainer>
    </PrincipalContainer>
  );
};

export default Principal;
