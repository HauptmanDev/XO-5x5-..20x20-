import React from "react";
import './Game.css'
import Board from "../Board/Board";
import {calculateWinner} from "../Calculator";
import Parameters from "../Parameters/Parameters";

class Game extends React.Component {
    state = {
        sizeBoard: 5,
        show: false,
        disabledSubmit: false,
        history: [{
            squares: Array(25).fill(null)
        }],
        stepNumber: 0,
        xIsNext: true,
        status: '',
        // minToWin: 3,
    };
    jumpTo = (step) => {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    };

    changeSizeBoard = (size) => {
        if (size >= 5 && size <= 20) {
            this.setState({
                sizeBoard: +size,
                history: [{
                    squares: Array(size ^ 2).fill('')
                }],
            });
        } else {
            alert('Stop')
        }
    };

    submitBoard = () => {
        this.setState({
            show: true,
            disabledSubmit: true,
        });
    };

    resetBoard = () => {
        this.setState({
            show: false,
            disabledSubmit: false,
            sizeBoard: 5,
            stepNumber: 0,
            history: [{
                squares: Array(25).fill('')
            }],
        });
    };

    handleClick = (row, col, num) => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        // const current = history[history.length - 1];
        // const squares = current.squares.slice();
        let locSquares = this.state.history[this.state.stepNumber].squares.slice();
        if (locSquares[num] === 'X' || locSquares[num] === 'O') {
            alert('Занято')
        } else {
            locSquares[num] = this.state.xIsNext ? 'X' : 'O';
            this.setState({
                xIsNext: !this.state.xIsNext,
                history: history.concat({
                    squares: locSquares
                }),
                stepNumber: history.length,
            });
        }
        if (calculateWinner(locSquares, this.state.sizeBoard, num)) {
            return
        }
    };

    render() {
        const moves = this.state.history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        return (
            <div className="Game">
                <Parameters sizeBoard={this.state.sizeBoard}
                            disabledSubmit={this.state.disabledSubmit}
                            changeSizeBoard={this.changeSizeBoard}
                            submitBoard={this.submitBoard}
                            resetBoard={this.resetBoard}/>
                {this.state.show ?
                    <Board rows={this.state.sizeBoard}
                           cols={this.state.sizeBoard}
                           squares={this.state.history[this.state.stepNumber].squares}
                           onClick={(row, col, num) => this.handleClick(row, col, num)}/>
                           : 'Size and Submit'
                }
                <div className="Game-info">
                    <div>{this.state.status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;