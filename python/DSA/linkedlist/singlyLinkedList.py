class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def listLength(self):
        currentNode = self.head
        length = 0
        while currentNode is not None:
            length += 1
            currentNode = currentNode.next
        return length

    def isListEmpty(self):
        if self.head is None:
            return True
        else:
            return False


    def insertHead(self, headNode):
        currentHeadNode = self.head
        self.head = headNode
        self.head.next = currentHeadNode

    def insert(self, newNode):
        if self.head is None:
            self.head = newNode
        else:
            lastNode = self.head
            while True:
                if lastNode.next is None:
                    break
                lastNode = lastNode.next
            lastNode.next = newNode

    def insertBetween(self, position, newNode):
        if position < 0 or position > self.listLength():
            print('position is wrong')
            return
        if position == 0:
            self.insertHead(newNode)
        currentNode = self.head
        currentPosition = 0
        while True:
            if currentPosition == position:
                previousNode.next = newNode
                newNode.next = currentNode
                break
            previousNode = currentNode
            currentNode = currentNode.next
            currentPosition += 1
    def deleteAt(self, position):
        currentNode = self.head
        currentPosition = 0
        while True:
            if currentPosition == position:
                previousNode.next = currentNode.next
                currentNode.next = None
                break

            previousNode = currentNode
            currentNode = currentNode.next
            currentPosition += 1
    def deleteLastNode(self):
        currentNode = self.head
        while True:
            if currentNode.next is not None:
                previousNode = currentNode
                currentNode = currentNode.next
            else:
                previousNode.next = None
                break

    def display(self):
        currentNode = self.head
        while True:
            if currentNode is None:
                break
            print(currentNode.data)
            currentNode = currentNode.next


firstNode = Node("vignesh")

linkedList = LinkedList()
linkedList.insert(firstNode)

secondNode = Node("balaji")
linkedList.insert(secondNode)

thirdNode = Node("konikollu")
linkedList.insertHead(thirdNode)

fourthNode = Node("xxx")
linkedList.insertBetween(2,fourthNode)

linkedList.deleteAt(1)
linkedList.display()


