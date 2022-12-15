// let specSymbol = '*';
// let tmp = '';

// for (let i = 0; i < 6; i++){
//     console.log(specSymbol);
//     for (let j = 0; j < 1; ++j){
//         specSymbol += '*';
//     }
// }

// for (let i = 0; i < 6; i++){
//     tmp += specSymbol;
//     console.log(tmp);
// }


// let result = 5;
// for (let i; result <= 10; i++) {
//     console.log(result);
//     result += 1;
// }

// let result = 20;
// for (let i; result >= 10; i--) {
//     console.log(result);
//     result -= 1;
//     if (result === 13) {
//         break;
//     }
// }
// let result = 2;
// for (let i; result <= 10; i++) {
//     if (result % 2 === 0){
//         console.log(result);
//     }
//     result += 1;
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }


// let i = 2;
// while (i <= 16){
//     if (i % 2 ===0){
//         i++;
//     }
//         else{
//             console.log(i);
//                 i++;
//     }
// }

// let arr = [];
// let numberArr = 0;
// for (let i = 5; i <= 10; i++){
// arr[numberArr] = i;
// numberArr++;
// }
// console.log(arr)


// const arrayOfNumbers = [];
// let numberArr = 0;
// for (let i = 5; i <= 10; i++){
//     arrayOfNumbers[numberArr] = i;
// numberArr++;
// }

//ex4

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++){
//     result[i] = arr[i];
// }
// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++){
//       if (typeof data[i] === "number"){
//         data[i] *= 2;
//     }
//     else{
//         data[i] += ' - done';
//     }
// }

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for (let i = data.length - 1; i >= 0; i--){
//     result[data.length - 1 - i] = data [i];
// }

// ex6
// function sayHello(name) {
//     return 'Привет, ' + name + '!';
// }
// console.log(typeof(sayHello('Антон')));
// Лучшее решение от Автора! =>

// function sayHello(name2) {
//     return `Привет, ${name2}!`;
// }
// console.log(typeof(sayHello('Антон')));


// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }
// console.log(returnNeighboringNumbers(5));

// function getMathResult(number, coef) {
// let result = number;
// if (typeof(coef) !== 'string' && coef > 0) {
//     for (let i = 2; i <= coef; i++){
//         result += '---' + number * i;
//     }
// }
// return result;
// }
// console.log(getMathResult(3,10));


// ex 7

// function calculateVolumeAndArea(value) {
//     if (typeof(value) == 'number' && value > 0 && Number.isInteger(value)){
//         let S = value * value * 6;
//         let V = value * value * value;
//         return `Объем куба: ${V}, площадь всей поверхности: ${S}`;
//     } else{
//         return (`При вычислении произошла ошибка`);
//     }
// }
// console.log(calculateVolumeAndArea(5));

// function getCoupeNumber(seat) {
//     if (typeof(seat) == 'number' && Number.isInteger(seat) && seat > 0 && seat < 37){
//         return Math.ceil(seat / 4);
//     } else if (typeof(seat) == 'number' && Number.isInteger(seat) && seat == 0 || seat > 36){
//         return 'Таких мест в вагоне не существует';
//     } else {
//         return 'Ошибка. Проверьте правильность введенного номера места';
//     }
// }
// console.log(getCoupeNumber(37));

// ex8

// function getTimeFromMinutes(time) {
//     if (typeof(time) == 'number' && time >= 0 && Number.isInteger(time)){

//         let hour = Math.floor(time / 60) +'';
//         let minute = time % 60 + ' минут';

//         if (hour.length >= 1 && hour.slice(-1) == 1 && hour.slice(-2) != 11){
//             hour += ' час';
//         } else if (hour.slice(-1) >= 2 && hour.slice(-1) <= 4){
//             hour += ' часа';
//         } else {
//             hour += ' часов';
//         }

//         return `Это ${hour} и ${minute}`;

//     } else {
//         return 'Ошибка, проверьте данные';
//     }

// }
// console.log(getTimeFromMinutes(1846));

// function findMaxNumber(a, b, c, d) {
//     let comp = a + b + c + d;
//     if (typeof(comp) == 'number' && !isNaN(comp)){
//         return Math.max(a, b, c, d);
//     } else {
//         return 0;
//     }

// }
// console.log(findMaxNumber(-1, 18.5, 13.3, 56));

// function fib(value) {
//     let c;
//     let a = 0;
//     let b = 1;
//     let result = '0';
//     if (typeof(value) == 'number' && Number.isInteger(value) && value > 1){
//         result += ' 1';
//         for (let i = 2; i < value; i++){
//             c = a + b;
//             result += ` ${c}`;
//             a = b;
//             b = c;
//         }
//         return result;
//     } else if (value == 1){
//         return result;
//     } else {
//         result = '';
//         return result;
//     }
// }
// console.log(fib(10));