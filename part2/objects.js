// singleton
Object.create // objects


// object literals
const mySym  = Symbol("key1");
const jsUser = {
    name : "Saurav",
    "full name" : "saurav singh Mehta",
    [mySym] : "mykey1" ,
    age : 19,
    location : "Haldwani",
    email: "saurav@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser.full name)
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

// console.log(jsUser)

// jsUser.email = "mayank@gmail.com";
// Object.freeze(jsUser)
// jsUser.email = "saurav@gmail.com"
// console.log(jsUser.email)


jsUser.greeting = function(){
    console.log("Hello JS User")
}

jsUser.greetingTo = function(){
    console.log(`Hello JS User ${this.name}!`)
}

jsUser.greeting()
jsUser.greetingTo()