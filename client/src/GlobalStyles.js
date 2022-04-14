import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
      
        box-sizing: border-box;
    }
    body,html,#root { font-family: 'IBM Plex Sans KR', sans-serif; width: 100%}; 

`;

export default GlobalStyles;
