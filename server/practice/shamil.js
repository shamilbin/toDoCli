// let obj={
//     fname:"shamil",
//     age:23
// }
// let objStr=JSON.stringify(obj)

// console.log(objStr,typeof objStr)

let obj = `{
"fname" :"shamil",
"age":23

}`;
console.log(obj, typeof obj);
let strObj = JSON.parse(obj);

console.log(strObj, typeof strObj);
console.log(strObj.fname)
