// function pow(x, n){
//     if(n === 1){
//         return x
//     }else{
//         return x * pow(x, n-1)
//     }
// }
// console.log(pow(2, 3));

//----------- iterables
//  let range = {
//   from: 1,
//   to: 5
// };

// // 1. call to for..of initially calls this
// range[Symbol.iterator] = function() {

//   // ...it returns the iterator object:
//   // 2. Onward, for..of works only with the iterator object below, asking it for next values
//   return {
//     current: this.from,
//     last: this.to,

//     // 3. next() is called on each iteration by the for..of loop
//     next() {
//       // 4. it should return the value as an object {done:.., value :...}
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     }
//   };
// };

// // now it works!
// for (let num of range) {
//   console.log(num); // 1, then 2, 3, 4, 5
// }

//^^^^^^^^^^^^^^

let str = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // outputs characters one by one
}