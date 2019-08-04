# from fastprogress import master_bar, progress_bar

from sklearn import datasets
from sklearn import svm
from sklearn.linear_model import LogisticRegression
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import PolynomialFeatures
from sklearn import metrics
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import util

#########################
# initialize data
#########################
original = datasets.load_boston()
columns = original["feature_names"]
X = pd.DataFrame(data=original["data"], columns=columns)
# targets = ["RM", "CHAS", "NOX", "DIS", "PTRATIO"]
targets = columns
X = X.loc[:, targets]
y = pd.Series(original["target"])
description = original["DESCR"]

# util.print_description(description, X, y)
util.print_description("", X, y)


X = PolynomialFeatures(degree=2).fit_transform(X)

# # グラフのスタイルを指定
# sns.set(style='whitegrid', context='notebook')
# # 変数のペアの関係をプロット
# sns.pairplot(X)
# plt.show()

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
# coefficient = pd.DataFrame({
#     "name": targets,
#     "coefficient": classifier.coef_
# }).sort_values("coefficient", ascending=False)
# print(coefficient)

# classification
# print(metrics.classification_report(y_test, y_pred))
