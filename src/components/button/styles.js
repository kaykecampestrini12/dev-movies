import styled, { css } from "styled-components";

const buttonStyles = css`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  background: transparent;
  color: #FFFFFF;
  padding: 10px 20px;
  border: 3 px solid #ffffff;
  border-radius: 30px;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color: #ff0000;
    transition: all 0.3s ease-in-out;
  }

  &:active {
    opacity: 0.8;
  }
`

export const ButtonWhite = styled.button`
    ${buttonStyles}
`

export const ButtonRed = styled.button`
    ${buttonStyles}

    background-color: #ff0000;
    border: 3px solid transparent;
    box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

    &:hover {
    box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
    background-color: #ff0000;
    color: #ffffff;
    }
`