'use strict';

//const names = ['Sherzod', 'Hasan', 'Samandar', "Ulug'bek"];

/*const name1 = names[0];
const name2 = names[1];
const name3 = names[2];*/

// Data Structures with Array
/*const [name1, name2, , name3] = names;
console.log(name1);
console.log(name2);
console.log(name3);*/

/*let numbers = [1, 2];

let [a, b] = numbers;
console.log('a: ' + a);
console.log('b: ' + b);

[a, b] = [b, a];

console.log('a: ' + a);
console.log('b: ' + b);*/

/*let temp = b;
b = a;
a = temp;
console.log('temp: ' + temp);
console.log('b: ' + b);
console.log('a: ' + a);*/

const info = {
  name: 'Karim',
  birthYear: 2000,
  /*calculateAge: function() {
    return 2022 - this.birthYear;
  },*/
  calculateAge(text) {
    return `${2022 - this.birthYear}${text}`;
  },
};

//console.log(info.calculateAge('ga yaqinda kirdi'));

/*const name = info.name;
const age = info.age;
const birthYear = info.birthYear;*/

const info2 = info; // Shallow copy
/*info2.name = 'Salim';

console.log(info);
console.log(info2);*/

/*const info3 = Object.assign({}, info);
//const info3 = Object.assign({ gender: 'Male' }, info); // Deep copy
info3.name = 'Salim';
info3.age = 20;
info3.birthYear = 2001;

console.log(info);
console.log(info3);*/

// Data Structures with Object
/*let { name, age, birthYear } = info;
name = 'Ali';
console.log(name, age, birthYear);*/

// The spread
/*const numbers = [1, 2, 3, 4, 5, 6, 7];

const [first, second, ...others] = numbers;*/
//console.log(first, second, others);

/*function calcSum(...numbers) {
  console.log(...numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
  //return a + b + c;
}

console.log(calcSum(1, 2, 3));
console.log(calcSum(1, 2, 3, 5, 6, 12));*/

/*const age = 19;
const visible = true;

if (age >= 18) console.log('Ruxsat');
age >= 18 && console.log('Ruxsat');

if (visible) console.log('Ruxsat');

if (age >= 18 || visible == "Sog'lom") {
  console.log('Ruxsat');
}

(age >= 18 || visible) && console.log('Ruxsat');*/

//const guests = 0;

//const resInfo = guests || 10 || 25;
//const resInfo = guests ?? 10; // 10 ishlidi qachonki guests ni datasi: null yoki undefined
//console.log(resInfo);

/*const data = {
  students: {
    //count: 200,
  },
  mentors: 10,
};*/

/*if (data.students && data.students.count) {
  console.log(data.students.count);
}*/

//console.log(data?.students?.count);

const numbers = [1, 2, 3, 4, 5, 6, 7];
const cars = ['BMW', 'AUDI', 'TOYOTA', 'FERRARI'];

/*for (const car of cars) { // indexi kere bomagan holat
  //console.log(idx, car);
}*/

for (const [idx, car] of cars.entries()) {
  //console.log(idx, car);
}

const carsInfo = [
  {
    country: 'Germany',
    brand: 'BMW',
  },
  {
    country: 'Germany',
    brand: 'AUDI',
  },
  {
    country: 'Japan',
    brand: 'TOYOTA',
  },
  {
    country: 'Italy',
    brand: 'FERRARI',
  },
];

for (const [i, value] of carsInfo.entries()) {
  // console.log(i, value);
}

const obj = {
  country: 'Germany',
  brand: 'BMW',
  revenue: '20 bln $',
};

// Obyektni kalitlarini olib beradi
for (const key of Object.keys(obj)) {
  //console.log(obj[key]);
}

// Obyektni qiymatlarini olib beradi
for (const value of Object.values(obj)) {
  //console.log(value);
}

// Obyektni keylari va qiymatlarini olib beradi
for (const [key, value] of Object.entries(obj)) {
  if (key === 'country' && value === 'Germany') {
    // console.log(key, value);
  }
}

//console.log(Object.entries(obj));

// Data structure
const numbers1 = [1, 1, 2, 3, 4, 3, 2, 5, 6];

const numbers2 = new Set(numbers1);
/*console.log(numbers2);
console.log(numbers2.size);
console.log(numbers2.has(5));
numbers2.add(7);
numbers2.delete(3);
//numbers2.clear(); Setni tozalab yuborish uchun
console.log(numbers2);*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1-shart
/*const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2-shart
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3-shart
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4-shart
let players1Final = [...players1, 'Tiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const addedPlayers = (...player) => {
  players1Final = [...players1Final, ...player];
  return players1Final;
};

console.log(
  addedPlayers('Jaloliddin Masharipov', 'Otabek Shukurov', 'Doston Hamdamov')
);

// 5-shart
const { team1, x: draw, team2 } = game.odds;
console.log(team1, team2, draw);

// 6-shart
const result =
  team1 > team2
    ? 'Borussiya yutish ehtimoli yuqori'
    : team1 < team2
    ? 'Bavariyani yutish ehtimoli yuqori'
    : 'Durang';

//console.log(result);

function whoWins(a, b, c) {
  const minValue = Math.min(a, b, c);
  let result = '';
  switch (minValue) {
    case team1:
      result = 'Bavariyani yutish ehtimoli yuqori';
      break;
    case team2:
      result = 'Borussiya yutish ehtimoli yuqori';
      break;
    default:
      result = 'Durrang';
  }
  return result;
}

console.log(whoWins(team1, team2, draw));*/

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
//console.log(question);

/*for (const [key, value] of question) {
  console.log(key, value);
}

question.set(4, 'Python');
console.log(question);
console.log(question.size);
console.log(question.get(3));
question.delete(1);
console.log(question);
//question.clear();*/

// slice
const animals = ['ant', 'bison', 'camel', 'duck', 'dog', 'elephant'];
//animals.push('dog'); // animals => new Array(animals) => new Array(animals).push('dog') => ['ant', 'bison', 'camel', 'duck', 'elephant']
const animals1 = animals.slice(2);
const animals2 = animals.slice(2, 4);
const animals3 = animals.slice(-2);
const animals4 = animals.slice(2, -1);

const title = 'JavaScript is very fast than Python';
//console.log(...title);
//console.log(title.slice(1, 5));

const elements = ['Computer Science', 'English', 'Maths'];

// join()
/*console.log(elements.join(', '));
console.log(elements.join(' '));
console.log(elements.join('-'));*/

// split()
const str = 'The quick brown-fox-jumps over the lazy dog.';
//console.log(str.split('-'));

// indexOf()
//console.log(elements.indexOf('Computer Science'));
