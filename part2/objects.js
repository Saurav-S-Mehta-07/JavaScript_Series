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


// jsUser.greeting = function(){
//     console.log("Hello JS User")
// }

// jsUser.greetingTo = function(){
//     console.log(`Hello JS User ${this.name}!`)
// }

// jsUser.greeting()
// jsUser.greetingTo()



// **********************************************

// const tinderUser = new Object() // singleton object
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "dustibun"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "dustibun@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Dustibun",
            lastname : "Heterson"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id : 1, 
        email : "a@gmail.com"
    },
    {
        id : 2, 
        email : "b@gmail.com"
    },
    {
        id : 3, 
        email : "c@gmail.com"
    }
]

// console.log(users[1].email)



// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'))

// **************************************************************************
//de structure 
const course = {
    coursename : "js",
    price : "999",
    courseInstructor  : "Saurav"
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course

// console.log(instructor)

// ***************************
// APIs

// {
//     "name" : "saurav",
//     "coursename" : "JavaScript",
//     "price" : "free"
// }

