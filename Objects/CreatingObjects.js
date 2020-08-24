let userUsingConstructor = new Object();
let userUsingLiteral = {};

let user = {
  name: "Pooja",
  age: 24,
  "likes code": true,
};

console.log(user.name);
console.log(user["likes code"]);

/* how the objects properties can be deleted */
delete user.age;
alert(user.age);

/* how the objects properties can be referenced using user input */
let key = prompt("what do you want to know about the user?", "name");
alert(user[key]);

/* how the objects property name can be a user input */
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
  [fruit]: 5,
};
alert(bag.apple);
//is similar to
let bag1 = {};
bag1[fruit] = 5;
alert(bag1[fruit]);

/* short hand value */
function createUser(name, age) {
  return {
    name, //similar to name:name
    age: 24,
  };
}
let user1 = createUser("u1", 1);
alert(user1.name);

/* Check property name in the object */
alert("age" in user1);
let key1 = "age";
alert(key1 in user1);

/* Example for using for..in */
console.log("for..in :");
for (prop in user1) {
  console.log(prop + ":" + user1[prop]);
}

/* Properties are ordered if the key is integer */
console.log("sorted object properties");
let obj = {
  2: "Pune",
  1: "Mumbai",
  "3": "Bangalore",
};
for (x in obj) {
  console.log(x);
}
