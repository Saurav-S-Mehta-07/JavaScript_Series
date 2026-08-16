function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username : "saurav",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)


const myNewArr = [200, 400, 100, 600]

function returnSecondValue(getArr){
    return getArr[1]
}
// console.log(returnSecondValue(myNewArr))