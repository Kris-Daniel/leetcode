var LongestPalindromicSubstring = function (s) {
    var len = s.length;
    var start = 0;
    var end = 1;
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + end - start; j < len; j++) {
            for (var m = i, n = j, isPalindrome = true; (m < n) && (isPalindrome = !(s[m++] != s[n--])); )
                ;
            if (isPalindrome) {
                if (end - start < j + 1 - i) {
                    start = i;
                    end = j + 1;
                }
            }
        }
    }
    return s.slice(start, end);
};

console.log(LongestPalindromicSubstring(""));