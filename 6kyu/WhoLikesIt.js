// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});
rl.prompt();
rl.on("line", (input) => {
  let input_arr = input;
  let arr = input_arr.split(" ");
  switch (arr.length) {
    case 0:
      console.log(`No one likes this`);
      break;
    case 1:
      console.log(`${arr[0]} likes this`);
      break;
    case 2:
      console.log(`${arr[0]} and ${arr[1]} like this`);
      break;
    case 3:
      console.log(`${arr[0]}, ${arr[1]} and ${arr[2]} like this`);
      break;
    default:
      console.log(
        `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`
      );
      break;
  }
  rl.close();
});
