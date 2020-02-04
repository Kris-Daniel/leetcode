/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    console.log(x.length);
    x = x.toString();
    for(var i = 0, j = x.length - 1; i < j; i++, j--) {
        if(x[i] != x[j]) return false;
    }
    return true;
};

console.log(isPalindrome(0))