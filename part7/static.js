class User{
    constructor(username){
        this.username  = username
    }

    logMe(){
        console.log(`Username : ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const user1 = new User("saurav")
// console.log(user1.createId()) // not accessed


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const t1 = new Teacher("teacher1", "email@gmail.com")

console.log(t1)
t1.logMe()
// console.log(t1.createId()) // not accessed