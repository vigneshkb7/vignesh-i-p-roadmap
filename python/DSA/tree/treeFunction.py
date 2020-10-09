class Node:
    def __init__(self,item):
        self.item = item
        self.left = None
        self.right = None

def calculateDepth(root):
    d = 0
    while(root is not None):
        d+=1
        node = node.left

    return d

def isFullTree(root):
    if root is None:
        return True
    if root.left is None and root.right is None:
        return True
    if root.left is not None and root.right is not None:
        return (isFullTree(root.left) and isFullTree(root.right))

    return False

def isPerfectTree(root,d,level = 0):
    if root is None:
        return True
    if root.left is None and root.right is None:
        return ( d == level+1)
    if root.left is None or root.right is None:
        return False

    return (isPerfectTree(root.left,d,level+1) and isPerfectTree(root.right,d,level+1))

    return False

root = Node(1)

print(isFullTree(root))

