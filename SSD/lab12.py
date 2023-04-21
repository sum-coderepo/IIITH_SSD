import csv
i = 0
dic = {}
with open("mat.txt") as fd:
    rd = csv.reader(fd, delimiter="\t",  quotechar='"')
    lineNum = rd.line_num
    lst = []
    for row in rd:
            lst.append(row)
            i = i+1
            print("i is ", i)
            if (i%42 == 0):
                print(lst)
                dic[int(i/42)] = lst
                print(dic[1])
                lst = []

for k,v in dic.items():
    print(k,":", v)
