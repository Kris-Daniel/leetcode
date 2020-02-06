/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    // var chars = "IVXLCDM";    // 1 5 10 50 100 500 1000
    var chars = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    var res = 0;
    for (var i = 0; i < s.length; i++) {
        var current = chars[s[i]];
        var next = chars[s[i + 1]];
        if (current >= next) {
            res += current;
        } else if (current < next) {
            res += next - current;
            i++;
        } else if(i == s.length - 1) {
            res += current;
        }
    }
    return res;
};

console.log(romanToInt("MCMXCIV"))