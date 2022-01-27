import React from "react";
import styled from "styled-components";

const PrincipalButton = styled.button`
  background-color: var(--buttons-color);
  color: white;
  border: none;
  font-weight: bold;
  padding: 8px 40px 8px 40px;
  border-radius: 6px;
  border: 2px solid var(--buttons-color);
  &:hover,
  &:focus {
    background-color: #fff;
    color: var(--main-color);
    border: 2px solid #fff;
    box-shadow: 1px 8px 12px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

const StyledButton = (props) => {
  return (
    <PrincipalButton onClick={props.onClick}>{props.Title}</PrincipalButton>
  );
};

export default StyledButton;
