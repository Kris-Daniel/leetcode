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
        if (nextPattern == "*") {
            if (patternNow == ".") {
                p = pattern.length;
                s += p - s;
            } else {
                while (patternNow == string[s]) {
                    s++;
                }
                p++;
                console.log(p);
                if (p + 1 == pattern.length - 1) {
                    s--;
                }
            }
        }
        else if ((patternNow == ".") && (nextPattern != "*")) {
            s++;
        } else if (patternNow == string[s]) {
            s++;
        } else {
            return false;
        }
    }
    return (s == string.length);
};

console.log(isMatch("aaa", "a*a"));