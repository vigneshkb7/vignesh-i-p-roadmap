def counts(str):
    counts = {}
    for s in range(len(str)):
        char = str[s]
        if counts.get(char) is None:
            counts[char] = 1
        else:
            counts[char] = counts.get(char) + 1
    return  counts

def compressString(s):
    countdict = counts(s)
    countkeys = list(countdict.keys())
    compressedString = ""
    for i in range(0 , len(countkeys)-1):
        compressedString += countkeys[i]
        compressedString += str(countdict[countkeys[i]])
    print(compressedString)


compressString('asnknifemcn')


