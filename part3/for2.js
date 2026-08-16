const myObject = {
    js: "javaScript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

// for (const key in myObject){
//     console.log(myObject[key])
// }

const arr = ["js", "rb", "py", "java", "c++"]

// for (const key in arr){
//     console.log(arr[key])
// }


const map = new Map()
map.set("IN", "India")
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("ch", "China")

// for (const key in map){ // not iterable here
//     console.log(key);
// }


// ***************** for each ************

const coding = ["js", "java","py","C++"]

// coding.forEach(printEl)

// function printEl(el){
//     console.log(el)
// }

// coding.forEach((el)=>{
//     console.log(el);
// })

// coding.forEach((el, index,array)=>{
//    console.log(el, index, arr);
// })



const  mycoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]


mycoding.forEach((item)=>{
    console.log(item.languageName, item.languageFileName)
})