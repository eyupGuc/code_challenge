// const checkEmail = () => {
//   let z = x.trim().split("");

// };

// checkEmail(x);

// let x = "How-areyou-doing- today";
// const myArray = x.trim().split("-");
// console.log(myArray);
const x = "meydanguresi@gmail.com";

checkEmail = (x) => {
  let z = x.split("");
  //   console.log(z);

  let y = "abcdefghijklmnopqrstuvwxyz0123456789_+.@";
  for (let i = 0; i < z.length; i++) {
    if (y.search(z[i].toLowerCase()) === -1) {
      return alert("invalid email");
    }
  }
  //****mail @ ile başlamayacak ve birden fazla @ bulunmayacak */
  if (z[0] === "@") {
    z[0];
    console.log(z[0]);
    console.log(z.length);
    return alert(`invalid mail 2`);
  }
  let counter = 0;
  for (let i = 0; i < z.length; i++) {
    if (z[i] === "@") {
      counter++;
    }
    if (counter > 1) {
      return alert("invalid email 3");
    }
  }
  //** '.' den sonra en az iki karakter olmalıdır. */
  if (z.length - z.lastIndexOf(".") < 3) {
    return alert(`invalid email 4`);
  }

  //**En az bir adet '. '@' işaretinden sonra. */
  let counter2 = 0;
  for (let m = 0; m < z.slice(z.indexOf("@")).length; m++) {
    if (z.slice(z.indexOf("@"))[m] === ".") {
      counter2++;
    }
  }
  if (counter2 < 1) {
    return alert(`invalid email5`);
  }
  return alert(`The email you entered is valid`);
};
checkEmail(x);
