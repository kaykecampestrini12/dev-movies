import styled from "styled-components";


export const Title = styled.h3`
    color: #ffffff;
    font-size: 28px;
    font-weight: 700;
`

export const Container = styled.div`
    display: flex;
    margin-top: 30px;
    gap: 10px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p {
        color: #ffffff;
        font-size: 16px;
        font-weight: 500;
    }

    img {
        height: 200px;
        border-radius: 10px;
    }
`
