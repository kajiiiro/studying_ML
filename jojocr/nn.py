# from fastprogress import master_bar, progress_bar

from sklearn import datasets
from sklearn import svm
from sklearn.neural_network import MLPRegressor
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn import metrics
import pandas as pd
import matplotlib.pyplot as plt
import util

# digits = datasets.load_digits()

# plt.gray()
# plt.matshow(digits.images[0])
# plt.show()

#########################
# initialize data
#########################
original = datasets.load_boston()
columns = original["feature_names"]
X = pd.DataFrame(data=original["data"], columns=columns)
targets = ["RM", "CHAS", "NOX", "DIS", "PTRATIO"]
X = X.loc[:, targets]
y = pd.Series(original["target"])
description = original["DESCR"]
# util.print_description("", X, y)

#########################
# select model
#########################
# see: https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPRegressor.html
classifier = MLPRegressor(
    hidden_layer_sizes=(100, 100),
    activation="relu",
    solver="adam",
    alpha=0.0001,
    batch_size=10,
    learning_rate="constant",
    learning_rate_init=0.0003,
    max_iter=300,
    shuffle=True,
    verbose=True,
    random_state=76
)

#########################
# split data
#########################
X_train, X_test, y_train, y_test = train_test_split(
    X, y, train_size=0.8, random_state=1)

scaler = StandardScaler()
scaler.fit(X_train)
X_train = scaler.transform(X_train)
X_test = scaler.transform(X_test)

#########################
# train/predict data
#########################
classifier.fit(X_train, y_train)
y_pred = classifier.predict(X_test)
y_pred = pd.Series(y_pred)

#########################
# validate data
#########################
util.print_horizonval_line()
print("mean_squared_error", metrics.mean_squared_error(y_test, y_pred))
print("r2_score", metrics.r2_score(y_test, y_pred))
# coefficient = pd.DataFrame({
#     "name": columns,
#     "coefficient": classifier.coefs_
# }).sort_values("coefficient", ascending=False)
# print(classifier.coefs_)
