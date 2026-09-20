import styled, {keyframes} from 'styled-components'

const scale = keyframes`
    from{
        transform: scale(0);
    }
    to{
        transform: scale(1);
    }
`

export const BackGround = styled.div`
    background-image: url(${(props) => props.$image});
    height: 100vh;
    background-position: center;
    background-size: cover;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

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
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%);  

    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-around;   
    align-items: center;
    height: 100%;
    max-width: 1200px; 
    position: relative;
    z-index: 2;
`

export const Info = styled.div`
    z-index: 2;
    padding: 20px;
    width: 50%;

    h1 {
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

    div {
        display: flex;
        gap: 20px;
        margin-top: 20px;
    }
`

export const Poster = styled.div`
    z-index: 2;

    img {
        width: 400px;
        border-radius: 30px;
        animation: ${scale} 0.5s linear;
    }
`