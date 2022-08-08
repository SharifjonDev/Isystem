'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const searchBtn = document.querySelector('.search');

const p = 25;
//console.log('Test start');
setTimeout(function () {
  // anonymous function
  //console.log('TEST 1');
}, 3000);

setTimeout(function () {
  // anonymous function
  //console.log('TEST 2');
}, 2000);

//alert('Click me');

function nimadur() {
  //console.log('Funksiya');
}
nimadur();
//console.log('Test finish');

// "A" =>"." "a" => ","
// 0..,3526SDSDJMDBAShdjsh5455;[]
// Proyektni narxi qancha bo'ldi?

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    const html = `
    <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${Math.round(
              data.population / 1000000
            )} mln people</p>
            <p class="country__row"><span>🏛️</span>${data.capital[0]}</p>
            <p class="country__row"><span>🏢</span>${data.startOfWeek}</p>
          </div>
    </article>`;

    countriesContainer.insertAdjacentHTML('afterbegin', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('Kazakhstan');
getCountryData('USA');
getCountryData('UZBEKISTAN');

// CallBack Hell
/*setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);*/

const htmlForm = document.forms[0];

const submitBtn = document.getElementById('countryBtn');

const renderCountry = data => {
  const html = `
    <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${Math.round(
              data.population / 1000000
            )} mln people</p>
            <p class="country__row"><span>🏛️</span>${data.capital[0]}</p>
            <p class="country__row"><span>🏢</span>${data.startOfWeek}</p>
          </div>
    </article>`;

  countriesContainer.insertAdjacentHTML('afterbegin', html);
  //countriesContainer.innerHTML = html;
};

const renderError = data => {
  const html = `
    <article class="country">
          <div class="country__data">
            <h1 class="country__name">${data}</h1>
          </div>
    </article>`;

  countriesContainer.innerHTML = html;
};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (res) {
      if (!res.ok) {
        throw new Error(`Country not found (${res.status})`);
      }
      return res.json();
    })
    .then(function (data) {
      renderCountry(data[0]);
    })
    .catch(function (err) {
      renderError(err.message);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const countryName = htmlForm['country'].value;
  if (!countryName) return;
  getCountryData(countryName);
});

// Event Loop
/*console.log('Test start');
setTimeout(() => console.log('setTimeout callBack function'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.reject('Rejected promise 2').catch(err => console.log(err));
console.log('Test finish');*/

const getCountryDataFunc2 = async function (country) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);

    if (!res.ok) {
      throw new Error(`Country not found (${res.status})`);
    }

    const data = await res.json();
    s;
    renderCountry(data[0]);
  } catch (err) {
    renderError(err.message);
  }
  countriesContainer.style.opacity = 1;
};

// getCountryDataFunc2('Uzbekistan');
// getCountryDataFunc2('USA');
// getCountryDataFunc2('United Kingdom');

/*console.log('Start');
const res = await fetch(`https://restcountries.com/v3.1/name/Uzbekistan`);
const data = await res.json();
console.log(data);
console.log('Finish');*/
