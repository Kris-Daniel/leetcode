var findMedianSortedArrays = function(nums1, nums2) {
    var newArr = nums1.concat(nums2).sort(function(a, b) {
        return a - b;
    });
    mid = Math.floor((newArr.length - 1) / 2);
    var result = newArr[mid];
    if(!(newArr.length % 2))
        result = (result + newArr[mid + 1]) / 2;
    return result;
};
var arr1 = [1,1,1,1,1,1,1,1,1,1,4,4];
var arr2 = [1,3,4,4,4,4,4,4,4,4,4];

console.log(findMedianSortedArrays(arr1, arr2));