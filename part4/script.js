const parent = document.querySelector(".parent");
// console.log(parent)

// console.log(parent.children)


// for(let i = 0; i<parent.children.length; i++){
//     console.log(parent.children[i].innerText);
// }

parent.children[1].style.color = "blue";

// console.log(parent.firstElementChild)
// console.log(parent.lastElementChild)

const dayOne = document.querySelector(".day")
console.log(dayOne)
console.log(dayOne.parentElement)
console.log(dayOne.nextElementSibling)

console.log("Notes : ", parent.childNodes)