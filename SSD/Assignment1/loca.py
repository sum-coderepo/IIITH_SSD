def lucas(n):

    # Base cases
    if n == 0:
        return 2;
    if n == 1:
        return 1;

    # recurrence relation
    return lucas(n - 1) + lucas(n - 2);

# Driver code to test above methods
n = 27;
print(lucas(n));
