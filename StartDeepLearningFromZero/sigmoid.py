import matplotlib.pyplot as plt
import numpy as np
import math

def sigmoid(x):
    return 1 / (1 + (math.e ** -x))

x = np.linspace(-10, 10, 100)  # Create a list of evenly-spaced numbers over the range
plt.plot(x, sigmoid(x))       # Plot the sine of each x point
plt.show()                   # Display the plot
