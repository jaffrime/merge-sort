
// NOTE: breaking down the array
const divide = function (array, runs) {
  // console.log(array);
  let arrA = [];
  let arrB = [];
  arrA = array.slice(0,array.length/2);
  arrB = array.slice(array.length/2);
  console.log(arrA,arrB);
  return [arrA,arrB];
}

// NOTE: joining two arrays
const combine = function (a, b){
  let newArray = [];
  while ((a.length>0) || (b.length>0)) {
    // console.log("a = " + a, "b = " + b);
    // console.log("a[0] = " + a[0], "b[0] = " + b[0]);
    if (a[0] <= b[0] || b.length === 0) {
      newArray.push(a[0]);
      a.splice(0,1);
    } else {
      newArray.push(b[0]);
      b.splice(0,1);
    }
  }
  // console.log(newArray);
  return newArray;
}

const mergeSort = function(array){
  var temp = divide(array);
  // console.log(temp[0],temp[1]);
  if (temp[0].length>1){
      temp[0] = mergeSort(temp[0]);
  }
  if (temp[1].length>1){
      temp[1] = mergeSort(temp[1]);
  }
  let newArray = combine(temp[0],temp[1]);
  return newArray;
}

console.log(mergeSort(randomArray));
