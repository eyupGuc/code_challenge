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

const str = String(prompt("please write something"));
// if(str.trim){
//     str.
// }
// console.log(typeof str);

var camalize = function camalize(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};
console.log(camalize(str));
