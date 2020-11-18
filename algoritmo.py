import itertools
import collections

# My Simple implementation of Levenshtein distance
def levenshteinD(string1, string2):
   """
>>> levenshteinD("AATZ", "AAAZ")
1
>>> levenshteinD("AATZZZ", "AAAZ")
3
   """
   m = len(string1)
   n = len(string2)
   table = [[0] * (n + 1) for _ in range(m + 1)]

   for i in range(m + 1):
       table[i][0] = i
   for j in range(n + 1):
        table[0][j] = j

   for i in range(1, m + 1):
        for j in range(1, n + 1):
            if string1[i - 1] == string2[j - 1]:
                table[i][j] = table[i - 1][j - 1]
            else:
                table[i][j] = 1 + min(table[i - 1][j], table[i][j - 1], table[i - 1][j - 1])

   return table[-1][-1]
levenshteinD("risk", "think")
