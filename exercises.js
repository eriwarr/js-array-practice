// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------


function myFunction(string, num1){
    var array = [];
    for(i = 0; i < num1; i++)
    array.push(string);
    return array;
}
myFunction('hey', 6);


// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

function reverseArray(array) {
  var output = []
  for(let i = array.length - 1; i >= 0; i--){
    output.push(array[i]);
    }
    return output;
}
reverseArray([1,2,3,4])

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

function removeFalsy(array){
    if(array.indexOf('') > -1){
    array.splice(array.indexOf(''), 1);
  } if (array.indexOf(0) > -1){
    array.splice(array.indexOf(0), 1);
  } if (array.indexOf(false) > -1){
    array.splice(array.indexOf(false), 1);
  } if (array.indexOf(null) > -1){
    array.splice(array.indexOf(null), 1);
  } if (array.indexOf(undefined) > -1){
    array.splice(array.indexOf(undefined), 1);
  }
    return array;
}
removeFalsy(['1', 1, 0, '', 'hey',]);


// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

function nestedArray(array) {
  var object = Object.fromEntries(array);
  return object;
}

nestedArray([['name', 'Charlie'], ['color', 'brown'], ['age', 10]]);

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------

function removeDuplicate(array){
  array = [...new Set(array)];
  return array;

}
removeDuplicate([1,2,3,4,5,4,3]);


// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------

function duplicateArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
//
    for(var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i])
        return false;
    }
    return true;

  }
}

duplicateArrays([1, 4, 3, 4], [0, 2, 3, 4])


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------









// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------

// function split(array, num1){
//   var array1 = array.toString().slice(0, num1);
//   console.log(array1);
//
// }
// split(([1, 2, 3, 4], 2));






// -----------------------------------------------
