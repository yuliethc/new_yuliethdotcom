import React from "react";
import styled from "styled-components";
import "../css/Portfolio.css";

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

const WhiteCard = (props) => {
  return (
    <div className="WhiteCardStyled" onClick={props.onClick}>
      <WhiteCardTitle>{props.Title}</WhiteCardTitle>
      <WhiteCardText>{props.Description}</WhiteCardText>
    </div>
  );
};

export default WhiteCard;
