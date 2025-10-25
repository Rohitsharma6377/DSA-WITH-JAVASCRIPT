def removeDuplicates(nums):
    if len(nums) == 0:
        return []
    
    unique = [nums[0]]  # start with first element
    
    for i in range(1, len(nums)):
        if nums[i] != nums[i - 1]:
            unique.append(nums[i])  # add only if not duplicate
    
    return unique

print(removeDuplicates([1, 1, 2, 2, 3]))
