/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0;
    for(var i = 0; i < height.length; i++) {
        for(var k = i + 1; k < height.length; k++) {
            max = Math.max(max, (k - i) * Math.min(height[i], height[k]));
        }
    }
    return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));

console.log(Math.min(15, 10));