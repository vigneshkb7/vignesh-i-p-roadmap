# Linear Search in Python

# Linear search is used in array with <100 elements

# Time complexity O(n) where n is the length of the array

# Space complexity O(1)

# Linear search is the simplest searching algorithm that searches for an element in a list in sequential order


def linearSearch(array, n, x):

    # Going through array sequencially
    for i in range(0, n):
        if (array[i] == x):
            return i
    return -1


array = [2, 4, 0, 1, 9]
x = 1
n = len(array)
result = linearSearch(array, n, x)
if(result == -1):
    print("Element not found")
else:
    print("Element found at index: ", result)