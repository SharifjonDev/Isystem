"use strict";
/*const x = 255;
console.log(x);*/

// function showName() {
//   console.log("My name is Ozod.");
// }

// showName();
// showName();
// showName();

/*function calculate() {
  let month = 4;
  let lessonsCount = 12;
  let total = month * lessonsCount;
  console.log(`Umumiy ${total} ta dars mavjuda ${month} oyda`);
}*/

/*function calculate(month) {
  // return bolmasa void funksiya
  // month bu parametr
  let lessonsCount = 12;
  let total = month * lessonsCount;
  console.log(`Umumiy ${total} ta dars mavjuda ${month} oyda`);
}

calculate(5); // argument
calculate(6); // argument

const result = calculate(8);
console.log(result);*/

/*function currencyCalculate(dollarAmount) {
  // return qilib natija qaytargani uchun bu void bo'lmagan funksiya
  const totalCurrency = dollarAmount * 10800;
  return totalCurrency;
}

const salary = currencyCalculate(100);
console.log(salary);

const currencyCalculateTwo = function (dollarAmount) {
  const totalCurrency = dollarAmount * 10800;
  return totalCurrency;
};

console.log(currencyCalculateTwo(10));*/

/*const showCourseName = (courseName, progLanguage) => {
  // arrow function
  return `the most interesting course is: ${courseName}, ${progLanguage}`;
};

console.log(showCourseName("Frontend", "JavaScript"));

const calculate = () => {
  return 4 * 5;
};

console.log(calculate());

console.log(5 % 2);*/

/*const number = 8;

function evenOrOdd1(num) {
  let result = "";
  if (num % 2 === 0) {
    result = "Juft son";
  } else {
    result = "Toq son";
  }
  return result;
}

console.log(evenOrOdd1(number));

const evenOrOdd2 = function (num) {
  let result = "";
  if (num % 2 === 0) {
    result = "Juft son";
  } else {
    result = "Toq son";
  }
  return result;
};

console.log(evenOrOdd2(8));

const evenOrOdd3 = (number) => (number % 2 === 0 ? "Juft son" : "Toq son");

console.log(evenOrOdd3(9));*/

/*function showCourse(name) {
  let qaysiKursda = "";

  switch (name) {
    case "Abdulloh":
      qaysiKursda = `Abdulloh frontend o'quvchisi`;
      break;
    case "Sobir":
      qaysiKursda = "Sobir backend o'quvchisi";
      break;
    case "Samandar":
      qaysiKursda = "Samandar frontend o'quvchisi";
      break;
    default:
      qaysiKursda = "Bunaqa ismli talaba bizda yo'q.";
  }
  return qaysiKursda;
}

function infoStudent(name) {
  const info = showCourse(name);
  return `${info} va u a'lochi 🥸`;
}

const natija = infoStudent("Samandar");
console.log(natija);*/

/*const sum = (a, b) => a + b;
function sum(a, b) {
  return a + b;
}

console.log(sum(5, 2));*/

/*const calcAverage = (score1, score2, score3) => {
  //const average = (score1 + score2 + score3) / 3;
  return (score1 + score2 + score3) / 3; // average
};

const score1Dolphins = 85;
const score2Dolphins = 54;
const score3Dolphins = 41;

const avgDolphins = calcAverage(score1Dolphins, score2Dolphins, score3Dolphins);

const score1Koalas = 23;
const score2Koalas = 34;
const score3Koalas = 27;

const avgKoalas = calcAverage(score1Koalas, score2Koalas, score3Koalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log("Delfinlar g'alaba qozondi. 🏆");
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log("Koalalar g'alaba qozondi. 🏆");
  } else {
    console.log("G'olib aniqlanmadi :( ");
  }
}

checkWinner(avgDolphins, avgKoalas);*/

// Array (Massiv)

/*const frontEndRoom = [18, 18, 17, 25, 35];
console.log(frontEndRoom);

const names = ["Mustafo", "Sardor", "Baxtiyor", "Samandar"];
console.log(names);

const mass1 = 70;
const mass2 = 65;
const mass3 = 85;

const allMass = [mass1, mass2, mass3];
console.log(allMass);

const totalStudents = names.length;
console.log(totalStudents);
console.log(names[0]);

names[3] = "Abdusodiq"; // o'zgartirish
names[4] = "Samandar"; // qo'shish
names[6] = "Yaqubaliy";
console.log(names);*/

/*const year = 2022;
const isMarried = true;
const studentInfo = ["Peter", year - 1997, isMarried];
console.log(studentInfo);
console.log(studentInfo[0]);
console.log(studentInfo[1]);*/

/*const calculateAge = (birthYear) => {
  const year = 2022;
  return year - birthYear;
};

const birthYears = [2000, 1995, 1998, 2010];
console.log(birthYears);

const age1 = calculateAge(birthYears[0]);
const age2 = calculateAge(birthYears[1]);
const age3 = calculateAge(birthYears[2]);
const age4 = calculateAge(birthYears[3]);

const ages = [age1, age2, age3, age4];
const agesNew = [
  calculateAge(birthYears[0]),
  calculateAge(birthYears[1]),
  calculateAge(birthYears[2]),
  calculateAge(birthYears[3]),
];
console.log(agesNew);
console.log(ages);*/

/*const friends = ["Mustafo", "Peter", "Sardor"];
console.log(friends);
friends[3] = "Abdurauf";
console.log(friends);

//const lastIndex = friends.length;

friends[friends.length] = "Sharifjon";
friends[friends.length] = "Karim";
console.log(friends);

// Massivga elementlarni qo'shish
friends.push("Oybek"); // ohirgi indexga elementni qo'shish
console.log(friends);

friends.unshift("Fred"); // 0-indexga elementni qo'shish
console.log(friends);

// Massivdan elementlarni o'chirish
friends.pop();
console.log(friends); // ohirgi indexdagi elementni o'chirish

friends.shift();
console.log(friends); // 0-indexga elementni o'chirish

// const friends = ["Mustafo", "Peter", "Sardor"];

const friend = "Sardor";
const result = friends.includes(friend);
const resultIndex = friends.indexOf("Sardor");
console.log(result);
console.log(resultIndex);

if (result) {
  console.log(friend + " ismli do'stim bor.");
} else {
  console.log(friend + " ismli do'stim yo'q.");
}*/

/*const calcTip = (bill) => {
  const tempTip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tempTip;
};

const bills = [125, 555, 44];

const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[2]);

const tips = [tip1, tip2, tip3];

const total1 = bills[0] + tip1;
const total2 = bills[1] + tip2;
const total3 = bills[2] + tip3;

const total = [total1, total2, total3];

console.log(bills);
console.log(tips);
console.log(total);*/

/*const array = [1, 2, 3, 4, 5];

console.log(array);
array.splice(1, 1);

console.log(array); // 1-indeksdagi elementni o'chirib tashlandi'

array.splice(1, 0, 25); // 1-indeksga 25 elementi qo'shildi*/

// Object (Obyektlar)

/*const aboutMe = [
  "Ozodbek Oripjonov",
  "Software engineer",
  "Teacher",
  23,
  false,
  ["Peter", "Mustafo", "Asad"],
];*/

//console.log(aboutMe);

/*const aboutMeByObject = {
  firstName: "Ozodbek",
  lastName: "Oripjonov",
  job: "Software engineer",
  secondJob: "Teacher",
  age: 23,
  isMarried: false,
  friends: ["Peter", "Mustafo", "Asad"],
};*/

// . nuqta bilan ishlash

/*console.log(aboutMeByObject);
console.log(aboutMeByObject.fullName);
console.log(aboutMeByObject.age);
console.log(aboutMeByObject.friends);
console.log(aboutMeByObject.friends[2]);*/

// [] qavs bilan ishlash

/*console.log(aboutMeByObject["firstName"]);
console.log(aboutMeByObject["age"]);

const word = "Name";

console.log(aboutMeByObject["first" + word]);
console.log(aboutMeByObject["last" + word]);*/

/*const userData = prompt(
  "Men haqimda qaysi ma'lumotni bilmoqchisan: firstName, lastName, age, friends"
);

if (userData !== "") {
  console.log(aboutMeByObject[userData]);
}*/

/*const aboutMeByObject = {
  firstName: "Ozodbek",
  lastName: "Oripjonov",
  job: "Software engineer",
  secondJob: "Teacher",
  age: 23,
  birthYear: 1998,
  isMarried: false,
  friends: ["Peter", "Mustafo", "Asad"],

  calculateYears: function () {
    console.log(this);
    const totalYears = 2022 - this.birthYear;
    console.log(totalYears);
    return totalYears;
  },

  translate: function (word) {
    if (word === "Salom") {
      console.log("Annyong");
    } else {
      console.log("Bu so'zni tarjimasini bilmiman 😒");
    }
  },

  programmingLangCount: () => {
    console.log("3 ta dasturlash tilini bilaman: Java, JavaScript, Python");
  },
};

aboutMeByObject.location = "Tashkent";
aboutMeByObject["laptop"] = "ASUS";

aboutMeByObject.translate("Salom?");
aboutMeByObject.programmingLangCount();
aboutMeByObject.calculateYears();*/

/*const infoMark = {
  firstName: "Mark",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    return this.weight / this.height ** 2;
  },
};

const infoJohn = {
  firstName: "John",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    return this.weight / this.height ** 2;
  },
};

if (infoMark.calcBMI() > infoJohn.calcBMI()) {
  console.log(
    `Markning BMI (${infoMark.calcBMI()}) Jondan (${infoJohn.calcBMI()}) yuqori!`
  );
} else if (infoMark.calcBMI() < infoJohn.calcBMI()) {
  console.log(
    `Jonning BMI (${infoJohn.calcBMI()}) Markdan (${infoMark.calcBMI()}) yuqori!`
  );
} else {
  console.log("Ko'rsatgichlar teng!!!");
}*/

// for loop (takrorlanish-sikl)

/*console.log("sanoq 1");
console.log("sanoq 2");
console.log("sanoq 3");
console.log("sanoq 4");
console.log("sanoq 5");
console.log("sanoq 6");
console.log("sanoq 7");
console.log("sanoq 8");
console.log("sanoq 9");
console.log("sanoq 10");*/

/*for (let i = 1; i <= 10; i++) {
  console.log("sanoq " + i + ":o'suvchi");
}

for (let i = 10; i >= 1; i--) {
  console.log("sanoq " + i + ":kamayuvchi");
}*/

/*const students = ["Ali", "Vali", "Sobir", "Maruf", "Peter"];

for (let i = 0; i <= students.length - 1; i ++) {
  console.log(students[i], typeof students[i], i);
}

for (let i = 0; i <= students.length - 1; i += 2) {
  console.log(students[i], typeof students[i], i);
}

for (let i = 1; i <= students.length - 1; i += 2) {
  console.log(students[i], typeof students[i], i);
}*/

// break va continue
/*const numbers = [0, 1, 2, 3, 4, 5,6,7];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);

  if (numbers[i] <=5) break;
}*/

/*const names = ["Mustafo", "Ali", "Peter", "Mustafo", "Karim"];
let newArray = [];

/*for (let i = 0; i < names.length; i++) {
  if (names[i] === "Mustafo") {
    newArray.push(names[i]);
  }
}

console.log(newArray);*/

/*for (let i = 0; i < names.length; i++) {
  if (names[i] === "Mustafo") continue;
  console.log(names[i]);
}*/

/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] <= 2) {
    //console.log(numbers[i]);
  }
  console.log(numbers[i]);
}*/

/*console.log("Mashq 1");
console.log("Mashq 1, 1 martta bajarildi...");
console.log("Mashq 1, 2 martta bajarildi...");
console.log("Mashq 1, 3 martta bajarildi...");

console.log("Mashq 2");
console.log("Mashq 2, 1 martta bajarildi...");
console.log("Mashq 2, 2 martta bajarildi...");
console.log("Mashq 2, 3 martta bajarildi...");

console.log("Mashq 3");
console.log("Mashq 3, 1 martta bajarildi...");
console.log("Mashq 3, 2 martta bajarildi...");
console.log("Mashq 3, 3 martta bajarildi...");*/

/*for (let i = 1; i <= 3; i++) {
  console.log("Mashq " + i);

  for (let j = 1; j <= 4; j++) {
    console.log(`Mashq ${i}, ${j} martta bajarildi...`);
  }
}*/

/*for (let i = 1; i <= 5; i++) {
  //console.log(i);
}

let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}*/

/*let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(dice);
  dice = Math.trunc(Math.random() * 6) + 1;
  console.log("Yangilangan random qiymat: " + dice);
  if (dice === 6) console.log("Tamom");
}*/

/*let dice = Math.trunc(Math.random() * 10) + 1;

while (dice !== 5) {
  console.log(dice);
  dice = Math.trunc(Math.random() * 10) + 1;
  if (dice === 5) console.log("Tugadi..." + dice);
}*/

let num = 5;

do {
  console.log(num);
  num++;
} while (num < 5);

let num2 = 5;

while (num2 < 5) {
  console.log(num2);
  num2++;
}
