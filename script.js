'use strict';
// Select all classes
const btnIncrease = document.querySelector('.increase');
const btnDecrease = document.querySelector('.decrease');
const btnReset = document.querySelector('.reset');

let counter = document.querySelector('.count');
let num = 0;

// Function to increase the counter
btnIncrease.addEventListener('click', function () {
  if (btnIncrease) {
    num++;
    counter.textContent = num;
    if (num === 0) counter.style.color = 'black';
    if (num > 0) counter.style.color = 'green';
  }
});

// Function to decrease the counter
btnDecrease.addEventListener('click', function () {
  if (btnDecrease) {
    num--;
    counter.textContent = num;
    if (num === 0) counter.style.color = 'black';
    if (num < 0) counter.style.color = 'red';
  }
});

// Function to reset the counter
btnReset.addEventListener('click', function () {
  if (btnReset) {
    num = 0;
    counter.textContent = num;
    if (num === 0) counter.style.color = 'black';
  }
});
