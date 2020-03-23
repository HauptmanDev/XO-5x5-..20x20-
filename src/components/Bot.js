export function BotRandom(Square) {
    let choiceNum = () => {
          let newSquares = [];
            Square.forEach((el, index) => {
                if (el === '') {
                    newSquares.push(index)
                }
            });
            let newIndex = Math.floor(Math.random() * (newSquares.length - 1));
            console.log(newSquares[newIndex]);
            return newSquares[newIndex];
    };
    return choiceNum()
}