// this keyword.js
// const s={
//     name:"yash",
//     showname(){
//         console.log(this.name);
//     }
// };
// s.showname();

// call.js

// const student1={
//     name:"yash",
// };
// const student2={
//     name:"rohit",
// };
// function introduce(city){
//     console.log('my name is ${name} and i live in ${city}');
// }
// introduce.call(student1,"delhi");
// introduce.call(student2,"noida");

// apply .js

// const student1={
//     name:"yash",
// };
// const student2={
//     name:"rohit",
// };
// function introduce(city){
//     console.log('my name is ${name} and i live in ${city}');
// }
// introduce.call(student1,"delhi");
// introduce.call(student2,"noida");
// introduce.apply(student1,["delhi"]);

// eventloop.js

// console.log("a");
// setTimeout(()=>{
//     console.log("b");
// },5000)

// console.log("c");

// callstack.js
function first(){
    console.log("first");
    second();
}
function second(){
    console.log("second");
    third();
}
function third(){
    console.log("third");
}
first();
