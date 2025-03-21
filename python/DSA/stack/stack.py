class Stack:
    def __init__(self):
        self.items = []

    def check(self):
        return self.items == []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def peek(self):
        return self.items[len(self.items)-1]

    def seeitem(self):
        print(self.items)

    def size(self):
        return len(self.items)

s = Stack()
print(s.check());

s.push(2)

s.push(6)
s.seeitem()
print(s.pop())

