def selectionSort(arr):
    for i in range(len(arr)):
        minindex = i;
        for j in range(i+1, len(arr)):
            if arr[j] < arr[minindex]:
                minindex = j
        (arr[i],arr[minindex]) = (arr[minindex],arr[i])
data = [-2,-45,10,3,0,-5]
selectionSort(data)
print(data)

# small list to be sorted
#
# checking all elements is compulsory