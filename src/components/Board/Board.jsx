import React from "react";
import Square from "../Square/Square";

class Board extends React.Component {
    renderSquare() {
        let board = [];
        // let matrix = this.props.boardArr;
        for (let r = 0; r < this.props.rows; r++) {
            let row = [];
            for (let c = 0, number = r * this.props.rows; c < this.props.cols, number < r * this.props.rows + this.props.rows; c++, number++) {
                row.push(<Square
                    status={this.props.squares[number]}
                    rowSquare={r} colSquare={c} key={r + c}
                    numberSquare={number}
                    onClick={(row, col, num) => this.props.onClick(row, col, num)}/>);
                console.log(number)
            }
            board.push(<div className="row" key={"row" + r}>{row}</div>);
        }
        return <div className="board-row">{board}</div>
    };

    render() {
        return (
            <div>
                {this.renderSquare()}
            </div>
        );
    }
}

export default Board;