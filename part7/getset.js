class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this.email.toUpperCase()
    }
    
    set email(value){
        this._email = value;
    }

    get password(){
        return this._password.toUpperCase();
    }

    set password(value){
        this._password = value;
    }
}

const user = new User("saruav@gmail.com", "abc")

console.log(user.password);