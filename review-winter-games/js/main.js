//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function findEvens(arr) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2==0) result.push(arr[i])
    }
    return result
}

console.log(findEvens([1,2,3,4,5,6,7,8]))