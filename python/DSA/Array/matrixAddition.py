x = [[1,2,3],
     [4,8,7],
     [4,7,8]]
y = [[10 ,6,3],
     [4,8,7],
     [4,3,8]]

result = [[0,0,0],
          [0,0,0],
          [0,0,0]]
# iterate throught x
for i in range(len(x)):
    for j in range(len(x[0])):

        result[i][j] = x[i][j]+y[i][j]

for i in result:
    print(i)


# list comprehension ==> second efficient approach
# result = [[x[i][j]+y[i][j] for j in range(len(x[0]))] for i in range(len(x))]

