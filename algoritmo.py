import itertools
import collections

# My Simple implementation of Levenshtein distance
def levenshtein_distance(string1, string2):
   """
>>> levenshtein_distance("AATZ", "AAAZ")
1
>>> levenshtein_distance("AATZZZ", "AAAZ")
3
   """

distance = 0