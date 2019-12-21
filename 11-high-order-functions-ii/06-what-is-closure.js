/* 

  closure is the fact that an inner function can STILL to access values defined in the outer function even after the outer function is finishedrunning! 

  https://goo.gl/G9tKtG

*/

function getGreeter() {
  console.log('getGreeter is running');

  let name = 'Marie'; 
  console.log('getGreeter is finishing');

  return function() {
    console.log('Hi', name);
  };

  // myFunc()
}

let greeter = getGreeter();

greeter();
greeter();
greeter();