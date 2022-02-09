import React from "react";
import styled from "styled-components";
import "../css/Portfolio.css";
import PortfolioModal from "./PortfolioModal"

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
      <PortfolioModal
      ButtonText={props.Button}
      Title={props.Title}
      Description={props.Description}
      ProjectSlides={props.ProjectSlides}
      ></PortfolioModal>
    </div>
  );
};

export default WhiteCard;
