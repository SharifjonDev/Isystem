'use strict';

/*const name = 'Jonas';

const first = () => {
  console.log('first');
  let a = 1;
  const b = second(7, 9);
  a = a + b;
  return a;
};

function second(x, y) {
  console.log('second');
  var c = 2;
  return c;
}

const x = first();

hjsdskd
skjdskfsdfd*/

// Global, Funksional va Blokli skoplar

var age1 = 24;
let age2 = 20;
const age3 = 19;

//console.log(age1, age2, age3);

function showAge() {
  const age4 = 18; // yoki let
}

//showAge();
//console.log(age4);

if (age1 >= 20) {
  const driverLicense = true; // yoki let
}

//console.log(driverLicense);

///// scope chain holati
/*const firstName = 'Tom';

function setInfo() {
  let age = 18;

  //console.log(driverLicense);

  if (age >= 18) {
    const driverLicense = true;
    var sample = 'Hey';
  }

  //console.log(sample);

  const showInfo = () => {
    const job = 'Student';

    console.log(`${firstName} is ${age} and he is a ${job}`);
  };
  showInfo();
}

setInfo();*/

// -------------Hoisting-----------

//console.log(info1);

var info1 = 'Salom';

//console.log(info2);
let info2 = 'Hey';

//console.log(info3);
const info3 = 'Salut';

//showMyScore();

function showMyScore() {
  console.log('100%');
}

//showMyAge();

const showMyAge = () => console.log('23 yosh');

//console.log(info);
var info = {
  showAge: function () {
    console.log(this);
  },
  age: 23,
};

//info.showAge();

/*ab = 23;
console.log(ab);*/

/*const userInfo = {
  age: 23,
  firstName: 'Ozod',
  showAge: function () {
    console.log('My age is ' + this.age);

    //const self = this;*/

/*function updateMyAge() {
      let updatedAge = self.age + 1;
      console.log(updatedAge);
    }*/

/*const updateMyAge = () => {
      console.log(this);
      let updatedAge = this.age + 1;
      console.log(updatedAge);
    };

    updateMyAge();
  },
};

userInfo.showAge();*/

/*const objDad = {
  name: 'Peter',
  child: {
    name: 'John',
    father: console.log(this),
  },
};

console.log(objDad);*/

/*let age = 30;
let oldAge = age;

age = 31;
console.log('age: ' + age);
console.log('odlAge: ' + oldAge);*/

// shallow copy

const me = {
  name: 'John',
  age: 24,
};

const friend = me;
friend.age = 25;

console.log('me ' + me.age + ',' + me.name);
console.log('friend ' + friend.age + ',' + friend.name);
