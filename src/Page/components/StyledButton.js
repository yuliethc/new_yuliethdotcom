import React from "react";
import styled from "styled-components";

const PrincipalButton = styled.button`
  background-color: var(--buttons-color);
  color: white;
  border: none;
  padding: 8px 40px 8px 40px;
  border-radius: 6px;
  border: 2px solid var(--buttons-color);
  &:hover, &:focus {
    outline: none;
    opacity: 0.9;
  }
`;

const StyledButton = (props) => {
  return (
    <PrincipalButton onClick={props.onClick}>{props.Title}</PrincipalButton>
  );
};

export default StyledButton;
