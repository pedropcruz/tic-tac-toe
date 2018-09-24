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
    h1, button{
      font:100 24px/22px 'Roboto';
      color: white;
      text-align:center;
			margin: 20px 0;
		}
		button{
			background: transparent;
			outline:0;
			border: 0;
			width: 100%;
			&:focus{
				outline: 0;
			}
			&:hover{
				cursor: pointer;
				text-decoration: underline;
			}
		}
  }

	footer{
		position fixed;
		opacity: .4;
		bottom:0;
		padding: 20px 0;
		margin: 0 auto;
		display:block;
		text-align:center;
		width: 100%;
		color: white;
		font: 100 14px/10px 'Roboto';
		a{
			color: ${variables.colors.CircleColor};
			&:hover{
				opacity: 1;
			}
		}
	}
`;