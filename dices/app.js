// let dices = [1, 2, 3, 4, 5, 6];
// const toDice = (n1, n2) => {};

// console.log(Math.floor(Math.random() * 7));
let arr = [];
let randomFon = (x) => {
  for (let i = 1; i <= x; i++) {
    arr.push(Math.floor(Math.random() * 7));
  }
};
