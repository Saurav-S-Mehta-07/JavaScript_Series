// Immediately Invoke function expressions (IIFE)

// function connetDB(){
//       console.log("DB connected")
// }
// connetDB()


(function connetDB(){
    //named IIFE
    console.log("DB conneted");
})();
// to write two IIFE ; required
((name)=>{
    // simple IIFE
    console.log(`DB connected Two ${name}`)
})("saurav");