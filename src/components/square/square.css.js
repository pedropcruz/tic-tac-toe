import styled from 'styled-components';
import variables from '../../variables.css';

const SquareStyle = styled.div `
  position: relative;
  width: ${props => props.size};
  height: ${props => props.size};
  &:first-child{
    border-right: 1px solid ${variables.colors.borderColor};
  }
  &:last-child{
    border-left: 1px solid ${variables.colors.borderColor};
  }
  &:hover{
    cursor: pointer;
  }
  &.X{
    padding: 10px;
    width: calc(${props => props.size} - 20px);
    height: calc(${props => props.size} - 20px);
    &:before,
    &:after{
      content: " ";
      position:absolute;
      left: 45%;
      display:block;
      width: 8px;
      height: 70px;
      background: ${variables.colors.CrossColor};
    }
    &:before{
      transform:rotate(45deg);
    }
    &:after{
      transform:rotate(-45deg);
    }
  }
  &.O{
    padding: 10px;
    width: calc(${props => props.size} - 20px);
    height: calc(${props => props.size} - 20px);
    &:after{
      content: "";
      position:absolute;
      display: block;
      width: 52px;
      height: 52px;
      border-radius: 50%;
      border: 8px solid ${variables.colors.CircleColor};
    }
  }
`;

export default SquareStyle;