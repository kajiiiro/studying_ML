# from fastprogress import master_bar, progress_bar

from sklearn import datasets
from sklearn import svm
from sklearn.linear_model import LogisticRegression
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
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
columns = ["RM", "CHAS", "NOX", "DIS", "PTRATIO"]
X = X.loc[:, columns]
y = pd.Series(original["target"])
description = original["DESCR"]
# util.print_description(description, X, y)
util.print_description("", X, y)

#########################
# select model
#########################
# classifier = svm.SVC(gamma=0.001, C=100.)
classifier = LinearRegression(normalize=True)

#########################
# split data
#########################
X_train, X_test, y_train, y_test = train_test_split(
    X, y, train_size=0.8, random_state=1)

#########################
# train/predict data
#########################
classifier.fit(X_train, y_train)
y_pred = classifier.predict(X_test)
y_pred = pd.Series(y_pred)

#########################
# validate data
#########################
# regression
util.print_horizonval_line()
print("mean_squared_error", metrics.mean_squared_error(y_test, y_pred))
print("r2_score", metrics.r2_score(y_test, y_pred))
coefficient = pd.DataFrame({
    "name": columns,
    "coefficient": classifier.coef_
}).sort_values("coefficient", ascending=False)
print(coefficient)

# classification
# print(metrics.classification_report(y_test, y_pred))
