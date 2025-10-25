def twoSum(nums, target):
    total = []
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                total.append(nums[i])
                total.append(nums[j])
                return total  # return immediately when found
    return []  # return empty if no pair found


print(twoSum([1, 2, 3, 4, 5], 9))  # Output: [4, 5]
