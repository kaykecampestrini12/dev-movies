import styled from "styled-components";


export const Container = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 3px;

img{
  border-radius: 30px;
  width: 300px;
  height: 100%;
}

h3{
  font-size: 1.2rem;
  margin-top: 15px;
}

 @media (max-width: 768px) {
    img {
      width: 180px;
      border-radius: 15px;
    }

    h3 {
      font-size: 0.95rem;
    }
  }
    
`