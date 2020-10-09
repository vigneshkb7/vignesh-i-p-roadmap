# 1) detect loop in linked list
# 2) detect loop length in linked list if loop exists


class Node:
    def __init__(self,data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def push(self,newData):
        newNode = Node(newData)
        newNode.next = self.head
        self.head = newNode
    # Approach 1

    def detechCycle(self):
        s = set()
        temp = self.head
        while(temp):
            if(temp in s):
                print(temp)
                return True
            s.add(temp)
            temp = temp.next
        return False

    # Approach 2
    # Floyd cycle finding algorithm traversing the linkedlist with two pointers
    # Move one pointer slow by one and another fast by two
    # if two pointers meet in same then there is loop
    def detectLoop(self):
        slow_p = self.head
        fast_p = self.head
        while(slow_p and fast_p and fast_p.next):
            slow_p = slow_p.next
            fast_p = fast_p.next.next
            if slow_p == fast_p:
                return True
        return False

    # loop length is detected when if condition is satisfied and running a while loop incrementing the count variable.
    def detectLoopLength(self):
        if self.head is None:
            return 0
        slow_p = self.head
        fast_p = self.head
        flag = 0
        while(slow_p and slow_p.next and fast_p and fast_p.next and fast_p.next.next):
            slow_p = slow_p.next
            fast_p = fast_p.next.next

            if slow_p == fast_p and flag!=0:
                count = 1
                slow_p = slow_p.next
                while(slow != fast):
                    slow_p = slow_p.next
                    count += 1

                return count
        return 0







llist = LinkedList()
llist.push(2)
llist.push(5)
llist.push(7)

llist.head.next.next.next = llist.head;

if(llist.detechCycle()):
    print("Loop found")
else:
    print("No Loop Found")
