var twoSum = function(nums, target) {
    let total = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                total.push(nums[i], nums[j]);
                return total; // return immediately when found
            }
        }
    }
    return []; // return empty if no pair found
};

console.log(twoSum([1, 2, 3, 4, 5], 9)); // Output: [3, 4]
