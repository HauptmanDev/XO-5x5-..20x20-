export function calculateWinner(Square, size, num) {

    let createBoard = (Square, size) => {
        let newSquare = Square.map((el, index) => {
            let row = Math.floor(index / size);
            let col = index % size;
            let newElem = {
                row: row,
                col: col,
                value: el ? el : null
            };
            return newElem;
        });

        let newBoard = [];
        for (let j = 0; j < size; j++) {
            let arrRows = [];
            for (let i = 0; i < size; i++) {
                arrRows[i] = {row: null, col: null, value: ''}
            }
            newBoard[j] = arrRows;
        }
        newSquare.forEach((el) => {
            newBoard[el.row][el.col] = el
        });
        return newBoard;
    };

    let boardArr = createBoard(Square, size);


    let res = null;
    let cellX = Math.floor(num / size);
    let cellY = num % size;

    let newFig = getFig(cellX, cellY);
    if (!newFig) return false;

    res = res || checkLine(cellX, cellY, 1, 0); //Проверка по горизонтали
    res = res || checkLine(cellX, cellY, 0, 1); //Проверка по вертикали
    res = res || checkLine(cellX, cellY, 1, 1); //Проверка по диагонали 45
    res = res || checkLine(cellX, cellY, 1, -1); //Проверка по диагонали 135
    return res;

    function getFig(x, y) {
        if (x >= 0 && x < size) {
            if (y >= 0 && y < size) {
                return boardArr[x][y].value;
            }
            return 'b'
        } else {
            return 'b'
        }
    }

    function checkLine(x, y, dx, dy) {
        x = +x;
        y = +y;
        let score = 0;
        while (getFig(x - dx, y - dy) == newFig) {
            x -= dx;
            y -= dy;
        }
        while (getFig(x, y) == newFig) {
            x += dx;
            y += dy;
            score++;
        }
        if (score >= 5) {
            return true;
        }
        return false;
    }
}