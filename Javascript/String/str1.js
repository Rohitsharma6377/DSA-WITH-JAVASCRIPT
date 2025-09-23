// reverse string without using buil in function here


const reverseString = (str)=>{
    let reverseString = "";

    for (let i =0; i < str.length; i++){
        reverseString = str[i] + reverseString;
    }
    return reverseString;
}

console.log(reverseString("hello"));