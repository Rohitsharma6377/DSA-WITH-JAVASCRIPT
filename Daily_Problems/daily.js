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

            //  if the substring is a palindrome
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


//sum of natual number using for loops

const sumNumbers = (N) =>{
    let sum = 0;
    for(i=0; i <= N; i++){
       sum += i;
    };
       console.log(sum);
};

sumNumbers(10);

// sum of natural number using while loop;

const sumNumber = (N) => {
    let Total = 0;
    
}
 
// capitlize string first latter
function capitalizeWords(sentence) {
    let result = "";  
    let capitalizeNext = true;  

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        if (capitalizeNext && char >= 'a' && char <= 'z') {
            result += String.fromCharCode(char.charCodeAt(0) - 32);
        } else {
            result += char;
        }

        capitalizeNext = (char === ' ');
    }

    return result;
}

const sentence = "hello world! this is javascript.";
console.log(capitalizeWords(sentence));  

//find longest word

function findLongestWord(sentence) {
    let longestWord = "";
    let currentWord = "";
    
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        // if character is a letter add to current word
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            currentWord += char;
        } else {
            // compare and reset current word if space or punctuation is found
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
            currentWord = ""; // reset for next word
        }
    }
    
    if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
    }

    return longestWord;
}

const sentence = "The quick brown fox jumped over the lazy dog!";
console.log(findLongestWord(sentence)); 


//stringtointerger
const stringToInteger =(str)=> {
    let num = 0;
    let isNegative = false;
    let startIndex = 0;

    if (str[0] === '-') {
        isNegative = true;
        startIndex = 1; 
    }

    for (let i = startIndex; i < str.length; i++) {
        let digit = str[i].charCodeAt(0) - '0'.charCodeAt(0);
        num = num * 10 + digit;
    }

    return isNegative ? -num : num;
}



function isSubstring(s1, s2) {
    let len1 = s1.length;
    let len2 = s2.length;

    if (len2 > len1) return false; 

    for (let i = 0; i <= len1 - len2; i++) {
        let match = true;
        
        for (let j = 0; j < len2; j++) {
            if (s1[i + j] !== s2[j]) {
                match = false;
                break;
            }
        }

        if (match) return true; 
    }

    return false; // No match found
}



//find all sub string

function findAllSubstrings(str) {
    let length = str.length;

    for (let start = 0; start < length; start++) {
        let substring = ""; 

        for (let end = start; end < length; end++) {
            substring += str[end]; 
            console.log(substring);
        }
    }
}

findAllSubstrings("abc");


function stringToNumber(str) {
    let num = 0;
    let isNegative = false;
    let i = 0;

    // Handle negative numbers
    if (str[0] === '-') {
        isNegative = true;
        i = 1;
    }

    for (; i < str.length; i++) {
        const digit = str.charCodeAt(i) - '0'.charCodeAt(0);
        
        if (digit < 0 || digit > 9) {
            console.log("Invalid input");
            return NaN;
        }

        num = num * 10 + digit;
    }

    return isNegative ? -num : num;
}

console.log(stringToNumber("12345"));


function removeDuplicates(str) {
    let result = "";
    let seen = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!seen[char]) {
            result += char;
            seen[char] = true;
        }
    }

    return result;
}

console.log(removeDuplicates("hello"));


function mostFrequentLetter(str) {
    let frequency = {};
    let maxCount = 0;
    let mostFrequent = "";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // Only consider letters
        if (/[a-zA-Z]/.test(char)) {
            char = char.toLowerCase(); //  make case sensitive

            frequency[char] = (frequency[char] || 0) + 1;

            if (frequency[char] > maxCount) {
                maxCount = frequency[char];
                mostFrequent = char;
            }
        }
    }

    return mostFrequent;
}

console.log(mostFrequentLetter("hello world")); 