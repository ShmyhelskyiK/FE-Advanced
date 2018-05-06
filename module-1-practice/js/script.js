let variant = ['камень', 'ножници','бумага'];
let randomIndex = Math.floor(Math.random()*variant.length);
let compVariant = variant[randomIndex];
let userVariant = prompt('Введите \'камень\', \'ножници\',\'бумага\'');
if (compVariant === userVariant) {
    alert('ничья. компьютер выбрал' + $compVariant);
} else if (userVariant === 'камень' && compVariant === 'ножници' || userVariant === 'ножници' && compVariant === 'бумага' || userVariant === 'бумага' && compVariant === 'камень') {
    alert('Выиграл. компьютер выбрал' + $compVariant);
} else {
    alert('Проиграл. компьютер выбрал' + $compVariant)
}


// let howMatch = prompt('Введите число участников группы', '');
// if (howMatch >= 0) {
//     alert('OK');
// } else {
//     alert('Ошибка ввода');
// }
//
// // const tourOne = sharm;
// // const tourTwo = hurgada;
// // const tourThree = taba;