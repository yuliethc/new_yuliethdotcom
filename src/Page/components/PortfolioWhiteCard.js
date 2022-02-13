import React from "react";
import styled from "styled-components";
import "../css/Portfolio.css";
import PortfolioModal from "./PortfolioModal";

const WhiteCardTitle = styled.p`
  color: var(--main-color);
  font-weight: bold;
  font-size: x-large;
  text-align: center;
  margin-bottom:0px;
`;
const WhiteCardSubTitle = styled.span`
  color: var(--main-color);
  font-size: small;
  text-align: center;
  margin: 0px;
  padding:0px;
`;

const WhiteCardText = styled.p`
  color: var(--darkest-color);
  font-weight: italic;
  font-size: small;
  text-align: center;
  margin-top: 10px;
`;

const PortfolioWhiteCard = (props) => {
  return (
    <div className="WhiteCardStyled" onClick={props.onClick}>
      <WhiteCardTitle>{props.Title}</WhiteCardTitle>
      <WhiteCardSubTitle>{props.Subtitle}</WhiteCardSubTitle>
      <WhiteCardText>{props.Description}</WhiteCardText>
      <PortfolioModal
        ButtonText={props.Button}
        Title={props.Title}
        Description={props.Description}
        ProjectSlides={props.ProjectSlides}
        TechUsed={props.TechUsed}
        ProjectURL={props.ProjectURL}
        ProjectClient={props.ProjectClient}
        ProjectDate={props.ProjectDate}
      ></PortfolioModal>
    </div>
  );
};

export default PortfolioWhiteCard;
