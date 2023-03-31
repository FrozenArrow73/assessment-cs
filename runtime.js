const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();

//---------------------------------------------------------------------------------------------
perf.start();                    
doublerAppend(tinyArray);
let tinyArrayAppend = perf.stop(); 

perf.start();
doublerInsert(tinyArray);
let tinyArrayInsert = perf.stop();

//--------------------------------

perf.start();                    
doublerAppend(smallArray);
let smallArrayAppend = perf.stop(); 

perf.start();
doublerInsert(smallArray);
let smallArrayInsert = perf.stop();

//--------------------------------

perf.start();                    
doublerAppend(mediumArray);
let mediumArrayAppend = perf.stop(); 

perf.start();
doublerInsert(mediumArray);
let mediumArrayInsert = perf.stop();

//--------------------------------

perf.start();                    
doublerAppend(largeArray);
let largeArrayAppend = perf.stop(); 

perf.start();
doublerInsert(largeArray);
let largeArrayInsert = perf.stop();

//---------------------------------------------
console.log('Results for the tinyArray');
console.log("insert", tinyArrayInsert.preciseWords);
console.log("append", tinyArrayAppend.preciseWords);

console.log("------------------------------------")

console.log('Results for the smallArray');
console.log("insert", smallArrayInsert.preciseWords);
console.log("append", smallArrayAppend.preciseWords);

console.log("------------------------------------")

console.log('Results for the mediumArray');
console.log("insert", mediumArrayInsert.preciseWords);
console.log("append", mediumArrayAppend.preciseWords);

console.log("------------------------------------")

console.log('Results for the largeArray');
console.log("insert", largeArrayInsert.preciseWords);
console.log("append", largeArrayAppend.preciseWords);

console.log("------------------------------------")

//---------------------------------------------
console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
