// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function storeHours(arr) {
    if (arr[0]<arr[arr.length-1]) {
        alert('hi')
    } else if (arr[0]>arr[arr.length-1]) {
        alert('bye')
    } else {
        alert('We close in an hour')
    }
}

storeHours([1, 2, 3, 4])
storeHours([4, 2, 3, 1])
storeHours([4, 2, 3, 4])