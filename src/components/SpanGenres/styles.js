import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    margin-top: 30px;
    gap: 10px;

    span {
        padding: 8px 18px;
        border: 2px solid #ffffff;
        border-radius: 30px;
        font-size: 12px;
        font-weight: 600;
        background-color: rgba(255, 255, 255, 0.1);
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    @media (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 20px;

    span {
        padding: 6px 12px;
        font-size: 11px;
    }
}
`
