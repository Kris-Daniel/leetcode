var lengthOfLongestSubstring = function (s) {
    var max = 0;
    var symbols = [];
    for (var k = 0; k < s.length; k++) {
        for (var i = k, j = 0; i < s.length; i++) {
            if (symbols.indexOf(s[i]) == -1) {
                max = ++j > max ? j : max;
            } else {
                symbols = [];
                max = j > max ? j : max;
                j = 0;
            }
            symbols.push(s[i]);
        }
        symbols = [];
    }
    return max;
};

console.log(lengthOfLongestSubstring("dvdf"));