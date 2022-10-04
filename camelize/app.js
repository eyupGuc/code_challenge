let camelCase = (text) => {
  let arr = [];
  if (text.split("-").length > 1) {
    for (let i = 0; i < text.split("-").length; i++) {
      arr.push(
        text.split("-")[i][0].toUpperCase() +
          text.split("-")[i].substring(1).toLowerCase()
      );
    }
  } else if (text.split(" ").length > 1) {
    for (let i = 0; i < text.split(" ").length; i++) {
      arr.push(
        text.split(" ")[i][0].toUpperCase() +
          text.split(" ")[i].substring(1).toLowerCase()
      );
    }
  }
  return arr.join("")[0].toLowerCase() + arr.join("").substring(1);
};

let text = prompt("please write something");
console.log(camelCase(text));
