// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`;
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 = new User("saurav", "email@gmail.com", "1234")
// console.log(user1)
// console.log(user1.encryptPassword())
// console.log(user1.changeUsername())


// behind the scene

function User(username, email, password){
       this.username = username
       this.email = email
       this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}abcd`
}

const user2 = new User("saurav", "email", "123")
console.log(user2)
console.log(user2.encryptPassword())