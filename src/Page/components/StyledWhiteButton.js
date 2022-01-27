import React from "react";
import styled from "styled-components";

const PrincipalButton = styled.button`
  background-color: #FFF;
  color: var(--main-color);
  font-weight: bold;
  font-size: smaller;
  border: none;
  padding: 8px 18px 8px 18px;
  border-radius: 6px;
  border: 2px solid #FFF;
  &:hover, &:focus {
    outline: none;
    background-color: var(--buttons-color);
    color: white;

  }
  box-shadow: 1px 8px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin:10px;
`;

const StyledButton = (props) => {
  return (
    <PrincipalButton onClick={props.onClick}>{props.Title}</PrincipalButton>
  );
};

export default StyledButton;
