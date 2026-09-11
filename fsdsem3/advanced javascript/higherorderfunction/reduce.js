let number=[10,20,30,40,50];
// let total=number.reduce((sum,num)=>{
//     return sum+num;
// },0);
// console.log(total);
let total=number.reduce((max,num)=>{
    return num>max? num:max;
},number[0]);
console.log(total);

let student=[
    {id:1,name:"vikas",marks:30},
    {id:2,name:"yash",marks:40}
];
let std =student.find(s=>s.id===2);
console.log(std);
