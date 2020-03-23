import React from "react";
import './Game.css'
import Board from "../Board/Board";
import Parameters from "../Parameters/Parameters";
import History from "../History/History";
import {calculateWinner} from "../Calculator";
import {BotRandom} from "../Bot";

class Game extends React.Component {
    //Локальный стэйт для хранения данных.
    state = {
        show: false,
        history: [{
            squares: Array(25).fill('')
        }],
        sizeBoard: 5,
        disabledSubmit: false,
        stepNumber: 0,
        xIsNext: true,
        winner: '',
        // minToWin: 5,
    };

    jumpTo = (step) => {
        // Принимает номер шага в игре на который надо перейти и меняет значения
        // в this.state.stepNumber и this.state.xIsNext
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
            show: true,
            winner: '',
        });
    };

    changeSizeBoard = (size) => {
        // Изменяет размер поля от 5 до 20 - значение получает из компоненты Parameters.
        // Вносит в историю объект с массивов '' значений.
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
        // Выводит поле на экран.
        this.setState({
            show: true,
            disabledSubmit: true,
        });
    };

    resetBoard = () => {
        //Сброс состояния партии в игре.
        this.setState({
            show: false,
            disabledSubmit: false,
            sizeBoard: 5,
            stepNumber: 0,
            history: [{
                squares: Array(25).fill('')
            }],
            xIsNext: true,
        });
    };

    handleClick = (row, col, num) => {
        // Копируем в history массив с объектом созданный из текущего состояние this.state.history
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        // Работа с шагами в игре
        let locSquares = this.state.history[this.state.stepNumber].squares.slice();
        if (locSquares[num] === 'X' || locSquares[num] === 'O') {
            alert('Занято')
        } else {
            // В зависимости от того чей ход передаем для заполнения поля в массиве squares буквами X или O
            locSquares[num] = this.state.xIsNext ? 'X' : 'O';
            // Добавлем в this.state.history объект с массивом содержащим последнее состояние игрового поля
            // обновляем значение this.state.stepNumber прописывая номер текущего хода
            // передаем ход следующему игроку записывая в this.state.xIsNext - true или false
            this.setState({
                xIsNext: !this.state.xIsNext,
                history: history.concat({
                    squares: locSquares
                }),
                stepNumber: history.length,
            });
        }
        // Запуск проверки победителя
        let winner = calculateWinner(locSquares, this.state.sizeBoard, num);
        if (winner) {
            this.setState({
                show: false,
                winner: winner,
            })
        }
        //Запускает функцию клик бота
        setTimeout(() => {
            this.botClick(locSquares)
        }, 500)
    };

    botClick = (locSquares) => {
        //Принцип работы как у клика человеком
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        let newSquares = locSquares.slice();
        //Передаем последний Squares из history
        let num = BotRandom(locSquares);
        // В зависимости от того чей ход передаем для заполнения поля в массиве squares буквами X или O
        newSquares[num] = this.state.xIsNext ? 'X' : 'O';
        // Добавлем в this.state.history объект с массивом содержащим последнее состояние игрового поля
        // обновляем значение this.state.stepNumber прописывая номер текущего хода
        // передаем ход следующему игроку записывая в this.state.xIsNext - true или false
        this.setState({
            xIsNext: !this.state.xIsNext,
            history: history.concat({
                squares: newSquares
            }),
            stepNumber: history.length,
        });
        //Снова запускаем функции Winner
        let winner = calculateWinner(newSquares, this.state.sizeBoard, num);
        if (winner) {
            this.setState({
                show: false,
                winner: winner,
            })
        }
    };

    render() {
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
                    : <div className='Start'>Size and Submit!!!</div>
                }
                <History state={this.state} jumpTo={this.jumpTo} xIsNext={this.state.xIsNext}/>
            </div>
        );
    }
}

export default Game;