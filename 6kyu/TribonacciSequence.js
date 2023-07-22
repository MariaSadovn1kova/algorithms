// https://www.codewars.com/kata/556deca17c58da83c00002db

let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "",
});
rl.prompt();
rl.on("line", (input) => {
  let nums = input.split(" ");
  let length = nums[3],
    result = [];
  result.push(Number(nums[0]), Number(nums[1]), Number(nums[2]));

  for (let i = 2; i < length - 1; i++) {
    result.push(result[i - 2] + result[i - 1] + result[i]);
  }
  console.log(result);

  rl.close();
});
