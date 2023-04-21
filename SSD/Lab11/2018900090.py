import csv
filtered = []

with open('lab_11_data.csv', mode='r') as file:
    next(file)
    csvFile = csv.reader(file)

    for lines in csvFile:
        new = lines[:-6]
        filtered.append(new)
        print(new)

negative_filter = list(filter(lambda x: float(x[-1]) >= -3, filtered))
print("----------------------------------------------------------------")
print(negative_filter)
#print(list(zip(*negative_filter))[1])
open_sum = list(map(lambda idx: float(idx[1].replace(",", "")), negative_filter))
open_avg = sum(open_sum)/len(open_sum)

high_sum = list(map(lambda idx: float(idx[2].replace(",", "")), negative_filter))
high_avg = sum(high_sum)/len(high_sum)

low_sum = list(map(lambda idx: float(idx[3].replace(",", "")), negative_filter))
low_avg = sum(low_sum)/len(low_sum)
print(open_avg, high_avg,low_avg )

first = input('''Enter First charcter: 
            ''')
select_stocks = list(filter(lambda x: x[0][0] == first, negative_filter))
print(select_stocks)

with open(r'stock_output.txt', 'w') as fp:
    for item in select_stocks:
        fp.write("%s\n" % " ".join(item))


with open(r'avg_output.txt', 'w') as fp:
        output = str(open_avg) + "\n" + str(high_avg) + "\n" + str(low_avg)
        fp.write(output)
print('Done')

