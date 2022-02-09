import React, { useState } from "react";
import styled from "styled-components";
import { Button, Modal, Carousel } from "react-bootstrap";
import "../css/Portfolio.css";
import StyledWhiteButton from "../components/StyledWhiteButton";
import StyledButton from "../components/StyledButton";

const ModalButton = styled.button`
  background-color: var(--buttons-color);
  color: white;
  border: none;
  font-weight: bold;
  padding: 8px 40px 8px 40px;
  border-radius: 6px;
  border: 2px solid var(--buttons-color);
  opacity: 0;
  &:hover {
    background-color: var(--buttons-color) !important;
    color: white !important;
    border: 2px solid #fff;
    box-shadow: 1px 8px 12px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    opacity: 1;
  }

  &:focus {
    background-color: var(--buttons-color) !important;
    color: white !important;
    border: 2px solid #fff;
    box-shadow: 1px 8px 12px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    opacity: 1;
  }
`;
const Title = styled.span`
  text-align: center;
  margin-bottom: 40px;
  margin-top: 50px;
  color: var(--darkest-color);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
`;

const PortfolioModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <ModalButton
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onClick={handleShow}
      >
        {props.ButtonText}
      </ModalButton>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Project Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{props.Title}</h4>

          <Carousel variant="dark" className="mb-3 mt-3">
            {props.ProjectSlides?.map((slide) =>
              slide ? (
                <Carousel.Item>
                  <img
                    className="d-block"
                    style={{
                      maxHeight: "300px",
                      maxWidth: "600px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    src={slide.image}
                    alt={slide.alt}
                  />
                </Carousel.Item>
              ) : (
                <div>No images here</div>
              )
            )}
          </Carousel>
          <Title>Description</Title>
          <p>{props.Description}</p>

          <Title>Tech used</Title>
          <div className="d-flex justify-content-start align-items-start flex-wrap">
            {props.TechUsed?.map((tech) =>
              tech ? (
                <StyledWhiteButton Title={tech}></StyledWhiteButton>
              ) : (
                <div>No tech here</div>
              )
            )}
          </div>
          <div className="mb-3 d-flex align-items-center justify-content-end">
            <StyledButton Title="Visit Site"></StyledButton>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PortfolioModal;
