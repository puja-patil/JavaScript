let user = {
  name: "John",
};
let admin = {
  name: "Admin",
};

function sayHi() {
  alert(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();
admin["f"]();
