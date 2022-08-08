//console.log('Hello World 😉');
/* String bu tekt ko'rinishidagi ma'lumotlar uchun
ishlatilinadigan termin. */

// typeofconsole.log(2 ** 3);

/*let name = 'Steve';
let firstName = 'Ozod'; //String
let lastName = 'Oripjonov';
let job1 = 'Software engineer';
let job2 = 'Teacher';
console.log(job1)
job1 = 'Medic';
const birthYear = 1998;
/* const birthYear = 2003; 🚫 qayta o'zgaruvchini
 e'lon qilish mumkin emas */
/*const PI = 3.14;
var position = 'Middle'; // ihtiyoriy joyda qiymatini o'zgartirish mumkin.

console.log(firstName, lastName, job1, job2, birthYear, position);*/

// Data types
// primitive data types
// String
/*let firstName = 'Bob and Peter 23';
firstName = "Mustafo";
firstName = "San'at";
let age = 23;
const totalInfo = `San'at ${age} yoshda`;
console.log(totalInfo);
console.log(firstName +' '+ age + ' yoshda');
// Number
const birthYear = 1998;
const userAge = 2021-1998;

console.log(userAge);
// Boolean
let isInteresting = true;
isInteresting = false;
// BigInt
let bigNumber = 100000000;
// undefined
let info;
console.log(info);
// Symbol
const user1 = Symbol('Ozodbek Oripjonov');
const user2 = Symbol('Ozodbek Oripjonov');
console.log(user1);
console.log(user2);
// null
const box = null;

// typeof bu qiymatni tipini aniqlab beradi.

console.log(typeof firstName);
console.log(typeof user1);
console.log(typeof isInteresting);*/

// Basic operators and Math operators
/*const now = 2021;
const userAge = now - 1998;
let a, b, c;
a = 33;
b = 9;
c = a % b; // * kopaytirish, / bolish, % qoldiqni topish
console.log('Foydalanuvchini yoshi ' + userAge);
console.log(c);

a = '33';
b = 3;
c = a % b; // NaN not a number;
console.log(c);

let x = 10;
x += 15;   // x = x + 15;
x -= 5; // x= x - 5;
x++; // x = x + 1;
x--; // x = x - 1;
x--;
x *=2; // x = x * 2;
++x;
console.log(x);*/
/*let y = 5;
let c;
c = ++y;
console.log(c);*/

/*let age = 1;
let birthYear = 2004;

console.log(age > 18); // true yoki false qaytaradi
console.log(age >= 18);
console.log(age <= 7);
console.log(2021 - birthYear >= 18);*/

// Coding challenge 1
// https://drive.google.com/file/d/1XoYyxKaw-lv7LjejW-iccvqzHFjBjKtI/view

/*const MarkHeight = 1.69;
const MarkMass = 78;
const JohnHeight = 1.95;
const JohnMass = 92;*/

/*const MarkHeight = 1.88;
const MarkMass = 95;
const JohnHeight = 1.76;
const JohnMass = 85;

const MarkBMI = MarkMass / (MarkHeight * MarkHeight);
const JohnBMI = JohnMass / (JohnHeight ** 2);

const markHigherBMI = MarkBMI > JohnBMI;

console.log(MarkBMI, JohnBMI, markHigherBMI);*/

/*const firstName = 'Mustafo';
const lastName = 'Yakubov';
const birthYear = 2003;
let now = 2021;
console.log(firstName + ' ' + lastName + ' ' + (now - birthYear) + ' yoshda');
console.log(`${firstName} ${lastName} ${now - birthYear} yoshda`);*/

/*const programmingLang = 'Python';
const birthYear = 1997;
let now = 2021;
console.log(`${programmingLang} yaratilganiga ${now- birthYear} yil bo'ldi.`);*/

/*let balance = 0;
if (balance > 0) {
    console.log('Calling... 📞');
} else if (balance == 0) {
    console.log("Do'stim hisobi xizmatidan foydalaning 😉")
} else {
    console.log("Iltimos, hisobingizni to'ldiring 😒");
}*/

/*const MarkHeight = 1.69;
const MarkMass = 78;
const JohnHeight = 1.95;
const JohnMass = 92;

const MarkBMI = MarkMass / (MarkHeight * MarkHeight);
const JohnBMI = JohnMass / (JohnHeight ** 2);

const markHigherBMI = MarkBMI > JohnBMI;

if (MarkBMI > JohnBMI) {
    console.log(`Markni ${MarkBMI} BMI si Jonnikidan ${JohnBMI} yuqori`);
} else if (JohnBMI > MarkBMI) {
    console.log(`Jonni ${JohnBMI} BMI si Marknikidan ${MarkBMI} yuqori`);
} else {
    console.log('Ikkalasida ham bir xil natija!');
}*/

// Household Task 1

/*const pythonMember1 = 7;
const pythonMember2 = 6;
const pythonMember3 = 8;
const pythonMember4 = 3;
const pythonMember5 = 4;
const pythonMember6 = 2;
const pythonMember7 = 1;
const pythonMember8 = 6;
const pythonMember9 = 5;
const pythonMember10 = 2;

const javaScriptMember1 = 7;
const javaScriptMember2 = 6;
const javaScriptMember3 = 8;
const javaScriptMember4 = 3;
const javaScriptMember5 = 4;
const javaScriptMember6 = 2;
const javaScriptMember7 = 1;
const javaScriptMember8 = 6;
const javaScriptMember9 = 5;
const javaScriptMember10 = 2;

const totalPython =
  (pythonMember1 +
    pythonMember2 +
    pythonMember3 +
    pythonMember4 +
    pythonMember5 +
    pythonMember6 +
    pythonMember7 +
    pythonMember8 +
    pythonMember9 +
    pythonMember10) /
  10;

const totalJavaScript =
  (javaScriptMember1 +
    javaScriptMember2 +
    javaScriptMember3 +
    javaScriptMember4 +
    javaScriptMember5 +
    javaScriptMember6 +
    javaScriptMember7 +
    javaScriptMember8 +
    javaScriptMember9 +
    javaScriptMember10) /
  10;

if (totalJavaScript >= 2 * totalPython) {
  console.log(
    `JavaScript jamoasi (${totalJavaScript}) Python jamoasidan (${totalPython}) ustun keldi! 🏆`
  );
} else if (totalPython >= 2 * totalJavaScript) {
  console.log(
    `Python jamoasi (${totalPython}) JavaScript jamoasidan (${totalJavaScript}) ustun keldi! 🏆`
  );
} else {
  console.log("G'olib jamoa aniqlanmadi 😒");
}*/

//const birthYear = Number(prompt("Tug'ilgan yilingizni kiriting."));
/*const birthYear = +prompt("Tug'ilgan yilingizni kiriting.");

const cash = 99;

//ichma ich if dan foydalanish 2 ta shart uchun

if (typeof cash == "number") {
  if (cash >= 100) {
    console.log("Konsertga kirish mumkin.");
  } else {
    console.log("Xatolik");
  }
} else {
  console.log("Xatolik");
}

if ((typeof cash == "number" && cash >= 100) || 2021 - birthYear >= 18) {
  console.log("Kirish mumkin!");
} else {
  console.log("Xatolik");
}

//console.log(typeof birthYear);
//console.log(2021 - birthYear);*/

/*const cash = 1;
if (cash) {
  console.log("Pulim bor 💵");
} else {
  console.log("Pulim yo'q 😒");
}

console.log(Boolean(0), 0);
console.log(Boolean(undefined), undefined);
console.log(Boolean(1), 1);
console.log(Boolean(""), "");
console.log(Boolean("Jek"), "Jek");
console.log(Boolean(NaN), NaN);*/

// const age = "18";
// if (age === 18) console.log("Adult!");
// == faqat qiymat uchun, === qiymat va ma'lumot tipi uchun

/*const isAdult = true;
const isGoodVision = true;

if (isAdult && isGoodVision) {
  console.log("Guvohnoma olishingiz mumkin 💳");
} else {
  console.log("Sizga hali bor :(");
}

const name = "Abdusodiq";

if (name != "Baxtiyor") {
  console.log("Kirish mumkin 🚪");
} else {
  console.log("Kirish mumkin emas 🤚");
}*/

const age = 19;
const gender = "female";

if (age >= 18 && gender != "female") {
  console.log("Kirish mumkin");
} else {
  console.log("Kirish mumkin emas!");
}
