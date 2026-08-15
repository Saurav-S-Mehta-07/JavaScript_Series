// array

// const myArr = [0,1,2,3,4,5]
// const myHeros = ["shakriman", "naagraj"]

// const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr[0])


// arr method

// myArr.push(6)
// myArr.push(8)
// myArr.pop()

// myArr.unshift(10)
// myArr.shift()

// console.log(myArr.includes(1))
// console.log(myArr.indexOf(8))

// cosnt = newArr = myArr.join()

// console.log(newArr)
// console.log(myArr)


// slice, splice

// console.log("A ", myArr)

// const myn1 = myArr.slice(1, 3)

// console.log(myn1)
// console.log("B ", myArr)


// console.log("A ", myArr)

// const myn2 = myArr.splice(1, 3)

// console.log(myn2)
// console.log("B ", myArr)



// *************************************

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3])


// const all_heros  = marvel_heros.concat(dc_heros)
// console.log(all_heros)

const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros)


const another_arr = [1,2,3, [4,5,6], 7,[6,7,[4,5]]]

const real_another_arr = another_arr.flat(Infinity)
// console.log(real_another_arr)

console.log(Array.isArray("Saurav"))
console.log(Array.from("Saurav"))
console.log(Array.from({name : "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))