import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import StyledButton from "./components/StyledButton";
import ImageHeader from "./img/fondototal1.png";
import DecoImage from "./img/someImages.png";
import DecoImage1 from "./img/someImages-1.png";
import Photo from "./img/photo.png";
import { Col, Container, Row } from "react-bootstrap";
import MyCV from "./files/CV2022.pdf";

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
  margin-bottom: 250px;
  background-image: url(${DecoImage});
  background-size: 100% 100%;
`;

const ImagenFondoDeco1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80%;
  margin: 0;
  background-image: url(${DecoImage1});
  background-size: 100% 100%;
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
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

const Principal = () => {
  return (
    <PrincipalContainer>
      <HomeContainer>
        <Header style={{ backgroundColor: "red" }}> </Header>
        <div
          className="h-100 w-100 m-0 p-0 overflow-auto"
          style={{ position: "relative" }}
        >
          <PrincipalImage src={ImageHeader}></PrincipalImage>
          <Row className="h-100 m-0 p-0 text-light align-items-center justify-content-center align-content-lg-center position-relative align-content-sm-start">
            <Col className="m-0 p-0 d-flex justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center align-items-sm-start justify-content-sm-center">
              <CentralPhoto src={Photo} alt="" />
            </Col>

            <Col className="m-0 p-0 d-flex flex-column align-items-start justify-content-center">
              <h6>Hello I'm</h6>
              <h1>Yulieth Lubo</h1>
              <h5>Software Developer & Entry-Level Data Scientist</h5>
              <StyledButton Title="Contact me"></StyledButton>
            </Col>
          </Row>
          <Row className="m-0 p-0 h-100 w-100">
            <Col lg={2} className="p-0">
              {/* <ImagenFondoDeco1 /> */}
            </Col>
            <Col lg={8} className="p-0">
              <AboutSection>
                <Title>About me</Title>
                <p class="text-center">
                  2 + years of experience, solid background in programming. An
                  insatiable curiosity and lifelong learning. Working to become
                  a full-time data scientist, passionate about database
                  management and data analysis, with good SQL experience to
                  extract and manage data. Demonstrated oral, written
                  communication and presentation skills by being a teacher for
                  4+ years.
                </p>

                <a href={MyCV} download="CV_Yulieth_Lubo.pdf">
                  <StyledButton Title="Download CV"></StyledButton>
                </a>
              </AboutSection>
            </Col>
            <Col lg={2} className="p-0">
              <ImagenFondoDeco />
            </Col>
          </Row>
        </div>
      </HomeContainer>
    </PrincipalContainer>
  );
};

export default Principal;
