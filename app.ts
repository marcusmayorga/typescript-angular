export{};

class User {
  name: string = "(Missing Name)";
  state: string = "(Missing State)";
  age: number = 0;
  city: string = "(Missing City)";

  constructor(name?: string, state?: string, age?: number, city?: string){
    this.name = name == undefined ? this.name : name;
    this.state = state == undefined ? this.state : state;
    this.age = age == undefined ? this.age : age;
    this.city = city == undefined ? this.city : city;
    // console.log(`Just Created a new User named ${this.name}`);
    this.welcome();
  }
  private welcome () {
    console.log(`Welcome ${this.name} you are from ${this.city}, ${this.state} and you are ${this.age} years old.`);
  }
  
  signedOff () {
      console.log(`${this.name} who is ${this.age} years old from ${this.city}, ${this.state} just signed out`);
  }
}


let user1 = new User();
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