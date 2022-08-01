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
    background-image:url('https://f.vividscreen.info/soft/cdf60e61f85f0b6a08a504cd870a6dec/Music-Notes-1440x900.jpg');
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
  ul, li {
    list-style: none;
  }
`;
