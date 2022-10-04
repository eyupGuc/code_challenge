//! problem statement

const studentArray = [
  "C1234-John Doe,London, Full-Stack",
  "C2345-Jane Doe,London, Data-Science",
  "C2346-Mary-Ann, Paris,AWS-Devops",
  "C2347 - Adam Smith, Texas, AWS-Devops",
  "C2444- Michael Great,Arizona, Full-Stack",
  "C2555-William Cash,Manchester, Data-Science",
  "C2455-Patrick Jane, Madrid,Full-Stack",
];

// const[Student Nr:,First Name: Last Name:,Location:,Program];

const s1 = studentArray[0];
const s2 = studentArray[1];
const s3 = studentArray[2];
const s4 = studentArray[3];
const s5 = studentArray[4];
const s6 = studentArray[5];
const s7 = studentArray[7];

// console.log(s1);
// const s1Obje={
// Student Nr:
// }

//! Camel Case

// var arr = [];
// for (var i = 0; i < 10; i++) {
//   arr.push(prompt("please write something"));
// }
// console.log(arr);

//  //!   Join()

// const elements = [];
// for (let i = 0; i < 3; i++) {
//   elements.push(prompt("Please write something"));
// }
// console.log(elements);

let ss1 = "Hello";
let ss2 = "World";
let ss3 = ss1.concat(" " + ss2);
console.log(ss3);
console.log(typeof ss3);

let str = "Hello";

function toCamelCase(str) {
  return str
    .split(" ")
    .map(function (word, index) {
      // If it is the first word make sure to lowercase all the chars.
      if (index == 0) {
        return word.toLowerCase();
      }
      // If it is not the first word only upper case the first char and lowercase the rest.
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}
