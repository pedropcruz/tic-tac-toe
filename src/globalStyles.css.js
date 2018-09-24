import { injectGlobal } from 'styled-components';
import variables from './variables.css';

injectGlobal`
  html{
    margin: 0;
    padding: 0;
    width: 100%;
  }

  body{
    position: relative;
    margin: 0;
    padding: 0;
    height: 100vh;
    background: ${variables.colors.backgroundColor};
  }

  section{
    position:absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
    .row{
      display: flex;
      flex-direction: row;
      &:first-of-type{
        border-bottom: 1px solid ${variables.colors.borderColor};
      }
      &:last-of-type{
        border-top: 1px solid ${variables.colors.borderColor};
      }
    }
    h1{
      font:100 24px/22px 'Roboto';
      color: white;
      text-align:center;
    }
  }
`;