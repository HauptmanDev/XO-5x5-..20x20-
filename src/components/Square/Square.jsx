import React from "react";
import './Square.css'
// Компонент Square
// ========================================
// Функция возвращает клетку для рендера при клике по ней
// передается событие в родительский компонент, при клике по клетке
// благодаря props.value отображается X или O
function Square(props) {
    return (
        <button className="square" onClick={() => props.onClick()}>
            {props.value}
        </button>
    );
}

export default Square;