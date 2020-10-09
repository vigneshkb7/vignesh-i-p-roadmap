def uniqueString(str):
    for i in range(len(str)):
        print(str[i])
        idx = str.find(str[i], i+1, -1)
        if idx >= 0:
            return False
        else:
            continue
    return True

res = uniqueString('hello')

print(res)

# second approach

def isUnique(st):
    if len(st) > 256:
        return False
    charset = [False]*128
    for i in range(0,len(st)):
        #Find ASCII Value and check if it exists in set
        val = ord(st[i])
        if charset(val):
            return False
    return True