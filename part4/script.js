let h1 = document.getElementById("title")
h1.style.color = "red"
h1.style.border = "2px solid pink"
h1.style.textAlign = "center"

let h2 = document.querySelector("h2")
h2.innerText  = "I'm Heading 2"

h2 = document.querySelectorAll("h2")
h2.forEach(h => {
    h.innerText = "all heading 2 changed"
});

pass = document.querySelector("input[type='password']")

const ul = document.querySelectorAll("li")
// console.log(ul)

ul.forEach((l)=>{
    l.style.color = "blue"
})

let allList = document.getElementsByClassName("list-item")
allList = Array.from(allList);
// console.log(allList)

allList.forEach((list)=>{
    console.log(list.innerText)
})

