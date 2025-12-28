// 3️⃣ Move Zeroes

// Difficulty: Easy
// Concept: Swapping using two pointers
// 📘 LeetCode #283
// 🧩 Example: [0,1,0,3,12] → [1,3,12,0,0]
// 👉 One pointer scans, the other marks next non-zero position.

const moveZero=(nums)=>{
    newArr = [];
    for (i=0; i<nums.length; i++){
        if(nums[i]===0){
            newArr.push(nums[i])
        }else(
            newArr.unshift(nums[i])
            )
    }
    return newArr
    
}

console.log(moveZero([0,1,0,3,12]))
