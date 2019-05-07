"""
  see: http://pandas.pydata.org/pandas-docs/stable/getting_started/10min.html
"""
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

plt.close("all")

s = pd.Series([1, 3, 5, np.nan, 6, 8])

dates = pd.date_range("20130101", periods=6)

df = pd.DataFrame(np.random.randn(6, 4), index=dates, columns=list("ABCD"))

df2 = pd.DataFrame(
    {
        "A": 1.0,
        "B": pd.Timestamp("20130102"),
        "C": pd.Series(1, index=list(range(4)), dtype="float32"),
        "D": np.array([3] * 4, dtype="int32"),
        "E": pd.Categorical(["test", "train", "test", "train"]),
        "F": "foo",
    }
)

# ts = pd.Series(np.random.randn(1000), index=pd.date_range("1/1/2000", periods=1000))
# ts = ts.cumsum()
# ts.plot()
df.plot()
plt.show()

print(df)
print(df.mean(1))

