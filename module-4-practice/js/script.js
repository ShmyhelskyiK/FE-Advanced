// function calc () {
//     console.log('inside text!');
// }
// calc();

// ---------------

// let calc = function () {
//     console.log('inside text!');
// }
// calc();

// ---------------

// function showText () {
//     return 'FUNCTION';
// }
//
// console.log(showText());

// ---------------

// function showText () {
//    let str = 'FUNCTION';
//    return str;
// }
//
// console.log(showText() + '-test');

// ---------------

// function addNum() {
//     let a = 55;
//     let b = 6;
//     return a+b;
// }
//
// let result = addNum();
//
// console.log(result);
// console.log(addNum());
// ---------------

// function calc(num1, num2) {
//     return num1 + num2;
// }
//
// console.log(calc(5,6,8));
// console.log(calc(10,65));
// console.log(calc('10','65'));
// alert(calc(8,9));

// ---------------

// function arrSum(arr) {
//     let total = 0;
//     for (let item of arr) {
//         total += item;
//     }
//     return total;
// }
// console.log(arrSum([1, 5, 6, 8, 9]));

// ---------------

// function show(name = 'user', date = '30') {
//     return `${name} blablbalv ${date} fasfa`;
// }
//
// console.log(show(12,40));

// ---------------
// console.log(x('A man, a plan, a canal. Panama'));
// function x(str)  {
//
//     let arr = str.toLowerCase().split('');
//     let arrReverse = str.toLowerCase().split('').reverse();
//     let newArr = [];
//     let newReverse = [];
//     for (let item of arr) {
//         if (item != ' ' && item != ',' && item !='.' ) {
//             newArr.push(item);
//         }
//
//     }
//     for (let item of arrReverse) {
//         if (item != ' ' && item != ',' && item !='.' ) {
//             newReverse.push(item);
//         }
//
//     }
//     let m = 0;
//         for (let i=0; i<= newArr.length-1;i++) {
//
//             if (newReverse[i] === newArr[i]) {
//                 m++;
//
//             }
//
//         }
//     if (m === newArr.length) {
//             return 'Строка полиндром';
//     } else {
//             return 'Строка не полиндром';
//     }
//
// }
//console.log(x('A man, a plan, a canal. Panama'));
// ---------------

// (function calc () {
//     console.log('calc')
// })();

// ---------------
// ---------------
// ---------------
// ---------------
// ---------------
