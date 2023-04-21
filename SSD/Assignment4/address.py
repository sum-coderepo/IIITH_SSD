import sys
from tabulate import tabulate
import csv

count = 1
names = []

new_name = ''
dict_map = {1: 'First Name', 2: 'Last Name', 3: 'Address', 4: "City", 5: "State", 6: "Zip", 7: "Contact Num"}
Address = {}
col_list = ["FirstName", "LastNAme", 'Address', "City", "State", "Zip", "Contact Num"]


def printUser(Key):
    details = Address[Key]
    for index, item in enumerate(details):
        print(col_list[index], ": ", item)


def printTabular():
    listVals = list(Address.values())
    print(tabulate(listVals, headers=col_list, tablefmt='orgtbl'))


def AddUser():
    global Address, count
    fname = input('''Enter First Name:''')
    lname = input('''Enter Last Name:''')
    Addr = input('''Enter Address:''')
    city = input('''Enter City:''')
    state = input('''Enter State:''')
    zip = input('''Enter Zip:''')
    contact = input('''Enter Contact Number :''')

    Address[count] = [fname, lname, Addr, city, state, zip, contact]

    print('\n', "User Added")
    printUser(count)
    count = count + 1


def searchUser(FieldNum, fieldValue):
    for key, value in Address.items():

        if value[int(FieldNum) - 1] == fieldValue:
            return int(key)

    return "No Value Found"


# Start a loop that will run until the user enters 'quit'.
while new_name != 'quit':
    new_name = input('''Enter Operation 
                        1. Add User
                        2. Search and update or Remove
                        3. Print AddressBook
                        4. Upload from csv file
                        5. 'quit' 
                        ''')
    new_name = int(new_name)

    if new_name == 1:
        AddUser()
    if new_name == 2:
        fieldNum = input('''Press the field you want to Search:
                1. First Name
                2. Last Name
                3. Address
                4. city
                5. state
                6. zip
                7. Contact Number
                ''')
        field = int(fieldNum)

        fieldValue = input("Enter Value: ")

        SearchValue = searchUser(fieldNum, fieldValue)

        if SearchValue in Address:
            printUser(SearchValue)
            flag = input('''Enter Operation: 
                            1. Update
                            2. Remove
                            3. Back
                            ''')
            flag = int(flag)

            if (flag == 1):

                flag = input('''Press the field you want to update:
                1. First Name
                2. Last Name
                3. Address
                4. city
                5. state
                6. zip
                7. Contact Number
                ''')

                flag = int(flag)
                newValue = input('''Enter New {0} : '''.format(dict_map[flag]))

                value = Address[SearchValue]
                value[int(flag) - 1] = newValue
                Address[SearchValue] = value
                print('\n', "New Values are: ")
                printUser(SearchValue)

            elif (flag == 2):
                confirmnFlag = input('''Above Record will be deleted. Please confirm with 'Y' or 'YES
                ''')
                if (confirmnFlag.upper() == "Y") | (confirmnFlag.upper() == "YES"):
                    del Address[SearchValue]
                    print(" Record Deleted")
                    count = count - 1
                else:
                    print("Record not deleted. Thanks for the confirmation")

        else:
            print("Address not found")

    if new_name == 3:
        printTabular()

    if new_name == 4:
        path = input('''Enter file path: ''')
        with open(path, mode='r') as inp:
            reader = csv.reader(inp)

            for rows in reader:
                Address[count] = rows[0:]
                count = count + 1

            inp.close()

    if new_name == 5:
        print("Thanks for visiting. See you again.")
        sys.exit(0)
