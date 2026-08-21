function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
    return this;
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}


const user1 = new createUser("saurav", 25);
const user2 = new createUser("gaurav", 250);

user1.printMe()
console.log(user1);


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created ; the new keyword initiates the creation of a new JS object,

A prototype is linked: the newly created object gets linked to the prototype promperty of 
the constructor function. This means that it has access to properties and methods defined
on the constructor's prototype.

The constructor is called : the constructor fucntion is called
with the specified arguments and this is bound to 
the newly created object. If no explicit return value is specified from the constructor,
JS assumes this, the newly created object, to be the intended return value.

the new object is returned: after the constructor function has been called. if it doesn't return a non-primitive
value (object, array, function, etc.),the newly created object
is returned.

*/

