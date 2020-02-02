var convert = function (s, numRows) {
    if (numRows <= 1 || s.length <= numRows) return s;
    var resultArr = [];
    for (var i = 0; i < s.length;) {
        for (var k = 0; k < numRows && i < s.length; k++ , i++) {
            if ((typeof resultArr[k]) != "string") resultArr[k] = "";
            resultArr[k] += s[i];
        }
        for (var n = numRows - 2; n > 0 && i < s.length; n--, i++) {
            resultArr[n] += s[i];
        }
    }
    var res = "";
    for (i = 0; i < numRows; i++) {
        res += resultArr[i];
    }
    return res;
};

console.log(convert("PAYPALISHIRING", 4)); // PINALSIGYAHRPI