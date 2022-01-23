import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import StyledButton from "./components/StyledButton";
import ImageHeader from "./img/fondototal1.png";
import Photo from "./img/photo.png";
import { Col, Container, Row } from "react-bootstrap";

const PrincipalContainer = styled.div`
  display: flex;
  width: 100vw;
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
          <Row className="m-0 p-0 flex-md-wrap">second</Row>
        </div>
      </HomeContainer>
      {/* <StyledButton Title="Contact me"></StyledButton> */}
    </PrincipalContainer>
  );
};

export default Principal;
