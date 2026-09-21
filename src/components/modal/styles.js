import styled from "styled-components";


export const BackGround = styled.div`
  height: 100vh;
  width: 100vw;

  z-index: 99999;

  background-color: rgba(0, 0, 0, 0.6);

  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    position: absolute;

    top: calc(50% - 300px);
    right: calc(50% - 450px);

    background: transparent;
    border: none;

    color: white;
    font-size: 40px;

    cursor: pointer;

    z-index: 1001;

    transition: 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Container = styled.div`
  position: relative;

  width: 70%;
  max-width: 900px;

  animation: modal 0.25s ease;

  @keyframes modal {
    from {
      opacity: 0;
      transform: scale(0.9);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
    border: none;
  }

  button {
    position: absolute;
    top: -55px;
    right: 0;

    background: transparent;
    border: none;

    color: white;
    font-size: 40px;

    cursor: pointer;

    transition: 0.2s;

    &:hover {
      transform: scale(1.15);
    }
  }

@media (max-width: 768px) {
    iframe {
        width: 95%;
        height: auto;
        aspect-ratio: 16 / 9;
    }
}
`



