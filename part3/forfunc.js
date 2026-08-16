// for function -> foreach, map, filter, reduce

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item)=>{
//     return item
// })

// console.log(values) // undefine

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=> {
//     return num>4
// })


// const newNums = []
// myNums.forEach((num)=>{
//     if(num > 4) newNums.push(num)
// })

// console.log(newNums)


// const books = [
//     {title : "Book one", genre : "Fiction", publish : 1981, edition : 2004},
//     {title : "Book two", genre : "Non-Fiction", publish : 1992, edition : 2008},
//     {title : "Book three", genre : "History", publish : 1999, edition : 2007},
//     {title : "Book four", genre : "Non-Fiction", publish : 1989, edition : 2001},
//     {title : "Book five", genre : "Science", publish : 2009, edition : 2008},
//     {title : "Book six", genre : "Fiction", publish : 2011, edition : 2022},
//     {title : "Book seven", genre : "History", publish : 2015, edition : 2011},
//     {title : "Book eight", genre : "Science", publish : 1950, edition : 2004},
//     {title : "Book nine", genre : "Non-Fiction", publish : 2025, edition : 2026},
//     {title : "Book ten", genre : "Fiction", publish : 2000, edition : 2004},
// ]

// let userBooks = books.filter((bk)=> bk.genre === "History")

// userBooks = books.filter((bk) => {
//     return bk.publish >= 2000 && bk.genre =="History"
// })

// console.log(userBooks)



// let myNumbers = [1,2,3,4,5,6,7,8,9,10]

// myNumbers = myNumbers.map((el)=> el+10)

// console.log(myNumbers)



// chaining

// const myNums =[1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.map((num) => num ** 2)
//                       .filter((num)=> num>20)
// console.log(newNums)


//reduce

// const myNums = [1,2,3,4,5]
// const result = myNums.reduce((acc,curr)=> acc+curr, 0)
// console.log(result)

// const shoppingCart = [
//     {
//         itemName : "js course",
//         price : 999
//     },
//     {
//         itemName : "java course",
//         price : 1299
//     },
//     {
//         itemName : "python course",
//         price : 1599
//     },
//     {
//         itemName : "data science course",
//         price : 9999
//     },
// ]

// const totalPrice = shoppingCart.reduce((acc, item)=> acc + item.price, 0)
// console.log(totalPrice)