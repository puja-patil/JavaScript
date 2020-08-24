let user = {
  name: "Pooja",
  age: 24,
};
let user2 = user;
user2.age = 25;
alert(user.age);

let user3 = {};
for (key in user3) {
  user3[key] = user[key];
}
user3.age = 27;
alert(user.age);

let user4 = {};
Object.assign(user4, user3);
alert(user4.age);
user4.name = "Patil";

let user5 = Object.assign({}, user4);
alert(user5.name);
