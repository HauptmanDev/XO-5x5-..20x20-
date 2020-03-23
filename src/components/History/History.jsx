import React from "react";
import './History.css'
import {Button} from "antd";

class History extends React.Component {
    render() {
        // Записываем в переменную moves результат работы метода map(), который перебирая элементы в массиве history
        // позволяет сформировать список ходов, move представляет собой номер шага в игре
        const moves = this.props.state.history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <Button onClick={() => this.props.jumpTo(move)} size='small'
                            disabled={move%2}>{desc}</Button>
                </li>
            );
        });

        // Записываем в переменную status строку с информацией о текущем состоянии игры
        // Сообщаем кто сейчас играет или кто победил или ничья
        let status;
        let winner = this.props.state.winner;
        if (winner) {
            status = "Победитель: " + winner;
        } else if (this.props.state.stepNumber === this.props.state.sizeBoard ^ 2 && winner === null) {
            status = "Игровая Ничья";
        } else {
            status = "Сейчас играет: " + (this.props.state.xIsNext ? "X" : "O");
        }

        return (
            <div className="Game-info">
                <div className='status'><span>{status}</span></div>
                <ol>{moves}</ol>
            </div>
        );
    }
}

export default History;