import styled, { keyframes } from "styled-components";


const scale = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`

export const Background = styled.div`
    background-image: url(${(props) => props.$image});
    background-size: cover;
    background-position: center;
    height: 50vh;
    background-repeat: no-repeat;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
    }

`;

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    max-width: 1500px;
    margin-top: -330px;

`

export const Cover = styled.div`
    padding: 20px;
    display: flex;
    align-items: flex-start;
    height: 100%;
    z-index: 9;


    img {
        width: 450px;
        border-radius: 30px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        animation: ${scale} 0.5s linear;
    }
`

export const Info = styled.div`
    padding: 20px;
    width: 50%;
    z-index: 9;
    display: flex;
    flex-direction: column;     
    align-items: flex-start;

    h2 {
        font-size: 4rem;
        font-weight: 700;
        color: #ffffff;
    }

    p {
        font-size: 1.25rem;
        font-weight: 500;
        color: #ffffff;
        margin-top: 20px;
        margin-bottom: 30px;
    }
`

export const ContainerMovie = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 100%;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
    }

    h3 {
        font-size: 2rem;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 15px;
    }

    iframe {
        width: 100%;
        height: 500px;
        border: none;
        width: 100%;
    }
`



