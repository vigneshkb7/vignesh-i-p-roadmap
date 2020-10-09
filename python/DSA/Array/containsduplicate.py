class Solution:
    def containsDuplicate(num) -> bool:
        set_list = set(num)
        if len(set_list) < len(num):
            return True
        else:
            return False



print(Solution.containsDuplicate([1,2,3,4,3,4]))
