## requires internet to be enabled

import numpy as np  # linear algebra
import pandas as pd  # data processing, CSV file I/O (e.g. pd.read_csv)
import json
import string
import gensim
import nltk
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfVectorizer
import re
import matplotlib.pyplot as plt
from io import StringIO
import urllib
# import PyDF2
import PyPDF4

id_ = '0704.0001'  # test

# def pull_content(id):
f = urllib.request.urlopen('https://arxiv.org/pdf/{}.pdf'.format(id)).read()
f = StringIO(f)
#reader = PyPDF4.PdfFileReader(f)
print(f)
