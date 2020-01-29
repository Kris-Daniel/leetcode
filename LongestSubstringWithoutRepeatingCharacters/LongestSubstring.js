var lengthOfLongestSubstring = function (s) {
    var max = 0;
    var symbols = "";
    for (var k = 0; k < s.length; k++) {
        for (var i = k; i < s.length; i++) {
            if (symbols.indexOf(s[i]) > -1) {
                symbols = "";
                break;
            }
            symbols += s[i];
            max = symbols.length > max ? symbols.length : max;
        }
        symbols = "";
    }
    return max;
};

console.log(lengthOfLongestSubstring("dvdf"));