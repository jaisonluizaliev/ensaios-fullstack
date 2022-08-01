import styled from 'styled-components';

export const Container = styled.div`
  margin: 25px auto 25px;
  
  background-color: #fff;
  width: 95%;
  border: 1px solid #ddd;
  -webkit-box-shadow: 1px 0px 23px 0px rgba(219, 210, 219, 1);
  -moz-box-shadow: 1px 0px 23px 0px rgba(219, 210, 219, 1);
  box-shadow: 1px 0px 23px 0px rgba(219, 210, 219, 1);
  @media (max-width: 600px) {
    width: 100%;
    box-shadow: none;
    border: none;
    padding: 3px;
    margin: 0;
  }
`;
