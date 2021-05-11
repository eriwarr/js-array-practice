// #1
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043




// # 2
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
var number=function(array){
  var output = [];
  var numbering = 0;
  for(i = 0; i < array.length; i++){
    numbering++;
    output.push(numbering.toString() + ': ' + array[i]);

  }
    return (output)
}
number(["a", "b", "c"]);


// # 3
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript
function arr(n){
  var output = [];
  for(i = 0; i < n; i++) {
    output.push(i);
  }
    return output;
}
arr(5);


// # 4
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript




// # 5
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks){
  var total = 0;
 for(i = 0; i < marks.length; i++){
   total = total + marks[i];
 }
  var avg = total/marks.length;
  return Math.floor(avg);
}
getAverage([1, 2, 3, 4]);
