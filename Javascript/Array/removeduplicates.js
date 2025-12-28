const removeDuplicates = (nums) => {
  if (nums.length === 0) return [];

  const unique = [nums[0]]; // first element is always unique

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      unique.push(nums[i]);
    }
  }

  return unique;
};

console.log(removeDuplicates([1, 1, 2, 2, 3]));
