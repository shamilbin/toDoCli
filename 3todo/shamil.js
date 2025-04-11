// let obj = {
//     fname: "suhail",
//     age: 22
// }
// console.log(obj, typeof obj)

// let objectToString = JSON.stringify(obj);

// console.log(objectToString, typeof objectToString)

// let dummy = `{ "fname": "shamil",
//     "age": 20}`

// console.log(dummy)
// let stringToObject = JSON.parse(dummy);
// let dummy1 = {
//     "fname": "shamil",
//     "age": 20
// }
// console.log(stringToObject, typeof stringToObject)
// console.log(stringToObject.fname)



// let person = {
//     fname: "suhail",
//     age: 22
// }

let dbFile = []
dbFile.push("suhail")
console.log(dbFile)

console.log('====================');

let db2 = '[]'
console.log(db2, typeof db2)
let strToObj = JSON.parse(db2)
console.log(strToObj, typeof strToObj)
strToObj.push("suhail")
console.log(strToObj)