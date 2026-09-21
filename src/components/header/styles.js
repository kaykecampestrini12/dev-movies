import styled from "styled-components";

export const Container = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.$changeBackground
      ? "rgba(10, 15, 30, 0.85)"
      : "transparent"};
  transition: 0.8s;

  img {
    width: 25%;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;

    img {
      width: 35%;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const Li = styled.li`
  font-size: 1.45rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: "";
    height: 3px;
    width: ${(props) => (props.$isActive ? "100%" : 0)};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;


