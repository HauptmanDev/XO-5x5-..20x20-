// export function calculateWinner(cellX,cellY) {
//     let res = null;
//     let newFig = getFig(cellX,cellY);
//     if( ! newFig ) return false;
//
//     res = res || checkLine( cellX, cellY, 1, 0 ); //horizontal
//     res = res || checkLine( cellX, cellY, 0, 1 ); //vertical
//     res = res || checkLine( cellX, cellY, 1, 1 ); //diagonal 45
//     res = res || checkLine( cellX, cellY, 1, -1 ); //diagonal 135
//
//     return res;
//
//     function getFig( x, y ){
//         return Model.Field[x] && Model.Field[x][y] ? Model.Field[x][y] : 'b';
//     }
//
//     function checkLine( x, y, dx, dy ){
//         x = +x;
//         y = +y;
//         let score = 0;
//         while( getFig( x - dx, y - dy ) == newFig ){
//             x -= dx;
//             y -= dy;
//         }
//         while( getFig( x, y ) == newFig ){
//             x += dx;
//             y += dy;
//             score++;
//         }
//         if( score >= 5 )
//             return true;
//         return false;
//     }
// }