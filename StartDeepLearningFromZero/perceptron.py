import numpy as np

x = np.array([0, 1])
w = np.array([0.5, 0.5])
b = -0.7

def perceptron(x, w, b):
    if (b + np.sum(w * x)) > 0:
        return 1
    else:
        return 0

def AND(x1, x2):
    x = np.array([x1, x2])
    w = np.array([0.5, 0.5])
    b = -0.7
    return perceptron(x, w, b)

def NAND(x1, x2):
    x = np.array([x1, x2])
    w = np.array([-0.5, -0.5])
    b = 0.7
    return perceptron(x, w, b)

print(perceptron(x, w, b))