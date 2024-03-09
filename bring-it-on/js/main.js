// *Variables*
// Create a variable and console log the value
let value = 'value'
console.log(value)
// Create a variable, add 10 to it, and alert the value
let value2 = 10
alert(value2+10)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract(n1, n2, n3, n4) {
    alert(n1 - n2 - n3 - n4)
}
// Create a function that divides one number by another and returns the remainder
function divide(n1, n2) {
    return n1%n2
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(n1, n2) {
    if (n1 + n2 > 50) alert('jumanji')
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiply(n1,n2,n3) {
    if ((n1*n2*n3)%3 === 0) alert('ZEBRA')
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loops(word, n) {
    for (let i = 1; i <= n; i++) {
        console.log(word)
    }
}

subtract(1,2,3,4)
console.log(divide(1, 2))
jumanji(50, 1)
multiply(3,3,3)
loops('word', 50)