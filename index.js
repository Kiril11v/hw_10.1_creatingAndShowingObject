


const user = { // object
    name: 'Anima',
    age: 23,
    phoneNumber: +480123456789,
    city: 'Warsaw',
    hobby: 'tennis',
    mail: 'blablakok@gmail.com',

showInfo() { // method(function) of object
    console.log(`My name is ${this.name}`);
    console.log(`I'm ${this.age} years old`);
    console.log(`I live in ${this.city}`);
    console.log(`My hobby is ${this.hobby}`);
    console.log(`My number is ${this.phoneNumber}`);
    console.log(`My email is ${this.mail}`);
  }
}

user.showInfo();


