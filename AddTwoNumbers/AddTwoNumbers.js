/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// var addTwoNumbers = function (l1, l2) {
//     var num1 = getNumFromLinkedList(l1);
//     var num2 = getNumFromLinkedList(l2);
//     var result = (num1 + num2).toString().split("").reverse().map(function (item) {
//         return parseInt(item);
//     });
//     return result;
// };
// function getNumFromLinkedList(list) {
//     var num = "";
//     for (var i = list.length; i--;)
//         num += list[i];
//     return parseInt(num);
// }
// var l1 = [2, 4, 3];
// var l2 = [5, 6, 4];


function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function (l1, l2) {
    var num1 = getNumFromLinkedList(l1);
    var num2 = getNumFromLinkedList(l2);
    var resultNum = (num1.length > 16 || num1.length > 16) ? addTwoBigNumbers(num1, num2) : (num1 - (-num2)).toString();
    var index = resultNum.length - 1;
    var result = new ListNode(resultNum[index]);
    var current = result;
    while (index) {
        current.next = new ListNode(resultNum[--index]);
        current = current.next;
    }
    return result;
};
function getNumFromLinkedList(list) {
    var num = [];
    var current = list;
    do {
        num.unshift(current.val);
        current = current.next;
    } while (current);
    return num.join("");
}

function addTwoBigNumbers(n1, n2) {
    var part = 0;
    var result = [];
    for (var i = n1.length - 1, j = n2.length - 1; i >= 0 || j >= 0; i-- , j--) {
        var num1 = i >= 0 ? n1[i] : 0;
        var num2 = j >= 0 ? n2[j] : 0;
        var sum = ( num1 - (-num2) ) - (-part);
        if(sum > 9) {
            sum = sum.toString().split("");
            result.unshift(sum[1]);
            part = sum[0];
        } else {
            result.unshift(sum);
            part = 0;
        }
    }
    if(part) result.unshift(part);
    return result.join("");
}

var arr1 = [2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9];
var arr2 = [5,6,4,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9,9,9,9];
var l1 = new ListNode(2);
var current = l1;
for (var i = 1; i < arr1.length; i++) {
    current.next = new ListNode(arr1[i]);
    current = current.next;
}

var l2 = new ListNode(5);
var current = l2;
for (var i = 1; i < arr2.length; i++) {
    current.next = new ListNode(arr2[i]);
    current = current.next;
}

console.log(addTwoNumbers(l1, l2));

