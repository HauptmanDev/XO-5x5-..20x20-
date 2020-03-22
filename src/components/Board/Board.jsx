import React from "react";
import './Board.css'
import Square from "../Square/Square";

class Board extends React.Component {
    // Компонент Board
    // В компоненте происходит сборка клеток в кострукцию
    // и передача данных от компонента Square в комопнент Game
    // Функция renderSquare() служит для формирования данных и событий для компонента Square,
    // а та же для размножения клеток и передачи их в главный компонент Game
    // number нумирует клетку
    // r задает координату по горизонтали
    // с задает координату по вертикали
    renderSquare = () => {
        let board = [];
        for (let r = 0; r < this.props.rows; r++) {
            let row = [];
            for (let c = 0, number = r * this.props.rows; c < this.props.cols, number < r * this.props.rows + this.props.rows; c++, number++) {
                row.push(
                    <Square
                        status={this.props.squares[number]}
                        rowSquare={r}
                        colSquare={c}
                        key={r + c}
                        numberSquare={number}
                        onClick={(row, col, num) => this.props.onClick(row, col, num)}/>);
            }
            board.push(<div className="row" key={"row" + r}>{row}</div>);
        }
        return <div className="board-row">{board}</div>
    };

    render() {
        return (
            <div className="Game-board">
                {this.renderSquare()}
            </div>
        );
    }
}

export default Board;