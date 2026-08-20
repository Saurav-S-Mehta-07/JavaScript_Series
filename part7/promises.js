// const promiseOne = new Promise((resolve, reject)=>{
//       // Do an async task
//       // DB calls, cryptography, network
//       setTimeout(()=>{
//         console.log("Async task is complete");
//         resolve()
//       },1000);
// })

// promiseOne.then(function(){
//     console.log("Promise resolved");
// })



// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Async task 2");
//         resolve()
//     }, 1000);
// }).then(()=>{
//     console.log("Async 2 resolved");
// })


// const promiseThree = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//          resolve({username : "Saurav", email : "saurav@gmail.com"});
//     }, 1000)
// })

// promiseThree.then((user)=>{
//     console.log(user)
// })


//then catch
 
// const promiseFour = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = false
//         if(!error){
//             resolve({username : "saurav", password : "1234"});
//         }
//         else{
//             reject("ERROR : Something went wrong")
//         }
//     })
// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("pormise done!")
// })



// async await

// const promiseFive = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = true
//         if(!error){
//             resolve({username : "JavaScript", password : "1234"});
//         }
//         else{
//             reject("ERROR : JS went wrong")
//         }
//     })
// });

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// consumePromiseFive()


// async function getAllUsers() {
//     try{
//       const response = await fetch("https://jsonplaceholder.typicode.com/users");
//       const data = await response.json();
//       console.log(data);
//     }catch(err){
//         console.log("ERROR : ", err)
//     }
// }

// getAllUsers()



// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>{
//    return response.json();
// }).then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//    console.log(error);
// })
