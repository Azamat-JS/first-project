//------------------------- promise --------------------

// let newPromise = new Promise((resolve, reject) => {
//     let test = false
//     if (test){
//         resolve('muvaffaqiyatli bajarildi')
//     }else{
//         reject('xatolik')
//     }
// })
// // console.log(newPromise);

// newPromise.then(res => console.log(res)).catch(wrong => console.log({message: wrong})).finally(() => console.log('operation is finished'))

//--------------------- different options of creating promise-------------

//-------- ---------------promise resolve ---
// const resolvedPromise = Promise.resolve("this promise is done")
// resolvedPromise.then(console.log)

//---------------------- rejected promise-------
// const rejectedPromise = Promise.reject("this promise isn't done")
// rejectedPromise.catch(console.log)

//-------------- promise all---------------------

// const promise1 = Promise.resolve(3)
// const promise2 = Promise.resolve(34)
// const promise3 = Promise.resolve(78)
// Promise.all([promise1, promise2,promise3]).then((values) =>{
//  console.log(values)})
//----------------- promise race -------------------

// const promise4 = new Promise((resolve) => setTimeout(resolve, 500, '500ms'))
// const promise5 = new Promise((resolve) => setTimeout(resolve, 100, '100ms'))

// Promise.race([promise4, promise5]).then((value) => {console.log(value)})

//------------------------------ async funtion --------------------

// let myPromise = new Promise((resolve, reject) => {
//     let test = true
//     if (test){
//         resolve('muvaffaqiyatli bajarildi')
//     }else{
//         reject('xatolik')
//     }
// })
// async function getData() {
//     try {
//         const result = await myPromise
//         console.log(result);
//     }
//     catch(error){
//         console.error(error);

//     }
// }
// console.log(getData());

//--------------------------------

//-------------------------- await with setTimeout ----------------
// function delay(ms){
//     return new Promise(resolve => setTimeout(resolve, ms))
// }
// async function example(){
//     console.log('is being waited...');
//     await delay(2000);
//     console.log('launched after two seconds');

// }
// example()

//-------------------- this function emulates getting info from users -----

// function getUserData(){
//     return new Promise(resolve =>{
//         console.log('downloading info of a user');
//         setTimeout(() => {
//             resolve({name: "Ali", age: 24})
//         }, 2000)

//     })
// }
// async function processUserData() {
//     console.log('the process begins...');
//     const userData = await getUserData()
//     console.log('the info of the user is downloaded', userData);
//     await new Promise ( resolve => setTimeout(resolve, 2000))
//     console.log(`the user ${userData.name} yoshini 2 barobar qiladi`, userData.age * 2);
// }
// processUserData()

//---------------------- first and second orders --------------------

// async function firstTask() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("the first task is done");
//             resolve("first result")
//         }, 2000)
//     })
// }

// async function secondTask() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("the second task is done");
//             resolve("second result")
//         }, 1000)
//     })
// }
// async function runTasks() {
//     const result1 = await firstTask()
//     console.log(result1)

//     const result2 = await secondTask()
//     console.log(result2);
// }
// runTasks()

//-------------- run tasks ---------------
// async function task1() {
//     return new Promise (resolve => setTimeout(() => resolve("task 1 is done"), 2000))
// }

// async function task2() {
//     return new Promise(resolve => setTimeout(() => resolve("task 2 is done"), 1000))
// }

// async function task3() {
//     return new Promise(resolve => setTimeout(() => resolve("task 3 is done"), 500))
// }

// async function runAllTasks() {
//     const results = await Promise.all([task1(), task2(), task3() ])
//     console.log(results)}
// runAllTasks()

//----------------------- desreasing order --------------------

// async function countDown(num) {
//     if(num > 0){
//         console.log(num);
//         await new Promise(resolve => setTimeout(resolve, 1000))
//         await countDown(num - 1)
//     }else{
//         console.log("well done!");

//     }
// }
// countDown(5)

//------------------ increasing order -----------------------

// async function countUp(dig) {
//     if(dig < 10){
//         console.log(dig);
//         await new Promise(resolve => setTimeout(resolve, 1000))
//         await countUp (dig + 1)
//     }else{
//         console.log("your order is ready!");

//     }
// }
// countUp(3)

//--------------- async with arrow function -------------

// const countDown = async (n) =>{
//     if(n < 100){
//         console.log(n);
//         await new Promise(resolve => setTimeout(resolve, 1000))
//         await countDown (n + 10)
// }else{
//     console.log("tayyor!");

// }
// }
// countDown(70)

//------------------
