//falsy values => false, "", null, 0, undefined, -0, BigInt 0n, NaN
//turthy values => true, "string", [], "0", "false", {}, " ", function(){} -> empty function

const userEmail = {}
// if(userEmail){
//     console.log("Got user email")
// }
// else{
//     console.log("Don't have user email")
// }

// if(userEmail.length === 0){
//     console.log("Array is empty")
// }

// if(Object.keys(userEmail).length === 0){
//     console.log("obj is empty")
// }

// console.log(false == 0) // true
// console.log(false == "") // true
// console.log(0 == "") // true

// console.log([] == 0) // true
// console.log([] == false) // true
// console.log([] == "") // true

// console.log({} == 0) // false 
// console.log({} == false) // false
// console.log({} == "") // false


// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1  = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 20
// val1 = null ?? 10 ?? 40

// console.log(val1)


// Terniary operator
// condition ? true : false;

const iceTeaPrice = 100
// iceTeaPrice >= 80 ? console.log("greated than 80") : console.log("less than 80")

