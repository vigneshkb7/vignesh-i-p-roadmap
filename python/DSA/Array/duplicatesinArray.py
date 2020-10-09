class Solution:
    def findDuplicates( nums) -> [int]:
        hashmap = {}
        duplicates = []
        for num in nums:
            if num not in hashmap:
                hashmap[num] = 1
            else:
                duplicates.append(num)
        return duplicates;

print(Solution.findDuplicates([1,2,3,4,3,4,5,6,7,8,8]))