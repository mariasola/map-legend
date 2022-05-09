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
    background-color: #FFFFFF !important;
    font-size: 15px !important;
    /* -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: auto !important;
    [class^="ant-"],
    label {
      color: black;
      font-size: 15px;
      line-height: 25px;
    } */
  }

`;


export default GlobalStyle;
