/* 
 returning inner function
 https://goo.gl/XNwThJ
*/


/* ==========Example Start==========

function getGreeter() {
  // we can declare a new inner function and then return it
  function greetMe() {
    console.log('Hi!');
  }
  return greetMe;
}

let greeter = getGreeter();
console.log(greeter);
greeter();
====== Example End =========== */


/* 
 returning inner anonymous function
 https://goo.gl/zNYGVc
*/


/* ==========Example Start==========

function getGreeter() {
  // we can declare a new inner function and then return it
  return function () {
    console.log('Hi!');
  }
}

let greeter = getGreeter();
console.log(greeter);
greeter();

====== Example End =========== */


/* 
 What if returned function takes in a arg
 https://goo.gl/gC9P56
 https://goo.gl/i1CrUq
*/


/* ==========Example Start==========

function getGreeter() {
  // we can declare a new inner function and then return it
  return function (name = "Bob", age = 12) {
    console.log(`Hi ${name}! You are ${age}`);
  }
}

let greeter = getGreeter();
console.log(greeter);
greeter();
greeter("Sarah");
greeter("Sam", 30);

====== Example End =========== */