// JSON data
var myJsonObject ='{username:"marouane","age": 18}';
let myJsObject = JSON.parse(myJsonObject);

console.log(myJsonObject);
console.log(typeof myJsonObject);

console.log("//////////////////////////////////")

console.log(myJsObject);
console.log(typeof myJsObject);

console.log("//////////////////////////////////")

const jsonString = '{"name": "marouane", "age": 18}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // "John Doe"
console.log(obj.age); // 35

console.log("//////////////////////////////////");

const person = { name: "John Doe", age: 35 };
const jsonData = JSON.stringify(person);
console.log(jsonData); // '{"name":"John Doe","age":35}'