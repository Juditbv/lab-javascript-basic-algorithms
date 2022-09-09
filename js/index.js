// Iteration 1: Names and Input
const hacker1 = "Raquel";
// console.log(`The driver's name is ${hacker1}`);

// const hacker2 = "Raquel";
// console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
// if (hacker1.length > hacker2.length) {
//   console.log(
//     `The driver has the longest name, it has ${hacker1.length} characters.`
//   );
// } else if (hacker1.length < hacker2.length) {
//   console.log(
//     `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
//   );
// } else if (hacker1.length === hacker2.length) {
//   console.log(
//     `Wow, you both have equally long names, ${hacker1.length} characters!`
//   );
// }
// Iteration 3: Loops
const nameUpperCase = hacker1.toUpperCase().split(" ");
let nameWithSpaces = "";
for (let i = 0; i <= nameUpperCase.length; i++) {
  let letterSpace = nameUpperCase[i] + " ";
  nameWithSpaces += letterSpace;
}
console.log(nameWithSpaces);
