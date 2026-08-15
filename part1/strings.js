const name = "saurav"
const repoCount = 50

// console.log(name + repoCount + " Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Saurav-sM")
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toLowerCase())
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('u'))

const newString = gameName.substring(0, 4)
// console.log(newString)


const anotherStr = gameName.slice(-8, 4)
// console.log(anotherStr)

const newStrOne = "   Saurav, "
// console.log(newStrOne)
// console.log(newStrOne.trim())


const url = "https://saurav.com/saurav%20%mehta"
// console.log(url.replace("%20%", "-"))

// console.log(url.includes('saurav'))

console.log(gameName.split("-"))