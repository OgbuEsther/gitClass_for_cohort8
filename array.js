let students = ["Sara", "Samad", "Godwin", "Mohh"]
console.log(students[0])
console.log(students.length)
students[3] = "Effiong"
console.log(students)

//adding elements to an array
students.push("Mohh") //adds items to the end of the array 
console.log(students)

students.unshift("Uzoma") //adds items to the beginning of the array 
console.log(students)

//removing elememts
students.pop() //removes the last item in the array
console.log("this is the array after popping:", students)
students.shift() //removes the first item in the array
console.log("this is the array after shifting:", students)

//includes , indexOf
console.log(students.includes("Sara"))
console.log(students.indexOf("Sara"))


//reverse , sort , slice , splice
students.reverse()
console.log("this is reversed:", students)
students.sort()
console.log("this is sorted:", students)

console.log("this is sliced:", students.slice(1, 3)) //returns a new array with the sliced elements
console.log("this is spliced:", students.splice(1, 2, "Mohh", "Esther")) //removes the elements from the array and returns them
console.log("this is the array:", students)


//higher order array methods
//map , filter , reduce , forEach , find , findIndex , some , every
//map methods

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const doubledNumbers = numbers.map((num) => num * 2)
console.log(doubledNumbers)

const marketList = ["rice", "beans", "garri", "yam", "plantain"]
const addedPrefix = marketList.map((item) => "I will buy: " + item)
console.log(addedPrefix)

//filter methods
const evenNumbers = numbers.filter((num) => num % 2 === 0)
console.log(evenNumbers)

const complexion = ["dark", "fair", "medium", "dark", "fair"]
const darkComplexion = complexion.filter((item) => item === "dark")
console.log(darkComplexion)


const findFirstDark = complexion.find((item) => item === "dark")
console.log(findFirstDark)

const findIndexOfDark = complexion.findIndex((item) => item === "dark")
console.log(findIndexOfDark)

//reduce
const nums = [700 , 300 , 500 , 1000 , 2000]
const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum)

const multiply = nums.reduce((acc, cur) => acc * cur, 1)
console.log(multiply)
