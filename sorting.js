const randomArray = Array.from({length: 512}, () => Math.floor(Math.random() * 1000) + 1);

// console.log("Random Array = ", randomArray);

var givenArray = [5,3,6,1,2,4,8,7];


// NOTE: selection sort
const selectionSort = function (a) {
  console.log("Given Array: ", a);
  console.time("factorial test");
  for (let i=0;i<a.length;i++){
    let iMin = i;
    for (let j=i+1;j<a.length;j++){
      if (a[j]<a[iMin]){
        iMin = j;
      }
    }
    let temp = a[i];
    a[i] = a[iMin];
    a[iMin] = temp;
  }
  console.log("<Selection Sort>");
  console.log("Sorted Array: ", a);
  console.timeEnd("factorial test");
}

// NOTE: bubble sort
const bubbleSort = function (a) {
  console.log("Given Array: ", a);
  console.time("factorial test");
  for (let i=0;i<a.length-1;i++){
    for (let j=0;j<a.length-(i+1);j++){
      if(a[j]>a[j+1]){
        let temp = a[j];
        a[j] = a[j+1];
        a[j+1] = temp;
      }
    }
  }
  console.log("<Bubble Sort>");
  console.log("Sorted Array: ", a);
  console.timeEnd("factorial test");
};

// NOTE: merge sort

// NOTE: breaking down the array
const divide = function (array, runs) {
  // console.log(array);
  let arrA = [];
  let arrB = [];
  arrA = array.slice(0,array.length/2);
  arrB = array.slice(array.length/2);

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
      temp[1] = mergeSort(temp[1]);
  }
  let newArray = combine(temp[0],temp[1]);
  return newArray;
}

let arr1 = randomArray.slice();
let arr2 = randomArray.slice();
let arr3 = randomArray.slice();
selectionSort(arr1);
bubbleSort(arr2);

console.log("Given Array: ", arr3);
console.time("factorial test");
let sortedArray = mergeSort(randomArray);
console.log("<Merge Sort>");
console.log("Sorted Array: ", sortedArray);
console.timeEnd("factorial test");
