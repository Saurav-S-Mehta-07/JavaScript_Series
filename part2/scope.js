// var a = 10
// a = 20
// console.log(a)


// var a = 90
// console.log(a)


// if(true){
//     var a = 30
// }
// console.log(a)


// ********************

// let  a = 10
// a = 20
// let a = 30

// if(true){
//     let a = 30
// }
// console.log(a)


// *************************
// const a = 10
// a = 20
// const a = 20

// if(true){
//     const a = 109
// }
// console.log(a)


// *****************************************************
// scope level and mini hoisting


// const closure = function one(){
//     const username = "saurav"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     return two
// }

// const two = closure()
// two()


if(true){
    const username = "saurav"
    if (username === "saurav"){
        const website = " youtube"
        // console.log(username + website)
    }
}


// *********************** interesting **********

console.log(addone(5)) // 6
function addone(num){
    return num+1
}

// console.log(addTwo(5)) // error -> hoisting
const addTwo = function(num){
    return num+2
}


