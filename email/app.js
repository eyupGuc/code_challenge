// const checkEmail = () => {
//   let z = x.trim().split("");

// };

// checkEmail(x);

// let x = "How-areyou-doing- today";
// const myArray = x.trim().split("-");
// console.log(myArray);
const x = "meydanguresi@@gmail.com";
checkEmail = (x) => {
  let z = x.split("");
  //   console.log(z);

  let y = "abcdefghijklmnopqrstuvwxyz0123456789_+.@";
  for (let i = 0; i < z.length; i++) {
    if (y.search(z[i].toLowerCase()) === -1) {
      return console.log("invalid email");
    }
  }
  if (z[0] === "@") {
    z[0];
    // console.log(z[0]);
    return console.log(`invalid mail 2`);
  }
  let counter = 0;
  for (let i = 0; i < z.length; i++) {
    if (z[i] === "@") {
      counter++;
    }
    if (counter > 1) {
      return console.log("invalid email 3");
    }
  }
};
checkEmail(x);
