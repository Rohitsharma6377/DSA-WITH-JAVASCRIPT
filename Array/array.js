// Write a function that flattens a nested array into a single array.

// const Array_change = (Arr) => {
//   const result = []; // this will hold the final flat array

// //   const flatten = (input) => {
// //     for (let i of input) {
// //       if (Array.isArray(i)) {
// //         flatten(i);
// //       } else {
// //         result.push(i);
// //       }
// //     }
// //   };

// //   flatten(Arr);  
// //   console.log(result); 
// //   return result;
// const flatten = (input)=>{
//     for (let i of input){
//         if (Array.isArray(i)){
//             flatten(i);
//         }else{
//             result.push(i);
//         }
//     }
// }
// flatten(Arr);
// console.log(result);
// return result;
// };



// const Arr = [1,[2,3,[4,5],6],7]

// Array_change(Arr);


const compress_string =(str)=>{
    result = "";
    count = 0;
    conpress_list = [];
    for(i=0 ; i < str.length; i++){
            result += i
           if (str[i] == str[i-1]){
            count +=1

           }else{
            conpress_list.push(str[i-1] + str(count))
            count = 1
           }
    }

    console.log(result);
    console.log(count);
    console.log(conpress_list);
};
const str = "aabcca";

compress_string(str)