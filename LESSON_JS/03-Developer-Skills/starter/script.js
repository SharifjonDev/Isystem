"use strict";

//const info = "javascript";

/*function findMaxAndMin(array) { // Stackoverflow
  let max = Math.max.apply(null, arr);
  console.log(max);

  let min = Math.min.apply(null, arr);
  console.log(min);
}

findMaxAndMin(arr);*/

const arr = [12, 36, 1, false, 3, 25];

const findMaxAndMin = (arr) => {
  let min = arr[0]; // O(1)
  let max = arr[0]; // O(1)
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") continue;
    if (min > arr[i]) {
      // debugger;
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  } // O(N)

  /*for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  } // O(N)*/

  // Natija: O(N) time, O(1) space

  // O(N) =  O(N) + O(N) + O(N) + O(N) + O(N)

  console.log(min);
  console.log(max);
};

findMaxAndMin(arr);
