const containsDuplicate = (arr)=>{
for(let i =0; i <= arr.length; i++){
    for(let j =i +1; j <= arr.length; j++){
       if(arr[i] === arr[j]){
        return true
       }
       
    }
}
}

console.log(containsDuplicate([1,2,3,4,2]))