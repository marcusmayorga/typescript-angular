"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(name, state, age, city) {
        this.name = "(Missing Name)";
        this.state = "(Missing State)";
        this.age = 0;
        this.city = "(Missing City)";
        this.name = name == undefined ? this.name : name;
        this.state = state == undefined ? this.state : state;
        this.age = age == undefined ? this.age : age;
        this.city = city == undefined ? this.city : city;
        // console.log(`Just Created a new User named ${this.name}`);
        this.welcome();
    }
    User.prototype.welcome = function () {
        console.log("Welcome " + this.name + " you are from " + this.city + ", " + this.state + " and you are " + this.age + " years old.");
    };
    User.prototype.signedOff = function () {
        console.log(this.name + " who is " + this.age + " years old from " + this.city + ", " + this.state + " just signed out");
    };
    return User;
}());
var user1 = new User();
user1.age = 32;
user1.city = "New Haven";
user1.name = "Billy";
user1.state = "CT";
console.log(user1.name);
// let print = name => console.log(name);
// let double = number => number * 2;
// print("Joe");
// console.log(double(7));
// let user = {
//   name: "Joe",
//   state: "CT",
//   age: 31,
//   city: "New Haven"
// };
// interface UserData {
//   name: string;
//   state: string;
//   age: number;
//   city: string;
// }
// welcome(user);
// signedOff(user);
