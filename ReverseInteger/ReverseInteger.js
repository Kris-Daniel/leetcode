var reverse = function(x) {
    var sign = x < 0 ? "-" : "";
    var int = parseInt(("" + x + sign).split("").reverse().join(""));
    var max = Math.pow(2, 31);
    return (int > max - 1 || int < -max) ? 0 : int;
};

console.log(reverse(-123));