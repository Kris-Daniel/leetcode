/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    var result = "";
    var isFoundNum = false;
    for (var i = 0; i < str.length; i++) {
        if (isCharForNum(str[i], 45, 43)) {
            result += str[i++];
            if (i < str.length)
                while (isCharForNum(str[i])) {
                    result += str[i++];
                    if (i >= str.length) break;
                }
            isFoundNum = true;
        } else if (str[i] != " ") {
            result += "0";
            break;
        };
        if (isFoundNum) break;
    }
    result = parseInt(result);
    if (isNaN(result)) return 0;
    var max = Math.pow(2, 31);
    if (result < -max) return -max;
    else if (result >= max) return max - 1;
    return result;
};

function isCharForNum(char, numToVerivy = 48, numToVerivy2 = 48) {
    var code = char.charCodeAt();
    return (code >= 48 && code <= 57 ||( code == numToVerivy || code == numToVerivy2)) ? true : false;
}
console.log(myAtoi("+++++1"));