import styled from "styled-components";

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  margin: 0 auto;
  gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;


export const GridLayout = styled.div`
  display: grid;
  gap: 20px;

  grid-template-columns: 1fr 3fr;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;