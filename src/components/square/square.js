import  React from 'react';
import SquareStyle from './square.css';

const Square = (props) => {
    return (
      <React.Fragment>
        <SquareStyle size={props.size} onClick={(e) => props.onClick(e)}/>
      </React.Fragment>
    );
}

export default Square;