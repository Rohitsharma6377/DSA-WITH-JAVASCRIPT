// // what is the last digit of an number 

// const lastDigit = (N)=>{
//     digit=N % 10;
//     console.log(`the last digit of this number is ${digit}`);

// }

// lastDigit(12);

// // remove the last digit of an number 

// const removeLastDigit = (N , D) =>{
// let result = 0;
// let multiple = 1;


// while(N > 0){
//     let digit = N % 10 ;
//     if(digit != D ){
//         result = result + digit * multiple;
//         multiple = multiple * 10;
//     }
//     N = (N - digit )/ 10; 
// }
// console.log(result);
// };

// removeLastDigit(123 , 3);

// // number to binary 

// const numberTobinary = (N) =>{
// let binary = 0 ; 
// let place = 1;

// while (N > 0){
//     let remainder = N % 2;
//     binary = binary + remainder * place;
//     place = place * 10;
//     N = (N - remainder)/2;

// }

// return binary;

// }

// console.log(numberTobinary(4));

// function binaryToDecimal(N){
//     let decimal = 0;
//     let place = 1;
//     while(N>0){
//         lastDigit = N % 10;
//         decimal = decimal + lastDigit * place;
//         place = place*2;
//         N = (N - lastDigit)/10;
//     }

//     return decimal;
// }

// console.log(binaryToDecimal(101));


//how many time 1 in banary number if we have decimal number

// function countOnes(n) {
//     let count = 0;

//     while (n > 0) {
//         if (n % 2 == 1) count++;
//         n = (n - (n % 2)) / 2; // Remove last bit
//     }
//     return count;
// }

// console.log(countOnes(13));


//find substring

// const findSubstring = (str)=>{
//     let result = [];
//     for(let i=0; i<str.length; i++){
//         for(let j = i+1; j <=str.length; j++){
//            result.push(str.substring(i,j));
//            console.log(result);
//         }
//     }
// }

// findSubstring("abc");
// hello world , world 

// const matchSubstring = (str1,str2)=>{
  
//     let len2= str2.length;
//     let len1= str1.length;
//     if (len1 <= len2)
//     return false
//     for(i = 0 ; i < len1 -len2 ; i++){
//         let j =0;
//         for (j=0; j <len2;j++){
//             if(str1[i+j]=! str2[i+j]){
//                 break 
//             }
//         }
//     }
//     console.log(true);
    
//     }
//   matchSubstring("hello ", "world");


//count vowels and constant

// const checkTypeOfAlphabat=(str)=>{
//     let vowels="aeiouAEIOU";
    
//     vowelsCount = 0; consonantCount=0;
//     for(let i=0 ; i <str.length; i++){
//         let char = str[i];
//       if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
//              if (isVowel(char, vowels)) {
//                  vowelsCount++;
//              } else {
//                  consonantCount++;
//              }
//          }
//     }
//         console.log("vowelsCountes - " , vowelsCount )
//         console.log("Constants Counts - " , consonantCount )
    
     
//  }
//    const isVowel = (char ,vowels)=>{
//        for (i=0; i <vowels.length; i++){
//            if(char === vowels[i]){
//                return true;
//            }
//        }
//    }
//  checkTypeOfAlphabat("rohit    ");

//revers string 

const revers_String = (str) =>{
    let string = '';

    for(i = str.length - 1; i >= 0; i--){
        string += str[i];
        console.log(string += str[i])
    }
    console.log(string);

}

revers_String("rohit")