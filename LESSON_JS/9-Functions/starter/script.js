'use strict';

const now = 2022;
const birthYear = 1998;
function getInfo(firstName, score, age = now - birthYear) {
  //  console.log(firstName, score, age);
}
getInfo('Ozodbek', 86);

const footballPlayer = str => {
  // callback funksiya
  return str + ' professional futbolchi';
};

const boxer = str => {
  // callback funksiya
  return str + ' professional bokschi';
};

// High Order Function
const findPerson = (fullName, fn) => {
  console.log(fn(fullName));
  console.log(fn.name);
  console.log('----------');
};

//findPerson('Cristiano Ronaldo', footballPlayer);
//findPerson('Mike Tyson', boxer);

//btn.addEventListener('click', function () {});

function greeting(str1) {
  return function (str2) {
    //console.log(str1 + ' ' + str2);
  };
}

const greeting2 = greeting('Salom');
greeting2('Peter');

greeting('Salom')('Karim');

/*function sum(a) {
  return function (b) {
    console.log(a + b);
  };
}*/

const sum = a => b => a + b;
/*const sum = a => b => {
  console.log(a + b);
};*/

sum(5)(25);

// call metodi

const car1 = {
  model: 'BMW X7',
  year: 2020,
  showInfo(price, country = 'Germaniya') {
    console.log(
      `Bizning salonda ${this.model} ${this.year}-yilda ${country}da ishlab chiqarilgan rusumi mavjud va uni narxi ${price}$`
    );
  },
};

//car1.showInfo(100000, 'Avstriya');

const car2 = {
  model: 'Audi A5',
  year: 2021,
};

const showData = car1.showInfo;
//showData.call(car2, 120000, 'Polsha');
//showData.call(car2, 150000);
//console.log(car2);

// apply metodi
//showData.apply(car2, [130000, 'Italiya']);
//console.log(car2);

// bind metodi
const showDataForAudi = showData.bind(car2);
//showDataForAudi(125000, 'Vengriya');
//showDataForAudi(123000, 'Chexiya');
//console.log(car2);

const uzAirways = {
  model: 'Boeing 757',
  priceSimple: 300,
  line: 'Tashkent-Moscow',
  buyTicket(peopleNumber) {
    console.log(
      `${this.model} havo layneri ${this.line} yo'nalishida va bilet narxi ${
        this.priceSimple
      }$ va umumiy summa ${peopleNumber * this.priceSimple}$`
    );
  },
};

//uzAirways.buyTicket();

const btn = document.querySelector('.buy');
btn.addEventListener('click', uzAirways.buyTicket.bind(uzAirways, 10));

// Immediately Invoked Function Expressions (IIFE)
/*(function salomFunc() {
  console.log('Salom');
})();*/

/*(function () {
  console.log('Salom');
})();*/

//salomFunc(); // Bu ishlamidi chunki salomFunc faqat bir martta ishlidi

//(() => console.log('This will ALSO never run again'))();

/*{
  const firstName = 'Ali';
  console.log(firstName);
}*/
//console.log(firstName);

// Closures
const secureBooking = function () {
  let passengerCount = 0;
  console.log('hey');

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

//console.log(booker.prototype.prototype);

console.log(btn);

console.log('START TEST');
setTimeout(function () {
  console.log('Salom');
}, 3000);
console.log('FINISH TEST');

/*const interval = setInterval(function () {
  console.log('Salom');
}, 1000);

btn.addEventListener('click', function () {
  clearInterval(interval);
});*/
