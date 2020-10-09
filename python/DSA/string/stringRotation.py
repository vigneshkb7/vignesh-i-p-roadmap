import string

def isRotationPossible(str1,str2):
    if(len(str1) != len(str2)):
        return False
    str1 = str1.lower()
    str2 = str2.lower()

    dict1 = dict.fromkeys(list(string.ascii_lowercase),0)
    dict2 = dict.fromkeys(list(string.ascii_lowercase),0)

    for i in range(len(str1)):
        dict1[str1[i]] += 1
        dict2[str2[i]] += 1
    return dict1 == dict2


print(isRotationPossible('watterbottle','tlewatterbot'))


print(isRotationPossible('watterbottls','tlewatterbot'))



# second approach
#
# say add added=  str1+str2
#
# str2.substring(added)


# Time complexity O(N) constant