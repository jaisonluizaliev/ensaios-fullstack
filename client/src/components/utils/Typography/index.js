import styled from 'styled-components';

export const TextFirst = styled.h1`

  font-weight: ${(props) => props.theme.typography.weight.first};
  font-size: 1.3rem;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 1000px) {
    font-size: 1rem;
    @media (max-width: 600px) {
      font-size: 0.9rem;
    }
  }
`;
