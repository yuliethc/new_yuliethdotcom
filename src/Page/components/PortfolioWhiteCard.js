import React from "react";
import styled from "styled-components";
import "../css/Portfolio.css"

const WhiteCardTitle = styled.p`
  color: var(--main-color);
  font-weight: bold;
  font-size: x-large;
  text-align: center;
`;

const WhiteCardText = styled.p`
 color: var(--darkest-color);
  font-weight: italic;
  font-size: small;
  text-align: center;
  margin-top: 10px;
`;

const ModalButton = styled.button`
  background-color: var(--buttons-color);
  color: white;
  border: none;
  font-weight: bold;
  padding: 8px 40px 8px 40px;
  border-radius: 6px;
  border: 2px solid var(--buttons-color);
  opacity: 0;
  &:hover   {
    background-color: var(--buttons-color) !important;
    color: white !important;
    border: 2px solid #fff;
    box-shadow: 1px 8px 12px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    opacity: 1;
  }
  
  &:focus   {
    background-color: var(--buttons-color) !important;
    color: white !important;
    border: 2px solid #fff;
    box-shadow: 1px 8px 12px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    opacity: 1;
  }
`;

const WhiteCard = (props) => {
  return (
    <div className="WhiteCardStyled" onClick={props.onClick}>
      <WhiteCardTitle>{props.Title}</WhiteCardTitle>
      <WhiteCardText>{props.Description}</WhiteCardText>
      <ModalButton>{props.Button}</ModalButton>
    </div>
  );
};

export default WhiteCard;
