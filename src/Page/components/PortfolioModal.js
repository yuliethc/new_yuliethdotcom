import React, { useState } from "react";
import styled from "styled-components";
import { Button, Modal, Carousel } from "react-bootstrap";
import "../css/Portfolio.css";

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

          {/* <img src={require("../img/PortfolioImages/project1/first.png")} alt="" /> */}
          <Carousel>
            {props.ProjectSlides?.map((slide) =>
              slide ? (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={slide.image}
                    alt={slide.alt}
                  />
                </Carousel.Item>
              ) : (
                <div>No images here</div>
              )
            )}
          </Carousel>

          <p>{props.Description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PortfolioModal;
