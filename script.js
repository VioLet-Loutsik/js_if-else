// let x = 20
// let y = 10

// if (x <= y) {
//     console.log('ciao');
// }else{
//     console.log('addio');
// }

// let bodyTest = document.querySelector('body')

// let age = prompt('your age')
// let ageResult = 18 - age

// if(age >= 18 ) {
// console.log('welcome');
// bodyTest.classList.add('welcome')
// }else{
//     console.log(`Вам осталось  ждать ${ageResult} лет `);
//     bodyTest.classList.add('bye')
// }

// let password = prompt('ваш пароль')
// let confirm_password = prompt('подтвердите ваш пароль')
// if(password == confirm_password){
//     alert('добро пожаловать')
// }else{
//     alert('Что-то пошло не так…')
// }

// let temp = prompt('температура')
// if(temp > 15){
//     alert('тепло')
// }else if(temp < 5) {
//     alert('холодно')
// }else{
//     alert('нормально')
// }

// let result = (x < y)? 'hy':'bye'
// console.log(result);

// let contTest = document.querySelector('.containe')
// console.log(contTest);
// // if всегда true
// if (contTest != null) {
//     console.log('ok element');
// }else{
//     console.log('no element');
// }

// ДОМАШНЯЯ РАБОТА

// задача 1 *************************************************************

// - Программа просит ввести имя. После этого просит ввести возвраст.
// Затем выдаёт сообщение: "введённое имя" ваш возраст  "введённый возраст" лет
// Пример: Иван ваш возраст 50 лет

//  решение
// let name = prompt('Введите ваше имя')
// let age = prompt('Введите ваш возраст')
// alert (`${name} ваш возраст ${age}`)

// задача 2 ***************************************************************

// пользователь введет какое-то название, например, 'Креветки', то программа должна вывести фразу:
// 'Креветки – это вкусно! '. Даже если пользователь введете слово 'Лопата', то программа должна ответить:
// 'Лопата – это вкусно! '. Если пользователь ничего не ввел, то программа должна ответить: 'Диета – это
// хорошо! '

//  решение

// let prod = prompt('Введите ваш любимый продукт')
// if (prod == ''){
//     alert ('Диета это вкусно')
// }else{
//     alert (`${prod} это вкусно`)
// }

// задача 3 ***************************************************************

// Создать алгоритм, который последовательно запросит у пользователя 2 оценки. Программа должна
// вернуть саму высокую оценку. Пример:
// Введите 1-ю оценку: 4
// Введите 2-ю оценку: 5
// Ответ: 5

// let grade1 = prompt('Введите 1-ю оценку')
// let grade2 = prompt('Введите 2-ю оценку')

// if (grade1 > grade2){
//     alert(grade1)
// }else{
//     alert(grade2)
// }

// задача 4 ***************************************************************
// Создать алгоритм, который попросит пользователя ввести номер месяца. В ответ программа должна
// вернуть название времени года: зима, весна, лето или осень. Пример: Пользователь вводит: 1 Ответ: зима.

// let month = prompt("Введите номер месяца")
// if (month == 1){
//   alert('winter')
// }else if(month == 2){
//     alert('winter')
// }else if(month == 12){
//     alert('winter')
// }else if(month == 3){
//     alert('spring')
// }else if(month == 4){
//     alert('spring')
// }else if(month == 5){
//     alert('spring')
// }else if(month == 6){
//     alert('summer')
// }else if(month == 7){
//     alert('summer')
// }else if(month == 8){
//     alert('summer')
// }else if(month == 9){
//     alert('autumn')
// }else if(month == 10){
//     alert('autumn')
// }else if(month == 11){
//     alert('autumn')
// }

// задача 5 ***************************************************************

// Создайте алгоритм, который запросит у пользователя число. Если число положительное, то программа
// должна вывести значение '+'. Если отрицательное, то '-', иначе '0'.

// let num = prompt("Введите любое положительное или отрицательное число:");
// if (num > 0) {
//   alert("+");
// } else if (num < 0) {
//   alert("-");
// }

// задача 6 ***************************************************************
// Программа запрашивает ввести оценку. Если оценка больше 5 вывести "вы здадите екзамен".
// Результат вывести в alert. Если оценка меньше 5 вывести
// "вы не сдадите екзамен".
// При выводи результата использовать конкатенацию
// решить используя тернарный операто


// let num = prompt('Введите вашу оценку:')
// let result = (num > 5)? 'Вы сдадите экзамен':'Вы не сдадите экзамен'
// alert(result)
