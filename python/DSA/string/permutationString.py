def counts(str):
    counts = {}
    for s in range(len(str)):
        char = str[s]
        if counts.get(char) is None:
            counts[char] = 1
        else:
            counts[char] = counts.get(char) + 1
    return  counts


def permutationString(a,b):
    a = a.strip()
    b = b.strip()
    aCount = counts(a)
    bcount = counts(b)

    if(aCount == bcount):
        print("Possible combination")
    else:
        print("Impossible combination")


data = permutationString('hellow','hellow')



