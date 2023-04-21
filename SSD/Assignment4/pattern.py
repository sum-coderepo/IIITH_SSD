def print_pattenr1():
    padding = 11
    lengthtop = 24
    print(" " * padding, "-" * lengthtop)

    for i in range(1, 3):
        print(" " * (padding - (i + 1)), "/", " " * (lengthtop - 2 + (2 * i)), "\\")

    print(" " * (padding - 4), "+", "-" * (lengthtop + 4), "+")


def print_pattenr2():
    padding = 11
    lengthtop = 24
    print(" " * padding, "-" * lengthtop)

    for i in range(1, 3):
        print(" " * (padding - (i + 1)), "/", " " * (lengthtop - 2 + (2 * i)), "\\")

    for i in range(1, 3):
        print(" " * ((padding - 4) + i), "\\", " " * (lengthtop + 4 - (2 * i)), "/")

    print(" " * padding, "-" * lengthtop)

    for i in range(1, 3):
        print(" " * ((padding - 4) + i), "\\", " " * (lengthtop + 4 - (2 * i)), "/")
    print(" " * padding, "-" * lengthtop)

    print(" " * (padding - 1), "+", "-" * (lengthtop - 1), "+")


def print_pattenr3():
    padding = 11
    lengthtop = 24
    print(" " * padding, "-" * lengthtop)

    for i in range(1, 3):
        print(" " * (padding - (i + 1)), "/", " " * (lengthtop - 2 + (2 * i)), "\\")



    print(" " * (padding - 4), "|", " " * (int(lengthtop/2) - 2), "STOP", " " * int(lengthtop/2),  "|")

    for i in range(1, 3):
        print(" " * ((padding - 4) + i), "\\", " " * (lengthtop + 4 - (2 * i)), "/")

    print(" " * padding, "-" * lengthtop)


print_pattenr1()
print_pattenr2()
print_pattenr3()
