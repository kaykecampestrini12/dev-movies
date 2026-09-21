import styled from "styled-components";


export const Title = styled.h3`
    color: #ffffff;
    font-size: 28px;
    font-weight: 700;

 @media (max-width: 768px) {
        font-size: 22px;
    }    
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

  @media (max-width: 768px) {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px 8px;
        margin-top: 20px;
        box-sizing: border-box;

        div {
            width: 100%;
        }

        p {
            font-size: 13px;
            margin: 5px 0 0;
        }

        img {
            width: 90px;
            height: 125px;
            object-fit: cover;
        }
    }
`
