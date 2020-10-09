# 1) Linked list Insertion @ Front
# 2) Linked list insertion @ End
# 3) Linked list insertion @ specified location
# 4) Linked list deletion @ specified location
# 5) Linked list deletion by the value of the node
# 6) Linked list printing
# 7) Linked list length returning function
# 8) Searching a linked list
# 9) function to get Nth node in linkedlist
# 10) get middle of the linked list
# 11) remove duplicate from sorted list
# 12) remove duplicate from unsorted list

#Node class
class Node:
    def __init__(self, data):
        self.data = data # Assign data
        self.next = None # Initialize next as null

class Linkedlist:
    # function to initialize head
    def __init__(self):
        self.head = None

    # insertion of data @ first
    def insertFront(self,new_data):
        new_node = Node(new_data)
        new_node.next = self.head
        self.head = new_node

    # insertion of data @ end

    def insertEnd(self,data):
        new_Node = Node(data)
        temp = self.head
        while (temp.next):
            temp = temp.next
        temp.next = new_Node

    # insertion @ specific point

    def insertAt(self,at,data):
        new_node = Node(data)
        currentNode = self.head
        currentPosition = 0
        while True:
            if currentPosition == at:
                previousNode.next = new_node
                new_node.next = currentNode
                break
            previousNode = currentNode
            currentNode = currentNode.next
            currentPosition += 1

    # deletion @ specific point based on position or index
    def deleteNode(self,at):
        currentNode = self.head
        currentPosition = 0
        while True:
            if currentPosition == at:
                previousNode.next = currentNode.next
                currentNode.next = None
                break

            previousNode = currentNode
            currentNode = currentNode.next
            currentPosition += 1

    def deleteNodeByValue(self,at):
        currentNode = self.head
        while True:
            if currentNode.data == at:
                previousNode.next = currentNode.next
                currentNode.next = None
                break

            previousNode = currentNode
            currentNode = currentNode.next




    # this function to print the list
    def printList(self):
       temp = self.head
       while (temp):
            print(temp.data)
            temp = temp.next

    # function returns the length of linked list
    def listLength(self):
        currentNode = self.head
        length = 0
        while currentNode is not None:
            length += 1
            currentNode = currentNode.next
        return length

    # searching a linked list to Approach 1

    def search(self, x):
        #Initialise the current head
        temp = self.head
        # loop till is not equal to None
        while(temp != None):
            # return true if the temp data is x
            if(temp.data == x):
                return True
            temp = temp.next
        return False

    # searching linked list in iterative Approach 2
    def searchIterative(self,li,key):
        if(li is None):
            return  False
        if(li.data == key):
            return True
        return  self.searchIterative(li.next,key)

    def getNthNode(self,index):
        count= 0
        temp = self.head
        while(temp.next):
            if(count == index):
                return temp.data
        count = +1
        temp = temp.next
    # increase the slow pointer by one
    # increase the fast pointer by two
    # when the fast.next is None
    # return the slow.data
    def getMiddleOf(self):
        slow = self.head
        fast = self.head
        while(slow and fast and fast.next):
            slow = slow.next
            fast = fast.next.next
        return slow.data

    # removing duplicates from a sorted linked list
    # this only works for sorted array

    def removeDuplicate(self):
        temp = self.head
        if temp is None:
            return 0
        while temp.next is not None:
            if temp.data == temp.next.data:
                new = temp.next.next
                temp.next = None
                temp.next = new
            else:
                temp = temp.next
        return self.head

    # removing duplicates from a unsorted linked list
    # this works for all the example

    def removeDuplicateFromUnsorted(self):
        s = set()
        temp = self.head
        if temp is None:
            return 0
        while temp.next is not None:
            if (temp.data in s):
                previousNode.next = temp.next
                temp.next = None
            else:
                s.add(temp.data)
                previousNode = temp
                temp = temp.next
        return self.head



list = Linkedlist()


list.head = Node(1)

second = Node(2)
third = Node(3)

list.head.next = second
second.next = third

list.insertFront(3)
list.insertFront(5)
list.insertFront(9)
list.insertEnd(7)
list.insertAt(2,0)

list.printList()

print('-------')
list.deleteNodeByValue(0)
list.insertEnd(8)
list.printList()

print('----length---',list.listLength())

print('---middle', list.getMiddleOf())

list.removeDuplicateFromUnsorted()
print('-----removed dupliucates')
list.printList()




