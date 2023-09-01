//Protecting the Object

let person = {};

Object.defineProperty(person, "name", {
  value: "John",
  writable: false,
  enumerable: true,
});

Object.defineProperty(person, "email", {
  value: "john@abc.com",
  writable: false,
  enumerable: true,
});

Object.defineProperty(person, "age", {
  value: 32,
  writable: true,
  enumerable: false,
});

person.getAge = () => {
  return this.age;
};

person.setAge = (age) => {
  this.age = age;
};