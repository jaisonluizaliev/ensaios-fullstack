import styled from 'styled-components';

export const TopNav = styled.header`
  width: 100%;
  min-height: 70px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  padding-left: 15px;
  font-weight: 500;
  border-bottom: 2px solid #d0d2ea;

  @media (max-width: 600px) {
    font-size: 1.1rem;
    border-bottom: 1px solid #d0d2ea;
  }
`;
