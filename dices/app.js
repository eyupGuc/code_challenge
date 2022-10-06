// let dices = [1, 2, 3, 4, 5, 6];
// const toDice = (n1, n2) => {};

// console.log(Math.floor(Math.random() * 7));
let arr = [];
let randomFon = (x) => {
  for (let i = 1; i <= x; i++) {
    arr.push(Math.floor(Math.random() * 7));
  }
  let arr2 = arr.sort((a, b) => a - b);
  let arr3 = [];
  for (i = 0; i < arr2.length; i++) {
    if (arr2[i] === 1) {
      arr3.push("one");
    }
    if (arr2[i] === 2) {
      arr3.push("two");
    }
    if (arr2[i] === 3) {
      arr3.push("three");
    }
    if (arr2[i] === 4) {
      arr3.push("four");
    }
    if (arr2[i] === 5) {
      arr3.push("five");
    }
    if (arr2[i] === 6) {
      arr3.push("six");
    }
  }
  return arr3.join("-");
};
console.log(randomFon(6));
