/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (string, pattern) {
    if (pattern[0] == "*") return "";
    var s = 0;
    for (var p = 0; p < pattern.length; p++) {
        if (s >= string.length) return false;
        var patternNow = pattern[p];
        var nextPattern = pattern[p + 1];
        if (nextPattern != "*" && patternNow != ".") {
            if (string[s++] == pattern[p++]) continue;
            return false;
        } else if(nextPattern != "*" && patternNow == ".") {
            s++;
            p++;
        } else if(nextPattern == "*" && patternNow != ".") {
            while(string[s] == patternNow) {
                s++;
            }
            if((pattern[p + 2] == patternNow) && (pattern[p + 3] != "*")) {
                
            }
        }
    }
    return (s == string.length);
};
console.log(isMatch("aab", "c*a*b"));
console.log(isMatch("aaa", "ab*ac*a"));
console.log(isMatch("aaa", ".*a"));
console.log(isMatch("aaa", "a*a"));

        // function IsPatternMatch(string, pattern, s, p) {
        //     var nextCharP = pattern[p + 1];
        //     var left = 0;
        //     var right = pattern.length;
        //     while(left < pattern.length) {
        //         var LP = getPattern(left, left + 1);
        //         if(LP) {
        //             left += goInPatern(string, LP, left, 1);
        //         } else {
        //             if(pattern[left] == "." || string[s] == pattern[p]){
        //                 s++;
        //                 p++;
        //             } else {
        //                 return false;
        //             }
        //         }
        //     }
        // }

        // function getPattern(char1, char2) {
        //     if(char2 == "*") return char1;
        //     return false;
        // }

        // function goInPatern(string, pChar, start, step) {
        //     var temp = start;
        //     while(string[start] == pChar) {
        //         start += step;
        //     }
        //     return start - temp;
        // }