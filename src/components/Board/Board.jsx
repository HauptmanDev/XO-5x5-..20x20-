import React from "react";
import Square from "../Square/Square";

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                key={i}
                num={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        let rows = [];
        let squares = [];
        let size = this.props.valueXO;
        for (let j = 0; j < size; j++) {
            for (let i = j * size; i < j * size + size; i++) {
                squares.push(this.renderSquare(i));
            }
            rows.push(<div key={j} className="board-row">{squares}</div>);
            squares = [];
        }
        return (
            <div>
                {rows}
            </div>
        );
    }
}

export default Board;