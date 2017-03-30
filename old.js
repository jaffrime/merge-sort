var randomArray = Array.from({length: 16}, () => Math.floor(Math.random() * 20) + 1);

console.log("Random Array = ", randomArray);

var givenArray = [5,3,6,1,2,4,8,7];

// console.time("factorial test");

// NOTE: selection sort
// for (let i=0;i<a.length;i++){
//   let iMin = i;
//   for (let j=i+1;j<a.length;j++){
//     if (a[j]<a[iMin]){
//       iMin = j;
//     }
//   }
//   let temp = a[i];
//   a[i] = a[iMin];
//   a[iMin] = temp;
// }

// NOTE: bubble sort
// for (let i=0;i<a.length-1;i++){
//   for (let j=0;j<a.length-(i+1);j++){
//     if(a[j]>a[j+1]){
//       let temp = a[j];
//       a[j] = a[j+1];
//       a[j+1] = temp;
//     }
//   }
// }

// NOTE: merge sort

/*
let tempA = [];
let newA = [];
while (a.length>0){
  newA = a.slice(0,2);
  a.splice(0,2);
  console.log(newA, a);
  if(newA[0]>newA[1]){
    let temp = newA[0];
    newA[0] = newA[1];
    newA[1] = temp;
  }
}
*/

// TODO: need to update for non-even numbers
// var iterations = Math.log2(randomArray.length);

// for (let i=0;i<iterations;i++){
//   let temp1 = [];
//   let temp2 = [];
//   let newArray = [];
//   newArray.push(a.slice(0,a.length/2), a.slice(a.length/2));
//   // console.log(newArray); // working!
//   a = newArray;
// }



// NOTE: breaking down the array
const divide = function (array) {
  console.log(array);
  let arrA = [];
  let arrB = [];
  arrA = array.slice(0,array.length/2);
  arrB = array.slice(array.length/2);

  console.log(arrA);
  console.log(arrB);

  if (arrA.length>1) {
    // let newA = divide(arrA);
    arrA = divide(arrA);
    // let newB = divide(arrB);
    arrB = divide(arrB);
  } else {
    return [arrA,arrB];
  }

}


// NOTE: joining two arrays
const combine = function (a, b){
  let newArray = [];
  while ((a.length>0) || (b.length>0)) {
    console.log("a = " + a, "b = " + b);
    console.log("a[0] = " + a[0], "b[0] = " + b[0]);
    if (a[0] <= b[0] || b.length === 0) {
      newArray.push(a[0]);
      a.splice(0,1);
    } else {
      newArray.push(b[0]);
      b.splice(0,1);
    }
  }
  console.log(newArray);
}

const mergeSort = function(array){
  var iterations = Math.log2(array);

  var tempArray = divide(array);
  combine(tempArray);
}


// console.timeEnd("factorial test");

// console.log(randomArray);
