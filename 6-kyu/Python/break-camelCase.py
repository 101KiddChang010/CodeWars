"""

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

"""

import re
def solution(s):
    newStr = re.findall('[a-zA-Z][^A-Z]*', s)
    return " ".join(newStr)
