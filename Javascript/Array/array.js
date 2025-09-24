// // Write a function that flattens a nested array into a single array.

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

//   flatten(Arr);  
//   console.log(result); 
//   return result;
const flatten = (input)=>{
    for (let i of input){
        if (Array.isArray(i)){
            flatten(i);
        }else{
            result.push(i);
        }
    }
}
flatten(Arr);
console.log(result);
return result;
};



// const Arr = [1,[2,3,[4,5],6],7]

Array_change(Arr);


// 1 to 5 print
const arr = [1, 2, 4, 3, 5];

for(let i =0; i < arr.length; i++){
    
    console.log(arr[i]);
    
}

//aFind the sum of all numbers in an array [2, 5, 8, 1, 4].

const arr1 = [1, 2, 4, 3, 5];

   let sum = 0;
for(let i = 0; i <arr1.length; i++)(
    
   
   sum = sum + arr1[i]
        
)
    console.log(sum)

    // which element is big 
    // Find the largest number in an array [12, 45, 7, 89, 34]

const arr2 = [12, 45, 7, 89, 34]

let max = arr2[0];

for ( let i =0; i <arr2.length; i++){
    if(arr2[i]>max){
        max = arr[i]
    }
}
    console.log(max)
