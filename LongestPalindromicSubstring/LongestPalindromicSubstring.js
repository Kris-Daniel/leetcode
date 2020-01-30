var LongestPalindromicSubstring = function (s) {
    var len = s.length;
    if (len <= 1) return s;
    var maxSubStr = s[0];
    for (var i = 0; i < len - 1; i++) {
        for(var j = i + maxSubStr.length; j < len; j++) {
            var subStr = s.slice(i, j + 1);
            if(isPalindrome(subStr)) {
                maxSubStr = maxSubStr.length > subStr.length ? maxSubStr : subStr;
            }
        }
    }
    return maxSubStr;
};

function isPalindrome(s) {
    for(var i = 0, j = s.length - 1; i < j; i++, j--)
        if(s[i] != s[j]) return false;
	return s;
}

console.log(LongestPalindromicSubstring("jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel"));