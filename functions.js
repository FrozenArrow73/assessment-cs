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
// let sample1 = []
// let sample2 = [1]
// let sample3 = [1, 2, 3]
// let sample4 = [1, 2, 3, -2]
// console.log(sumZero(sample1) + " |sumZero function - sample1 - should return false")
// console.log(sumZero(sample2) + " |sumZero function - sample2 - should return false")
// console.log(sumZero(sample3) + " |sumZero function - sample3 - should return false")
// console.log(sumZero(sample4) + " |sumZero function - sample4 - should return true")
// console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

/*
    the runtime complexity is O(n^2) because of the nested loops
*/

function unique (str) {
    //this problem doesnt state if capitals should be treated as unique characters or not
    //I can't remember what the lab originally said
    //for this function I wrote it to treat capitals and lowercase as the same
    //that seems the most intuitive to me
    str = str.toLowerCase()
    strArr = str.split("")

    for(let i = 0; i < strArr.length; i++) {
        for(let k = i+1; k < strArr.length; k++) {
            if (strArr[i] === strArr[k]) {
                return false
            }
        }
    }

    return true
    
}

// let sample5 = "Monday"  // should return true
// let sample6 = "moonday" // should return false
// let sample7 = "Mom's Day" // should return false

// console.log(unique(sample5) + " |unique function - sample5 - should return true")
// console.log(unique(sample6) + " |unique function - sample6 - should return false")
// console.log(unique(sample7) + " |unique function - sample7 - should return false")


/*
    the unique function has a O(n^2) because of the nested loops
*/

function panagram (str) {
    let hasLetters = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    str = str.toLowerCase()
    for(let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a':
                hasLetters[0] = true
                break;

            case 'b':
                hasLetters[1] = true
                break;

            case 'c':
                hasLetters[2] = true
                break;
    
            case 'd':
                hasLetters[3] = true
                break;

            case 'e':
                hasLetters[4] = true
                break;
    
            case 'f':
                hasLetters[5] = true
                break;
    
            case 'g':
                hasLetters[6] = true
                break;
        
            case 'h':
                hasLetters[7] = true
                break;

            case 'i':
                hasLetters[8] = true
                break;
    
            case 'j':
                hasLetters[9] = true
                break;
    
            case 'k':
                hasLetters[10] = true
                break;
        
            case 'l':
                hasLetters[11] = true
                break;

            case 'm':
                hasLetters[12] = true
                break;
        
            case 'n':
                hasLetters[13] = true
                break;
        
            case 'o':
                hasLetters[14] = true
                break;
            
            case 'p':
                hasLetters[15] = true
                break;

            case 'q':
                hasLetters[16] = true
                break;
    
            case 'r':
                hasLetters[17] = true
                break;
    
            case 's':
                hasLetters[18] = true
                break;
        
            case 't':
                hasLetters[19] = true
                break;

            case 'u':
                hasLetters[20] = true
                break;
        
            case 'v':
                hasLetters[21] = true
                break;
        
            case 'w':
                hasLetters[22] = true
                break;
            
            case 'x':
                hasLetters[23] = true
                break;
            
            case 'y':
                hasLetters[24] = true
                break;
                
            case 'z':
                hasLetters[25] = true
                break;
        
            default:
                break;
        }
    }
    for (let i = 0; i < hasLetters.length; i++) {
        if(!hasLetters[i]) {
            return false
        }
    }
    return true
}
// let sample8 = "The quick brown fox jumps over the lazy dog!"
// let sample9 = "I like cats, but not mice"
// console.log(panagram(sample8) + " |Pangram function - sample8 - should return true")
// console.log(panagram(sample9) + " |Pangram function - sample9 - should return false")

/*
the panagram function has a O(n) because it loops though the array but does not have nested loops
*/

function longestWord (strArr) {
    let biggest = strArr[0].length
    for(let i = 0; i < strArr.length; i++) {
        if (strArr[i].length > biggest) {
            biggest = strArr[i].length
        }
    }
    return biggest
}
// let sample10 = ["hi", "hello"]
// console.log(longestWord(sample10) + "|longestWord function - sample10 - should return 5")
/*
    the longestWord function has a O(n) because it loop through the array but there are no nested loops
*/