/*
  forEach => callBackFunc

  callBackFunc 
  @elem [optional]
  @index [optional]
  @arr [optional]

  @returns nothing
*/

/*
  map => callBackFunc

  callBackFunc 
  @elem [optional]
  @index [optional]
  @arr [optional]

  @ returns a new array
    each element is the result of the callBackFunc
*/

let bridges = ['Brooklyn', 'Golden Gate', 'London'];

// function logUpperCase(elem) {
//   console.log(elem.toUpperCase());
// }
// function logUpperCase(bridge, i, arr) {
//   console.log(bridge.toUpperCase(), `at index ${i}`);
// }



// function logUpperCase(elem) {
//   console.log(elem.toUpperCase());
//   return elem.toUpperCase();
// }

// const forEachReturn = bridges.forEach(logUpperCase);
// console.log(forEachReturn);

// const mapReturn = bridges.map(logUpperCase);
// console.log(mapReturn);
// console.log(bridges);


// function ourForEach(arr, callBackFunc) {
//   for(let i = 0; i < arr.length; i++) {
//     callBackFunc(arr[i], i, arr);
//   }
//   return undefined;
// }

// function ourMap(arr, callBackFunc) {
//   const newArr = [];
//   for(let i = 0; i < arr.length; i++) {
//     const res = callBackFunc(arr[i], i, arr);
//     newArr.push(res);
//   }
//   return newArr;
// }


// ourForEach(bridges, logUpperCase);

const nums = [1, 2, 3, 4, 5];

// function squareNum(num){
//   return num *  num;
// }

const numsSquared = nums.map(function(num) {
  return num * num;
})

console.log(numsSquared);
console.log(nums);