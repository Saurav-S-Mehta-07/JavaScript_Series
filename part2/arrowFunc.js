const user = {
    username : "saurav",
    price : 999,
    
    welcomeMsg : function(){
        console.log(`${this.username}, welcome to website`)
    }
}

// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()

// console.log(this) 

// function printThis(){
//     let username = "saurav"
//     console.log(this.username)
// }
// printThis()

// const printThis = () => {
//     let username = "saurav"
//     console.log(this.username)
// }
// printThis()

// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }
// console.log(addTwo(5,4))

// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(2,3))

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(2,3))

