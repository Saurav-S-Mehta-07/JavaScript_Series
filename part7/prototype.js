let myName = "saurav       "

// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",
    

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.saurav = function(){
    console.log("saurav is present in all object");
}

Array.prototype.heySaurav = function(){
    console.log("Saurav says hello");
    
}

// myHeros.heySaurav()

// heroPower.heySaurav()

// heroPower.saurav();

// myHeros.saurav();



// inheritance
const User = {
    name : "saurav",
    email : "email@gmail.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "Js Assignment",
    fullTime : true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User;


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "saurav      "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength();

"mayank".trueLength()
"iceteam".trueLength()