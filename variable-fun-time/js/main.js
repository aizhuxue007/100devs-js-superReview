//--- Easy
//create a variable and assign it a number
let a = 5
//minus 10 from that number
a - 10
//print that number to the console
console.log(a)
//--- Medium
//create a variable that holds a value from the input
let input = Number(prompt('enter value'))
//add 25 to that number
input += 25
//alert that number
alert(input)
//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click', () => console.log(a + input))