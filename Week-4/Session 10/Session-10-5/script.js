// this keyword

class Person{
    constructor (name, age, gender, nationality){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }

    introduce(){
        return ("My name is " + this.name + ", I am " + this.age + " years old, I am " + this.gender + ", and I am " + this.nationality + ".");
    }
}

class Student extends Person{
   constructor(name, age, gender, nationality, subject){
    super(name, age, gender, nationality);
    this.subject = subject;
   }
   study(){
    return("I am studying " + this.subject + ".");
   }

}

const john = new Person("John", 25, "male", "American");
const jane = new Person("Jane" , 30 , "female", "Canadian");
const bob = new Person("Bob", 20, "male", "Australian");

console.log(john.introduce());
console.log(jane.introduce());
console.log(bob.introduce());

const sarah = new Student("Sarah", 18, "female", "British", "Computer Science");

console.log(sarah.introduce() + sarah.study());

