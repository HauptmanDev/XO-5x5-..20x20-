import React from "react";
import './Square.css'
// Компонент Square
// ========================================
// Функция возвращает клетку для рендера при клике по ней
// передается событие в родительский компонент, при клике по клетке
// благодаря props.value отображается X или O
function Square(props) {
    let onClickSquare = () => {
        props.onClick(props.rowSquare, props.colSquare, props.numberSquare);
    };
    return (
        <button className="square" onClick={onClickSquare}>
            {props.status}
        </button>
    );
}

export default Square;