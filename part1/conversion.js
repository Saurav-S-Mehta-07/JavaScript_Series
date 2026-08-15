let score = "saurav"

// console.log(typeof score);
// console.log(typeof(score))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// console.log(typeof NaN) // number


// "33" -> 33
// "33abc" -> NaN
// true -> 1, false -> 0
// null -> 0, undefined -> NaN
// "string" -> NaN

let isLoggedIn = NaN
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1, "abd" -> true
// "", Null, undefined, NaN, 0 => false

let num = 33
let str = String(num)
// console.log(str)
// console.log(typeof str)


// ************** Operations *******************

let value = 3
let negValue = -value
// console.log(negValue)

let str1 = "Hello"
let str2 = " hitesh"
let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

// console.log(+true)
// console.log(+"")

// let num1, num2, num3
// num1 = num2 = num3 = 2+2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);