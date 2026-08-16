// for
// const array = [1,2,3,4,5]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }

// for(const i in array){
//     // console.log(i) // here i is index
//     console.log(array[i])
// }

// for(let i = 0; i<=10; i++){
//     if(i==5){
//         console.log("5 is best number")
//     }
//     console.log(i)
// }

// for(let i = 0; i<=5; i++){
//     for(let j = 0; j<=5; j++){
//         console.log(`${i} with ${j}`)
//     }
// }

// array.forEach(el =>{
//     console.log(el)
// })


// for(let i = 0; i <= 5; i++){
//     if(i==3) break;
//     console.log(i)
// }

// for(let i = 0; i<=5; i++){
//     if(i==3) continue;
//     console.log(i)
// }

// ***********************************

// for of
// const array = [1,2,3,4,5]

// for (const element of array) {
//     console.log(element)
// }

// const str = "hello world"
// for(const ch of str){
//     console.log(ch)
// }


// **********************************
//maps

const map = new Map()
map.set("IN", "India")
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("ch", "China")

// console.log(map)

// for (const [key, value] of map) {
//     console.log(key, ":-", value)
// }

const myObject = {
    "game1" : "NFS",
    "game2" : "Spiderman"
}

// for (const [key, value] of myObject) { //not iterable here
//     console.log(key, ":-", vlaue)
// }