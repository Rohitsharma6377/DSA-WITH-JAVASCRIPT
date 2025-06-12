// Write a function that flattens a nested array into a single array.

const Array_change = (Arr) => {
  const result = []; // this will hold the final flat array

//   const flatten = (input) => {
//     for (let i of input) {
//       if (Array.isArray(i)) {
//         flatten(i);
//       } else {
//         result.push(i);
//       }
//     }
//   };

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



const Arr = [1,[2,3,[4,5],6],7]

Array_change(Arr);