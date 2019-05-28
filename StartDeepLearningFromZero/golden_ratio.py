import matplotlib.pyplot as plt
import numpy as np
import math

def golden_ratio(x):
    return ((1 + math.sqrt(5)) / 2) * x

x = np.linspace(-10, 10, 100)  # Create a list of evenly-spaced numbers over the range
plt.plot(x, golden_ratio(x))       # Plot the sine of each x point
plt.show()                   # Display the plot
