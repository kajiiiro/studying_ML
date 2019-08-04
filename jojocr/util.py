
def print_horizonval_line():
    print("***********************************")


def print_description(description, X, y):
    print_horizonval_line()
    print(description)
    print_horizonval_line()
    print("X.describe")
    print(X.describe())
    print("y.describe")
    print(y.describe())
