class Solution {
public:
    int titleToNumber(string columnTitle) {
        int result = 0;
        for (char c : columnTitle) {
            // Convert the character to its corresponding number (1 for 'A', 2 for 'B', ..., 26 for 'Z')
            result = result * 26 + (c - 'A' + 1);
        }
        return result;
    }
};
