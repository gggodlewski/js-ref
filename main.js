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
console.log(user[x]);

for (const prop in user) {
  const type = typeof user[prop];
  if (type === "string") {
    user[prop] = user[prop].toUpperCase();
  }
}
console.log(user);
