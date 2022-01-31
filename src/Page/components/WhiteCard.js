import React from "react";
import styled from "styled-components";

const WhiteCardTitle = styled.p`
  color: var(--main-color);
  font-weight: bold;
  font-size: x-large;
  text-align: center;
  &:hover,
  &:focus{
    color: white !important;
  }
`;

const WhiteCardText = styled.p`
 color: var(--darkest-color);
  font-weight: italic;
  font-size: small;
  text-align: center;
  margin-top: 10px;
  
  &:hover,
  &:focus{
    color: white !important;
  }
`;

const WhiteCardStyled = styled.div`
  background-color: #fff;
  border: none;
  padding: 8px 18px 8px 18px;
  border-radius: 6px;
  border: 2px solid #fff;
  height: 200px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover,
  &:focus {
    outline: none;
    background-color: var(--buttons-color);
    color: white !important;
  }
  box-shadow: 1px 8px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin: 10px;
  
  &:hover,
  &:focus .p{
    color: white !important;
  }
`;

const WhiteCard = (props) => {
  return (
    <WhiteCardStyled onClick={props.onClick}>
      <WhiteCardTitle>{props.Title}</WhiteCardTitle>
      <WhiteCardText>{props.Description}</WhiteCardText>
    </WhiteCardStyled>
  );
};

export default WhiteCard;
