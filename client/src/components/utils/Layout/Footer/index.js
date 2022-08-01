import React from 'react'
import styled from 'styled-components'

export default function FooterComp() {
  return (
    <Footer>
      <p>
        Todos os Direitos Reservados <br />{' '}
        <strong>Congregação Cristã no Brasil</strong>
      </p>
    </Footer>
  );
}


const Footer = styled.footer`
  border-top: 5px solid #d0d2ea;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 15px;
    text-align: center;
    strong {
      font-size: 17px;
      font-weight: 500;
    }
  }
`;