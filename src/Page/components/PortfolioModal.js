import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Modal } from "react-bootstrap";
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
      <ModalButton onClick={handleShow}>
        {props.ButtonText}
      </ModalButton>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PortfolioModal;
