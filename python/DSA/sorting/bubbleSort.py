def bubbleSort(arr):
    # run loops two times : one for walking throught the array
    # and other for comparison
    for i in range(len(arr)):
       for j in range(0,len(arr)-i-1):
           if arr[j] > arr[j+1]:
               (arr[j],arr[j+1])=(arr[j+1],arr[j])


data = [-2,-45,10,3,0,-5]
bubbleSort(data)
print(data)


# def bubbleSort(arr):
#     # run loops two times : one for walking throught the array
#     # and other for comparison
#     swapped = True
#
#     for i in range(len(arr)):
#         for j in range(0,len(arr)-i-1):
#             if arr[j] > arr[j+1]:
#                 (arr[j],arr[j+1])=(arr[j+1],arr[j])
#                 swapped = False
#         if swapped:
#             break



