/*
https://goo.gl/zFvFvx
https://goo.gl/t6AKRa

*/

function addWorld(string) {
  return string + ' world';
}

function callsWithHello(func) {
  return func('hello');
}

let result = callsWithHello(addWorld);
console.log(result);

function addWorld(string) {
  return string + ' world';
}


// // high order function
// function callsWithHello(func) {
  
//   let sentence = func('hello');
//   return sentence +  '!!!';
// }

// function addsEveryone(string) {
//   return string + ' everyone';  
// }

// let result1 = callsWithHello(addWorld);  
// // let result1 = addWorld('hello')
// // result1 = result1 + '!!!';
// let result2 = callsWithHello(addsEveryone);
// // let result2 = addsEveryone('hello')
// // result2 = result2 + '!!!';

// console.log(result1);
// console.log(result2);