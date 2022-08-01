import React from 'react';
import styled from 'styled-components';

export default function MainComp({ children }) {
  return <Main>{children}</Main>;
}

const Main = styled.main`
  padding: 25px;
  min-height: 70vh;
`;
