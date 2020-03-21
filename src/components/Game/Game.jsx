import React from "react";
import './Game.css'
import Board from "../Board/Board";

// import {calculateWinner} from "../Calculator";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sizeBoard: 5,
            show: false,
            boardArr: [],
            disabledSubmit: false,
            squares: Array(25).fill(''),
            // history: [{
            //     squares: Array(25).fill(null)
            // }],
            // stepNumber: 0,
            xIsNext: true,
            // minToWin: 3,
        };
    };

    changeSizeBoard(e) {
        if (e.currentTarget.value >= 5 && e.currentTarget.value <= 20) {
            this.setState({
                sizeBoard: +e.currentTarget.value,
                squares: Array(e.currentTarget.value ^ 2).fill(''),
            });
        } else {
            alert('Stop')
        }
        console.log(this.state.sizeBoard);
    };

    submitBoard() {
        let arr = [];
        for (let j = 0; j < this.state.sizeBoard; j++) {
            let arrRows = [];
            for (let i = 0; i < this.state.sizeBoard; i++) {
                arrRows[i] = ['', '', '']
            }
            arr[j] = arrRows;
        }
        this.setState({
            boardArr: arr,
            show: true,
            disabledSubmit: true,
        });
    }

    resetBoard() {
        this.setState({
            show: false,
            disabledSubmit: false,
        })
    };


    handleClick(row, col, num) {
        // const history = this.state.history.slice(0, this.state.stepNumber + 1);
        // const current = history[history.length - 1];
        // const squares = current.squares.slice();
        // if (calculateWinner(squares) || squares[i]) {
        //     return;
        // }
        let locSquares = this.state.squares;
        locSquares[num] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            boardArr: this.state.boardArr.map(el => {
                if (this.state.boardArr.indexOf(el) === row) {
                    return el[row][col] = num
                } else {
                    return el
                }
            }),
            xIsNext: !this.state.xIsNext,
            squares: locSquares,
            // squares: this.state.squares.map(el => {
            //     if (this.state.squares.indexOf(el) === num) {
            //         return this.state.xIsNext ? 'X' : 'O';
            //     } else {
            //         return ''
            //     }
            // }),
            // history: history.concat([{
            //     squares: squares
            // }]),
            // stepNumber: history.length,
            // xIsNext: !this.state.xIsNext,
        });
        console.log(this.state);
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    };


    render() {
        // const history = this.state.history;
        // const current = history[this.state.stepNumber];
        // const winner = calculateWinner(current.squares);
        // const moves = history.map((step, move) => {
        //     const desc = move ?
        //         'Go to move #' + move :
        //         'Go to game start';
        //     return (
        //         <li key={move}>
        //             <button onClick={() => this.jumpTo(move)}>{desc}</button>
        //         </li>
        //     );
        // });

        // let status;
        // if (winner) {
        //     status = 'Победитель: ' + winner;
        // } else {
        //     status = 'Следующий игрок: ' + (this.state.xIsNext ? 'X' : 'O');
        // }
        return (
            <div className="Game">
                <div className="Game-board-size">
                    <input type="number" style={{width: '55px'}} onChange={(e) => this.changeSizeBoard(e)}
                           value={this.state.sizeBoard}
                           disabled={this.state.disabledSubmit}/>
                    <button style={{width: '60px'}} onClick={() => this.submitBoard()}
                            disabled={this.state.disabledSubmit}>Submit
                    </button>
                    <button style={{width: '60px'}} onClick={() => this.resetBoard()}>Reset</button>
                </div>
                <div className="Game-board">
                    {this.state.show ? <Board rows={this.state.sizeBoard} cols={this.state.sizeBoard}
                                              boardArr={this.state.boardArr}
                                              squares={this.state.squares}
                                              onClick={(row, col, num) => this.handleClick(row, col, num)}
                    /> : 'Size and Submit'}
                </div>
                <div className="Game-info">
                    <div>{status}</div>
                    {/*<ol>{moves}</ol>*/}
                </div>
            </div>
        );
    }
}

export default Game;