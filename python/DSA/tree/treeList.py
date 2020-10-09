
# implement tree using list with left and right nodes [root,[left],[right]]

def BinaryTree(r):
    return [r, [], []]

def insertLeft(root,newBranch):
    left = root.pop(1)

    if(len(left)>1):
        root.insert(1, [newBranch, left, []])
    else:
        root.insert(1, [newBranch, [], []])
    return root

def insertRight(root, newBranch):
    right = root.pop(2)

    if(len(right)>1):
        root.insert(2,[newBranch,[],right])
    else:
        root.insert(2, [newBranch,[],[]])
    return root

def getRootval(root):
    return root[0]

def setRootval(root,newVal):
    root[0] = newVal

def getLeftChild(root):
    return root[1]

def getRightChild(root):
    return root[2]

r = BinaryTree(3)

insertLeft(r,5)
insertRight(r,9)

print(getRootval(r))
print(getLeftChild(r))
print(getRightChild(r))



