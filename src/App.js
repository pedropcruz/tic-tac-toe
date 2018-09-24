import React, { Component } from 'react';
import Square from './components/square/square';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      squares: Array(9).fill(null),
      isNext: true,
    }
  }

  renderSquare = (val) => {
    return <Square size="90px" value={this.state.squares[val]} onClick={(e) => this.handleClick(e, val)}/>
  }

  handleClick = (e, val) => {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[val]) {
      return;
    }
    if(this.state.isNext){
      squares[val] = 'X';
      e.target.classList.toggle('X');
    }else{
      squares[val] = 'O';
      e.target.classList.toggle('O');
    }
    this.setState({
      squares,
      isNext: !this.state.isNext
    });
  }

  calculateWinner = (squares) =>{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  clearBoard = () =>{
    this.setState({ 
      squares: [],
      isNext: true
    });

    const Xvalues = document.querySelectorAll('.X');
    const Yvalues = document.querySelectorAll('.O');
    debugger;
    Array.prototype.slice.call(Xvalues).map((val, idx, arr)=> {
      arr[idx].classList.remove('X')
    })
    Array.prototype.slice.call(Yvalues).map((val, idx, arr)=> {
      arr[idx].classList.remove('O')
    })
  }

  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if(winner){
      status = `The Winner is ${(winner === 'X' ? "Player 1" : "Player 2")}.`;
    }else{
      status = `${this.state.isNext ? "Player 1" : "Player 2"} it's your turn.`;
    }
    return (
      <section>
        <h1>{status}</h1>
        <div className="row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        {(winner) ? <button onClick={this.clearBoard} >Clear</button> : null}
      </section>
    )
  }
}

export default App;
