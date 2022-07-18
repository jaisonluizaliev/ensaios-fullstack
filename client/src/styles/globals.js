import { createGlobalStyle } from 'styled-components';

/**pallete colors #033D60 #fff #text #010101 */

export const GlobalStyle = createGlobalStyle`
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Sans Extra Condensed', sans-serif;
  }
  html, body {
    font-size: 100%;
  background-color: #fafafa;

  }
  @media (min-width: 600px) {
    html, body {
    font-size: 100%;
    }
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  ul {
    list-style: none;
  }
`;
