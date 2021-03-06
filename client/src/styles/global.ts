import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: 'PT Sans', sans-serif;
  }

  #root{
    margin:0 auto;
  }
`;