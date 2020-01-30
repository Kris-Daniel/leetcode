var LongestPalindromicSubstring = function (s) {
    if(s.length <= 1) return s;
    var result = s[0];
    var len = s.length;
    var max = 0;
    var endLoop = false;
    for (var i = 0; i <= len - 1; i++) {
        if(endLoop) break;
        for(var j = len - 1; j > i; j--) {
            if(s[i] == s[j]) {
                if(max < j - i) {
                    max = j - i;
                    result = s.slice(i, j + 1);
                    endLoop = true;
                    break;
                } else {
                    break;
                }
            }
        }
    }
    return result;
};

console.log(LongestPalindromicSubstring("abcda"));