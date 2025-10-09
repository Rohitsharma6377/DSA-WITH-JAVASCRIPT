const threeSum = (arr)=>{
    for(let i =0; i<arr.length;i++){
        for(let j = i +1; j<arr.length; j++){
            for(let k = j+1; k <arr.length; k++){
                sum = arr[i] + arr[j] + arr[k]
                return sum
            }
        }
    }
    console.log(sum)
}

console.log(threeSum([1,2,3]))