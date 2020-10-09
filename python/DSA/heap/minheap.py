# min heap is the one which has the smallest element as root  and heap is a complete ninary tree
# mapping the elements in heap into an array is trivial if a node is stored a index k, then its left child is stored in
# index 2k+1 and its right child is stored in 2k+2
# arr[(i-1)/2] returns its parent node
# arr[(2*i) +1] returns its left child
# arr[(2*i) +2] returns its right child
# getMin() time complexity O(1)
# removeMin() time complexity O(Log n)
# insert() time complexity O(Log n)

import sys

class MinHeap:
    def __init__(self, maxsize):
        self.maxsize = maxsize
        self.size = 0
        self.Heap = [0]*(self.maxsize+1)
        self.Heap[0] = -1 * sys.maxsize
        self.FRONT = 1

    def parent(self, pos):
        return pos//2

    def leftChild(self, pos):
        return 2*pos

    def rightChild(self, pos):
        return (2*pos)+1

    def isLeaf(self, pos):
        if pos >= (self.size//2) and pos <= self.size:
            return True
        return False

    def swap(self, fpos, spos):
        self.Heap[fpos], self.Heap[spos] = self.Heap[spos], self.Heap[fpos]

    def print(self):
        for i in range(1, (self.size//2)+1):
            print("PARENT"+str(self.Heap[i])+"LEFT CHILD"+str(self.Heap[2*i])+"RIGHT CHILD"+str(self.Heap[2*i+1]))

    def insert(self,element):
        if self.size > self.maxsize:
            return
        self.size += 1
        self.Heap[self.size] = element
        current = self.size

        while self.Heap[current] < self.Heap[self.parent(current)]:
            self.swap(current, self.parent(current))
            current = self.parent(current)

    def minHeapify(self, pos):

        # If the node is a non-leaf node and greater
        # than any of its child
        if not self.isLeaf(pos):
            if (self.Heap[pos] > self.Heap[self.leftChild(pos)] or
                    self.Heap[pos] > self.Heap[self.rightChild(pos)]):

                # Swap with the left child and heapify
                # the left child
                if self.Heap[self.leftChild(pos)] < self.Heap[self.rightChild(pos)]:
                    self.swap(pos, self.leftChild(pos))
                    self.minHeapify(self.leftChild(pos))

                    # Swap with the right child and heapify
                # the right child
                else:
                    self.swap(pos, self.rightChild(pos))
                    self.minHeapify(self.rightChild(pos))

    def remove(self):

        popped = self.Heap[self.FRONT]
        self.Heap[self.FRONT] = self.Heap[self.size]
        self.size-= 1
        self.minHeapify(self.FRONT)
        return popped

    def minHeap(self):

        for pos in range(self.size//2, 0, -1):
            self.minHeapify(pos)

            # Driver Code
if __name__ == "__main__":

    print('The minHeap is ')
    minHeap = MinHeap(15)
    minHeap.insert(5)
    minHeap.insert(3)
    minHeap.insert(17)
    minHeap.insert(10)
    minHeap.insert(84)
    minHeap.insert(19)
    minHeap.insert(6)
    minHeap.insert(22)
    minHeap.insert(9)
    minHeap.minHeap()

    minHeap.print()
    print("The Min val is " + str(minHeap.remove()))



