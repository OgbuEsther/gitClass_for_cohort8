//if/else
let age = 15
if(age >= 18){
    console.log("you can vote")
}else{
    console.log("you can not vote")
}

//
let gender = "male"
if(gender === "female"){
    console.log("you are a female , use the lady's restroom")
}else if(gender === "non-binary"){
    console.log("use the non-binary room")
}else if (gender === "trans"){
    console.log("use the trans room")
}else{
    console.log("you are a male , use the men's restroom")
}

//loops
for(let i=0; i <10; i++){
    console.log(i)
}

let arrOfNames = ["james", "jane", "joe", "jim", "jess" ,"esther"]
console.log(arrOfNames.length)
for(let names = 0; names <arrOfNames.length; names++){
    console.log("TECHCRUSH" + arrOfNames[names])
}

for(let x = 1; x<= 36; x++){
    console.log(x * 2)
}


//while
let loginAttempts = 1
while(loginAttempts <= 3){
    console.log(`attempt number ${loginAttempts}`)
    loginAttempts++
}

let scores = [20 , 12 , 25 , 15 , 4 , 8];

for(let newScore = 0; newScore < scores.length; newScore++){
    console.log(scores[newScore] + 20)
}

