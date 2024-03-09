//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtract(n1, n2) {
    alert(n1 - n2)
}
//create a function that divides three numbers and console logs the quotient
const quotient = (n1, n2, n3) => console.log(n1/n2/n3)
//create a function that multiplys three numbers and returns the product
const multiply = (n1, n2, n3) => n1*n2*n3
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
const medium = (n1, n2, n3) => (n1 + n2)%n3
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
const hard = (n1, n2, n3, n4) => {
    let step1 = n1*n2
    if (step1>100) {
        console.log(n3 + n4)
    } else if (step1<100) {
        console.log(n3 - n4)
    } else {
        alert((n1*n2*n3)%n4)
    }
}

subtract(1, 2)
quotient(1, 2, 3)
multiply(1, 2, 3)
medium(1, 2, 3)
hard(1, 2, 3, 4)