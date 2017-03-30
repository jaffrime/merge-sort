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
var iterations = Math.log2(a.length);

// for (let i=0;i<iterations;i++){
//   let temp1 = [];
//   let temp2 = [];
//   let newArray = [];
//   newArray.push(a.slice(0,a.length/2), a.slice(a.length/2));
//   // console.log(newArray); // working!
//   a = newArray;
// }

// NOTE: breaking down the array
const division = function (array) {
  let arrA = [];
  let arrB = [];
  arrA.push(array.slice(0,array.length/2));
  arrB.push(array.slice(array.length/2));

  if (arrA.length>1) {
    let newA = division(arrA);

    let newB = division(arrB);
  }

  if (arrA[0]>arrA[1]){

  }

}


// NOTE: joining two arrays
const combine = function (a, b){
  let newArray = [];
  while ((arrA.length>0) || (arrB.length>0)) {
    if (arrA[0] >= arrB[0]) {
      newArray.push(arrA[0]);
      arrA.splice(0,1);
    } else {
      newArray.push(arrB[0]);
      arrB.splice(0,1);
    }
    console.log(newArray);
  }

}


// console.timeEnd("factorial test");

console.log(randomArray);
