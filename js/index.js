// Iteration 1: Names and Input
const hacker1 = "Andreu";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Miquela";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
const driversUpperCase = hacker1.toUpperCase();
let nameWithSpaces = "";
for (let i = 0; i < driversUpperCase.length; i++) {
  nameWithSpaces += driversUpperCase[i] + " ";
}
console.log(nameWithSpaces);

//variation with methods
//console.log(hacker1.split("").join(" ").toUpperCase());

let navigatorReverse = "";
const navigatorsLength = hacker2.length - 1;
for (let i = navigatorsLength; i >= 0; i--) {
  navigatorReverse += hacker2[i];
}
console.log(navigatorReverse);

//variation with methods
//console.log(hacker2.split("").reverse().join(""));

const hackersNames = [hacker1, hacker2].sort();
//console.log(hackersNames);
if (hackersNames[0] === hacker1) {
  console.log("The driver's name goes first.");
} else if (hackersNames[0] === hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hackersNames[0] === hackersNames[1]) {
  console.log("What?! You both have the same name?");
}
//variation with a function
// function lexicographicOrder(string1, string2) {
//   if (string1 < string2) {
//     console.log("The driver's name goes first.");
//   } else if (string1 > string2) {
//     console.log("Yo, the navigator goes first definitely.");
//   } else if (string1 === string2) {
//     console.log("What?! You both have the same name?");
//   }
// }
// lexicographicOrder(hacker1, hacker2);

//Bonus 1 (made in class)
const loremParagraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis, elit ut lacinia consequat, ligula nisl viverra nisl, vel euismod turpis felis et metus. Curabitur mollis tellus eros, sit amet viverra leo eleifend vitae. Duis ac porta ante. Suspendisse sit amet nisl nec felis tempor dignissim blandit tincidunt ipsum. Maecenas ultricies nisl ligula, quis sodales ligula molestie in. Vestibulum id mi id mauris congue scelerisque vel id dui. Donec porta ante leo, vel pharetra enim iaculis vitae. Proin sagittis erat eu odio fermentum, id volutpat risus mattis. Nullam venenatis eros at consectetur rhoncus. Fusce maximus mi sollicitudin malesuada molestie. Donec iaculis elit eleifend eleifend lobortis. Aliquam imperdiet tellus a mi sagittis pulvinar. Proin convallis sollicitudin nunc sit amet aliquam. Praesent dictum urna ut maximus imperdiet. Sed vel leo libero. Mauris eget facilisis dolor, sit amet eleifend dui.

In orci est, molestie pellentesque cursus at, vestibulum ut sem.Curabitur ultrices tellus ut libero ullamcorper interdum.Sed consectetur tellus massa, nec vehicula sapien porta at.Quisque imperdiet risus nec elit placerat lacinia.Phasellus scelerisque, sapien vitae sollicitudin aliquet, odio lorem sollicitudin eros, non vulputate eros erat a lacus.In scelerisque eu ex vel bibendum.Morbi eget purus aliquam, dictum risus et, molestie tortor.Donec porta, orci sed sollicitudin malesuada, ipsum ex accumsan urna, eu imperdiet arcu urna non magna.Donec ullamcorper condimentum eleifend.Proin vitae volutpat mauris.Pellentesque pharetra consectetur lorem sed convallis.Praesent vehicula elit ac ex interdum, sed egestas lorem euismod.

Vestibulum vel nulla in felis porttitor consequat.Nunc et lacus varius, porta ipsum feugiat, sollicitudin nulla.Pellentesque sed posuere erat.Cras tristique sit amet quam in maximus.Fusce fermentum ullamcorper orci, nec dignissim tortor fringilla id.Praesent tincidunt placerat est a aliquet.Vestibulum vestibulum neque ut elit dictum congue.Nulla facilisi.Suspendisse a velit elit.Phasellus ut venenatis ligula.Sed iaculis et diam vestibulum tincidunt.Suspendisse et nisl facilisis, sollicitudin tortor nec, faucibus nibh.`;

function amountWords(word) {
  return word.split(" ").length;
}
console.log(amountWords(loremParagraphs));

function amountOfEt(et) {
  return et.split(" et ").length;
}
console.log(amountOfEt(loremParagraphs));

//Bonus 2 (made alone)
const phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanedString = phraseToCheck.replace(/\W+/g, "").toLowerCase();
let reversedString = cleanedString.split("").reverse().join("");

cleanedString === reversedString
  ? console.log(`${phraseToCheck} it's a palindrome!`)
  : console.log(`${phraseToCheck} it's not a palindrome :(`);
