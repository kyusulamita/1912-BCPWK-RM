/*

  what if both functions take parameters?
  https://goo.gl/v6EHCW
  
*/

function getGreeter(name1) {
  return function(name2) {
    console.log('Hi ' + name1 + ', meet ' + name2);
  };
}

let introduceMarieTo = getGreeter('Marie');
let introduceRosalindTo = getGreeter('Rosalind');

introduceMarieTo('Dorothy');
introduceMarieTo('Albert');
introduceRosalindTo('Barbara');
introduceRosalindTo('Isaac');