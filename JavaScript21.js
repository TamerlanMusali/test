// 1
// //обьясни своими словами, что значит callback функция

// 2
// //выведи в консоли 'Привет я Alex и мне 19 лет' с помощью функций ниже и callback
// function alertInfo(name, age, callbackFunc) {
//     console.log();

// }

// function userInfo() {
//     let name = 'Alex';
//     let age = 19;
    
// }

// userInfo();

// 3
// //какая из функций является функцией обратного вызова?
// setTimeout(showMessage, timeout);

// function showMessage() {
//     console.log('Сообшение');
//     startProgram();
// }

// function startProgram() {
//     console.log('Запуск');
// }

// //первая

// 4
// //передайте функции ниже функцию showMessage  в качестве параметра и вызовите ее
// function showMessage2(b) {
//     document.getElementById("dem").innerHTML = b
// }

// function startProgram2(b, c, callbackFunc) {
//     let sum = b + c;
//     callbackFunc(sum);
// }

// startProgram2(5, 5, showMessage2)

//что такое Promise?
//Промис - это объект JavaScript, который связывает создание кода и использование кода

6
//создайте Promise функцию?
let Promise = new Promise(function(resolve, reject){
    resolve();
    reject();
});

7
//обьясни своими словами, что такое res и rej?
let count = new Promise(function(res, rej) {
    let a = 4;
    if (a > 3) {
        res('Число подходит');
    } else {
        rej('Число неподходит');
    }

    count.then (
        function(value) {console.log(value);},
        function(error) {console.log(error);}
    );
});

//res означает успех условие выполнено а rej означает что там есть ошибка

10
//что значит асинхронный?
//Функции, выполняющиеся параллельно с другими функциями, называются асинхронными

11
//что делает async?
//заставляет функцию возвращать обещание

12
//что делает await?
//заставляет функцию ждать обещание










//Получить данные с помощью fetch() с https://jsonplaceholder.typicode.com/comments и отобразить их на сайте в виде комментариев.
fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(data => console.log(data))












setInterval(myFunc, 1000);

function myFunc() {
    let d = new Date();

    document.querySelector('p').innerHTML = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`;
}

