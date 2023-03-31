function sumZero (numArr) {
    for(let i = 0; i < numArr.length; i++) {
        for(let k = i+1; k < numArr.length; k++) {
            if (numArr[i] + numArr[k] === 0) {
                return true
            }
        }
    }
    return false
}
let sample1 = []
let sample2 = [1]
let sample3 = [1, 2, 3]
let sample4 = [1, 2, 3, -2]
console.log(sumZero(sample1) + " |sumZeroFunction - sample1 - should return false")
console.log(sumZero(sample2) + " |sumZeroFunction - sample2 - should return false")
console.log(sumZero(sample3) + " |sumZeroFunction - sample3 - should return false")
console.log(sumZero(sample4) + " |sumZeroFunction - sample4 - should return true")
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

/*
    this function loops through the array and then for each element it loops through the
    entire array again followed by doing an if statement opperation

    the runtime complexity is O(n^2) because of the nested loops
*/