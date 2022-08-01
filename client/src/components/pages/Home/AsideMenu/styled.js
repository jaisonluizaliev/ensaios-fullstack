import styled from 'styled-components';

export const Aside = styled.aside`
  border: 1px solid #ccc;
  min-height: 30vh;
  min-width: 100%;
  border-radius: 18px 31px 67px 34px;
`;

export const MenuAside = styled.nav`
  padding: 15px;
`;

export const MenuAsideItem = styled.li`
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: ${({ theme }) => theme.typography.main.lg};

  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.typography.main.md};
    @media (max-width: 600px) {
      font-size: ${({ theme }) => theme.typography.main.sm};
    }
  }
`;
