import * as styled from 'styled-components';

export default styled.createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  &::-webkit-scrollbar {
    display: block;
  }
  -ms-overflow-style: block;


  ::-webkit-scrollbar-thumb {
    background: rgb(126, 3, 3);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: red;
  }
  ::-webkit-scrollbar-track {
    /* background: rgba(0,0,0,.6); */
  }
  scrollbar-color: rgb(126, 3, 3) transparent; /* thumb and track color  firefox*/


  body, select, option{
    color: white;    
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
  }

  :root{
    --font-size-s: 0.8rem;
    --font-size-m: 1rem;
    --font-size-l: 2rem;

    --font-weight-m: 200;
    --font-weight-l: 400;

    --margin-s: 4px;
    --margin-m: 8px;
    --margin-l: 12px;
    --margin-logo: 30px;

  }

  .link {
    text-decoration: none;
    color: inherit;
  }

  
  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
  }

`;