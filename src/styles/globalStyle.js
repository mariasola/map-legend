import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* -------- Typography ----------- */
  body *, input, h1, h2, h3, a, p {
    font-family: 'Open Sans', sans-serif;
  }

  @page {
    margin: 0cm;
  }

  body{
    background-color: #3A3A3A !important;
    font-size: 15px !important;
    .App {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
  }

`;


export default GlobalStyle;
