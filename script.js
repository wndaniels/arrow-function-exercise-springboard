// function squareAndFindEvens(numbers) {
//   let squares = numbers.map(function (num) {
//     return num ** 2;
//   });
//   let evens = squares.filter(function (square) {
//     return square % 2 === 0;
//   });
//   return evens;
// }

const squareAndFindEvens = (numbers) =>
  numbers.map((num) => num ** 2).filter((squares) => squares % 2 === 0);
