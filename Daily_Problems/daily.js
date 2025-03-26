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


// Check if One String is a Substring of Another
// Problem: Given two strings s1 and s2, check if s2 is a substring of s1.
// Example:
// Input: s1 = "hello world", s2 = "world"
// Output: True

const matchSubstring = (str1,str2)=>{
  
    let len2= str2.length;
    let len1= str1.length;
    if (len1 <= len2)
    return false
    for(i = 0 ; i < len1 -len2 ; i++){
        let j =0;
        for (j=0; j <len2;j++){
            if(str1[i+j]=! str2[i+j]){
                break 
            }else{
                console.log(true);
            }
        }
    }
    
    }
  matchSubstring("hello world", "world");




// find palindorme from input string
  
const findSubstring = (str) => {
    let result = [];
    
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let substring = str.substring(i, j);

            // Check if the substring is a palindrome
            if (isPalindrome(substring) && substring.length > 1) {
                console.log(substring);
                result.push(substring);
            }
        }
    }

    return result;
};

// Example Usage
findSubstring("babad");

// check how many vowels and constant in string
const checkTypeOfAlphabat=(str)=>{
    let vowels="aeiouAEIOU";
    
    vowelsCount = 0; consonantCount=0;
    for(let i=0 ; i <str.length; i++){
        let char = str[i];
      if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
             if (isVowel(char, vowels)) {
                 vowelsCount++;
             } else {
                 consonantCount++;
             }
         }
    }
        console.log("vowelsCountes - " , vowelsCount )
        console.log("Constants Counts - " , consonantCount )
    
     
 }
   const isVowel = (char ,vowels)=>{
       for (i=0; i <vowels.length; i++){
           if(char === vowels[i]){
               return true;
           }
       }
   }
 checkTypeOfAlphabat("rohit    ");

//// revres a string 
const revers_String = (str) => {
    let reversed  = "";
   for(let i = str.length -1 ; i >=0; i--){
       reversed +=str[i];
   }
   console.log(reversed);
};


revers_String("rohit");

// is palindrome or not 
const isPalindrom = (str) =>{
    for(let i =0 ; i < str.length /2 ; i++){
        if(str[i] !== str[(str.length - 1 )-i]){
            return false;
        };
    };
       return true
       
   }
   console.log(isPalindrom("ab"))


//    Find the First Non-Repeating Character
//    Problem: Given a string, find the first character that does not repeat.
//    Example:
//    Input: "aabbccdeff"
//    Output: "d"   

function firstNonRepeatingChar(str) {
    let count = {}; 

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!count[char]) {
            count[char] = 1;
        } else {
            count[char]++;
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (count[str[i]] === 1) {
            return str[i]; 
        }
    }

    return null; 
}

console.log(firstNonRepeatingChar("racecar")); 
