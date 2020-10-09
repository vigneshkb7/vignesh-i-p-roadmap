# approach 1
# time o(n)
# space o(1)

def rotLeft(a,b):
    for i in range(0,b):
        temp = a[0]
        a.remove(temp)
        a.append(temp)
    return a

# approach 2
# time O(1)
# space O(1)

# def lefRotate(a,d):
#     return (a[d:]+a[:d]) [6,7] + [1,2,3,4,5] indexing concept with range

print(rotLeft([1,2,3,4,5,6,7],5))
