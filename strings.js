const herName = "EsTheR"

console.log(herName.toLowerCase()); // esther
console.log(herName.toUpperCase()); // ESTHER

function lowerMe(value) {
    return value.toLowerCase();
}

console.log(lowerMe(herName));

const trimExample = "   Hello World!   ";
console.log(trimExample.trim()); // "Hello World!"
console.log(trimExample.trimStart()); // "Hello World!   "
console.log(trimExample.trimEnd()); // "   Hello World!"

let filename = "report_final_2024.pdf";

console.log(filename.startsWith("report")); // true
console.log(filename.startsWith("draft"));  // false
console.log(filename.endsWith(".pdf"));     // true
console.log(filename.endsWith(".docx"));    // false


const extractExample = "Esther"
console.log(extractExample.slice(0, 3)); // "Est"
console.log(extractExample.slice(3));    // "her"
console.log(extractExample.slice(-3));  // "her"
console.log(extractExample.substring(0, 3)); // "Est"
console.log(extractExample.substring(3));    // "her"
console.log(extractExample.substring(-3));  // "Esther" (negative index treated as 0)


//replace and the replaceAll
const stringText = "Uzoma is a fine girl , Uzoma is so smart and cute and Uzoma is a software developer"
console.log(stringText.replace("Uzoma", "She"))
console.log(stringText.replaceAll("Uzoma", "She"))
let splittedText = stringText.split(",")
console.log(splittedText[1].replaceAll("Uzoma", "She"))

//reverse
let panlindrome = "madam"
let reversed = panlindrome.split("").reverse().join("")
console.log(reversed)

function wordCheck(word) {
    return word === word.split("").reverse().join("").toLowerCase() ? "Yes it is a palindrome" : "No it is not a palindrome"
}

console.log(wordCheck("esther"))