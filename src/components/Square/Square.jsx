import React, {Component} from "react";
import './Square.css'

class Square extends Component {
    // Компонент Square
    // Функция возвращает клетку для рендера при клике по ней
    // передается событие в родительский компонент, при клике по клетке
    // благодаря props.status отображается X или O.
    // При клике callback передает координаты и номер клетки в родительский компонент.

    onClickSquare = () => {
        this.props.onClick(this.props.rowSquare, this.props.colSquare, this.props.numberSquare);
    };

    render() {
        return (
            <button className="square" onClick={this.onClickSquare}>
                {this.props.status}
            </button>
        );
    }
}

export default Square;