/*

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

*/

// Code passed "test", but not "attempt" phase.

#include <cstdint>
#include <iostream>
#include <cmath>
#include <string>

using namespace std;

string add_binary(uint64_t a, uint64_t b) {
    int dec = a + b;
    int divide = 1, remain;
    string result = "";
    
    while (divide != 0) {
        divide = dec / 2;
        remain = dec % 2;
        
        dec = divide;
        result.insert(0, to_string(remain));
    }
    return result;
}
