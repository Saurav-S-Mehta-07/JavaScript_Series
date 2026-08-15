"use strict"; // treat all JS code as newer version

// alert(3 + 3) // we are using node.js not browser

// console.log(3+3)

// console.log("Saurav")

// let name = "hitesh"
// let age = 12
// let isLoggedIn = false

// number -> 2 to power 53 (range)
//bigint
//string->""
// boolean -> true/ false
// null-> standard alone value
// undefine ->  not assigned yet
// symbol -> unique

// object jkl

// console.log(typeof("saurav"))
// console.log(typeof(null))
// console.log(typeof(undefined))




// Primitive -> call by value
// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

// js is a dynamically typed language
const score = 100
const storeValue  = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId)

const bigNumber = 34343449058233948394n
// console.log(typeof(bigNumber))


// Reference type (Non Primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let obj = {
    name : "saurav",
    age : 22,
}

const myfunction = function(){
    console.log("Hello world!");
}

console.table([typeof(heros), typeof(obj), typeof(myfunction)])