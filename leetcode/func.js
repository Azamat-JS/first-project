// //////  Hoisting f 
// function createFunction(){
//     return f;
//     function f(a, b){
//         const sum = a + b;
//         return sum
//     }
// }
// const f = createFunction()
// console.log(f(3, 5));
////----------------------------------
// Clousures

// function createAdder(a){
//     function f(b){
//         const sum = a + b
//         return sum
//     }
//     return f
// }
// const a = createAdder(3)
// console.log(a(4));
//-------------------------------------
//---------1
// function f(...args){
//     const sum = args[0] + args[1]
//     return sum;
// }
// console.log(f(3, 9));
//-----------2
// var createHi = function(){
//     return function(...args){
//        console.log("Hi world")
//     }
    
// }
// const h = createHi()
// h()

//---------------

// var createCounter = function(n){
//     let counter = n - 1
//     return function(){
//         return counter += 1
//     }
// }
// const func = createCounter(4)
// console.log(func());
// console.log(func());
// console.log(func());

//-------------------

// const expect = function(val){
//     return {
//         tobe: (val2) => {
//             if(val === val2) return true;
//             else throw new Error("Not Equal")
//         },
//         notToBe: (val2) => {
//             if(val !== val2) return true;
//             else throw new Error('Equal')
//         }
//     };
// };

// const ex = expect(5)
// console.log(ex.tobe(5));
// console.log(ex.notToBe(10));
// console.log(ex.tobe(10));
// console.log(ex.notToBe(5));



