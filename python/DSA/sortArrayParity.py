class Solution:
    def sortArrayByParity(self, A):
        A.sort(key = lambda x: x % 2)
        return A

sol = Solution()
print(sol.sortArrayByParity([3,4,5,6,7,8]));