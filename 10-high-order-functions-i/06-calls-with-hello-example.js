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