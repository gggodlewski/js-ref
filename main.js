import "./style.css";

let a = "string"; // string
const b = 123; // integer
const c = true; // boolean
const d = null; // null
const e = undefined; // undefined
const f = {}; // object
const g = []; // array
const h = () => {
  return;
}; // function

// const name = "string";
// console.log(name === a);

const user = {
  name: "John",
  age: 25,
  address: {
    addressLine: "12 Street",
    postCode: "LN5 9BE",
    city: "Lincoln",
  },
  preferences: {
    darkMode: true,
    cookies: ["cookies", "biscuits"],
  },
};

//Use spread operator to copy user properties and add a new property called createAt.
const userWithDate = {
  ...user,
  createdAt: "03/05/2023",
};

// console.log(userWithDate);

//Use deconstructure to remove property from object, duplicates properties of user object called userWithoutAddress
const { address, ...userWithoutAddress } = user;

//In user object get all values that are string and uppercase them.
const x = "age";
// console.log(user[x]);

//

const array = ["apple", "banana", 2, "lemon", "waterlemon", 8, "pineapple", "passion fruit"];

const array2 = ["apple", "tomato", "potato"];

// array.push("cos"); // adds element at end of array
// array.unshift("costam"); // adds element at the start of array
// array.shift(); //removes element from the start of array
// array.pop(); // removed element from the end of array
// array.splice(1, 0, "cos2"); // adds/removes element to modify array to add or remove element after certain index number

// array.splice(4, 0, "dupa");

// array.pop();
// array.shift();

// console.log(Array.from(new Set([...array, ...array2]))); // one liner for the below

const newArray = [...array, ...array2]; //merges both arrays

const newArrayWithoutDuplicates = new Set(newArray); //creates a new set from the newArray which removes duplicated values

const setArray = Array.from(newArrayWithoutDuplicates); //turns set into array

// console.log(setArray.includes("apple"));

// for (const item of array) {
//   if (typeof item === "string") {
//     console.log(item);
//   }
// }

const slowo = "stefan";

// console.log(slowo.split(""));

const capitalizeLetter = (word) => {
  const arrayFromWord = word.split("");
  const gowno = [arrayFromWord[0].toUpperCase(), ...arrayFromWord];
  gowno.splice(1, 1);
  return gowno.join("");
};

capitalizeLetter(slowo);

console.log(capitalizeLetter(slowo));
