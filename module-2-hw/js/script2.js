/*
  ***ЗАДАНИЕ ПОВЫШЕНОЙ СЛОЖНОСТИ - выполнять по желанию***

  Напишите скрипт авторизации пользователя.

  Есть массив паролей зарегистрированных пользователей passwords.
  При посещении страницы, необходимо попросить пользователя ввести свой пароль.
  Необходимо проверить содержит ли массив passwords пароль введенный пользователем.

  Пароль можно ввести не верно всего 3 раза (кол-во раз может изменяться).
  Подсказка: используйте цикл while, do...while или for.

  Если был введен пароль который есть в массиве passwords, вывести alert
  с текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.

  Если был введен не существующий пароль, отнять от лимита попыток единицу,
  вывести alert с текстом "Неверный пароль, у вас осталось n попыток",
  где n это оставшийся лимит.
  После того как пользователь закрыл alert, запросить пароль снова.

  Продолжать запрашивать пароль до тех пор, пока пользователь не введет
  существующий пароль, не кончатся попытки или пока пользователь
  не нажмет Cancel в prompt.

  Если закончились попытки, вывести alert с текстом "У вас закончились попытки, аккаунт заблокирован!"
  Если же пользователь нажмет Cancel, прекратить выполнение цикла.

  const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempt = 3;
let userPassword;
let access = false;
while (userPassword !== null) {

    if (attempt === 0) {
        alert("Аккаунт заблокирован");
        break;
    }

    if (access === true) break;

    for (let i = 0; i < attempt; i++) {
        userPassword = prompt("Pass", "");
        if (userPassword === null) break;
        if (userPassword === passwords[i]) {
            alert("Добро пожаловать!");
            access = true;
            break;
        } else {
            attempt--;
            alert(`У вас остлось ${attempt} попыток`);
        }
    }
}

*/

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];

let enterPassword = prompt('Введите пароль');

while (enterPassword < 3 ) {
    if ()
}





// for (const index of passwords) {
//     console.log(index);
    // if (enterPassword === passwords) {
    //     alert("OK");
    // } else {
    //     alert('NO NO NO')
    // }
// }

// for ( i = 0; i < 3; i++) {
//     let enterPassword = prompt('Введите пароль');
//
//     if (enterPassword == null) {
//         alert("Вы закончили ввод данных.");
//         break;
//     } else if (enterPassword = test[i]) {
//         alert('OK')
//     }
// }
