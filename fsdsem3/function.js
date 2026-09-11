// function add(a,b)
// {
//     return a+b;
// }
// console.log(add(10,20));

// arrow function

// const add=(a,b)=>{
//     return a+b;
// }
// console.log(add(10,20));

//  default parameter

// function add(a,b)
// {
//     return a+b;
// }
// console.log(add(10,20))

// call back function

function display(result){
    console.log(result);
}
function cal(a,b,callback){
    callback(a+b);
}
cal(10,20,display);

// set timeout method js particular time ke baad output display hoga

// console.log("start");
// setTimeout(() => {
//     console.log("execute now");
// }, 5000);
// console.log("stop");

// set interval 

// let count=1;
// let timer=setInterval(() => {
//     console.log(count);
//     count++;
//     if(count==6){
//         clearInterval(timer);
//     }
// }, 2000);

// exception handling

// try{
//     let a=10;
//     let b=20;
//     console.log(a);
//     console.log(b);
// }
// catch(error){
//     console.log(error);
// }
// finally{
//     console.log("this is final block");
// }

// custom error

// function checkage(age){
//     if(age<18){
//         throw new error("not eligible");
//     }
//     console.log("yes");
// }
// try{
//     checkage(15);
// }
// catch(error){
//     console.log(error.message);
// }
