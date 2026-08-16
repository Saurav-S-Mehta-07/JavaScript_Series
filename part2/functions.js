function sayMyName(name){
    console.log(name)
}

// sayMyName("saurav")


// function sum(num1, num2){
//     console.log("sum : ",num1 + num2)
// }
// sum(4,null)

function sum(num1, num2){
    return num1+num2
}

const result = sum(4,5)
// console.log(result);


function greet(name){
    if(!name){
        console.log("no name given")
        return
    }
    return `welcome ${name}!`
}
// console.log(greet("saurav"))
// console.log(greet())
