class Solution:
    def missingNumber(nums):
        return set(range(1,len(nums)+1))-set(nums)


print(Solution.missingNumber([1,2,2,3,4,6,7]))