//remove last specific digits


const removeDigit = (n,d)=>{
    let result = 0;
    let multiple = 1;
    while (n>0){
        let digit = n % 10;
        if(digit != d){
            result = result + digit * multiple;
            multiple = multiple*10;
        }
        n = (n-digit)/10;
    }
    return result;
};

console.log(removeDigit(234,3));

// make decimal to binary number


function decimalToBinary(n) {
    let binary = 0, place = 1;

    while (n > 0) {
        let remainder = n % 2;
        binary = binary + remainder * place; // Build binary number
        place = place * 10; // Shift left
        n = (n - remainder) / 2; // Remove last digit
    }
    return binary;
}

// Example
console.log(decimalToBinary(1)); // Output: 1010



// binary to decimal 
const binaryToDecimal = (n) => {
    let decimal = 0 ; let place = 1;
    while(n > 0){
        let lastDigit = n % 10 ;
        decimal = decimal + lastDigit * place ;
        place = place * 2;
        n = (n-lastDigit)/10;
    }
    console.log(decimal);
};

binaryToDecimal(101);


//how many time 1 in binary number if we have decimal number
function countOnes(n) {
    let count = 0;

    while (n > 0) {
        if (n % 2 == 1) count++;
        n = (n - (n % 2)) / 2; // Remove last bit
    }
    return count;
}

console.log(countOnes(13));

// find all sub strings in input string
 
 	
// Find All Substrings of a String
// Problem: Given a string, print all possible substrings.
// Example:
// Input: "abc"
// Output: "a", "ab", "abc", "b", "bc", "c"


const findSubstring = (str)=>{
    let result = [];
    for(let i=0; i<str.length; i++){
        for(let j = i+1; j <=str.length; j++){
           result.push(str.substring(i,j));
           console.log(result);
        }
    }
}

findSubstring("abc");