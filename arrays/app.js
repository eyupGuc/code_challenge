let arr = [];
for (let i = 0; i < 3; i++) {
  arr.push(prompt("Enter your ten number"));
}
let number = prompt("Enter your a number");

let requestArr = (arr, number) => {
  newArr = arr.sort((a, b) => a - b);
  return arr.length < number
    ? `enter smaller number`
    : `${newArr[number - 1]} is ${number}th smallest number`;
};

console.log(requestArr(arr, number));
