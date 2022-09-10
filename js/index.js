// Iteration 1: Names and Input
const hacker1 = "Raquel";
// console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Judit";
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
const driversUpperCase = hacker1.toUpperCase();
let nameWithSpaces = "";
for (let i = 0; i < driversUpperCase.length; i++) {
  nameWithSpaces += driversUpperCase[i] + " ";
}
// console.log(nameWithSpaces);

let navigatorsReverse = "";
for (let i = hacker2.length; i > hacker2.length; i--) {
  navigatorsReverse += hacker2[i];
}

console.log(navigatorsReverse);
