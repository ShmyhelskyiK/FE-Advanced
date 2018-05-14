/*
  Написать функцию, getPx(str)

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да,
  возвращать только числовую составляющую, к примеру 10.

  Если была передана не строка, функция возвращает null.
*/

// function getPx(str) {
//     if (typeof str !== 'string'){
//         return null;
//     }
//     return parseFloat(str);
// }

// Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null

// ____________________END_____________________________________________________

/*
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.
  Важное условие - в строке могут быть только пробелы
  и символы букв и цифр!
*/

// function findLongestWord(str) {
//     let arr = str.split(' ');
//     let longest = null;
//     let lenghtLongest = 0;
//
//     for ( const word of arr) {
//         if (word.length >= lenghtLongest) {
//             longest = word;
//             lenghtLongest = word.length;
//         }
//     }
//     return longest;
// }
//
// // Вызовы функции для проверки
// console.log(
//     findLongestWord("The quick brown fox jumped over the lazy dog")
// ); // вернет 'jumped'
//
// console.log(
//     findLongestWord("Google do a roll")
// ); // вернет 'Google'
//
// console.log(
//     findLongestWord("May the force be with you")
// ); // вернет 'force'
//


// ____________________END_____________________________________________________

/*
  Создайте функцию titleCase(str), которая
  получает строку и возвращает предоставленную строку
  с первой буквой каждого слова, заглавными.
  Остальные буквы слова должны быть не заглавными.
*/


// Вызовы функции для проверки
// console.log(
//     titleCase("I'm a little tea pot")
// ); // вернет "I'm A Little Tea Pot"
//
// console.log(
//     titleCase("sHoRt AnD sToUt")
// ); // вернет "Short And Stout".
//
// console.log(
//     titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")
// ); // вернет "Here Is My Handle Here Is My Spout".


// ____________________END_____________________________________________________
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

checkLoginValidity = checkLoginValidity(login);
console.log(checkLoginValidity);



// ____________________END_____________________________________________________
// ____________________END_____________________________________________________
