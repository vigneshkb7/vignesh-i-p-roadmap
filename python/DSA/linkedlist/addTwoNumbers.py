class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# list l1 and l2 [1,2,3] [1,2,3] ==> [2,4,6]
class Solution:
    def addTwoNumbers(self, l1, l2):

        str_l1, str_l2 = '', ''
        while l1:
            str_l1 += str_l1(l1.val)
            l1 = l1.next
        while l2:
            str_l2 += str_l2(l2.val)
            l2 = l2.next
        int_l1 = int(str_l1[::-1])
        print(int_l1)
        int_l2 = int(str_l2[::-1])

        return ListNode(map(int, str(int_l1+int_l2)[::-1]))

l1 = ListNode([1,2,3])
l2 = ListNode([1,2,3])

sol = Solution()
sol.addTwoNumbers(l1, l2)