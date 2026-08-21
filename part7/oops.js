// object litral
const user = {
   username : "Saurav",
   loginCount : 0,
   signedIn : true,

   getUserDetails : function(){
    // console.log("Got user details from database");
    // console.log(`${this.username} logged in ${this.loginCount} times.`)
    console.log(this);
   }
}
// console.log(user.username);
// user.getUserDetails()
// console.log(this);



// constructor function
// const promiseOne = new Promise()
const date = new Date()


function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn =  isLoggedIn

    return this
}

// const user1 = User("saurav", 12, true)
// const user2 = User("gaurav", 4, true)
// console.log(user1) // over-write

const user1 = new User("saurav", 12, true)
const user2 = new  User("gaurav", 4, true)
console.log(user1) 
console.log(user2)