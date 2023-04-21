from collections import Counter


def calc():
    itr = input()
    value = int(input())
    length = len(itr)
    print(len(set(itr)))

    for i in range(length-(value-1)):
        sub = itr[i: value +i]
        print(len(set(sub)))



calc()
