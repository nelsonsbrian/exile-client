import * as styled from 'styled-components';

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    overflow: hidden;

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

  }
  body, select, option{
    color: white;    
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
  }
`;