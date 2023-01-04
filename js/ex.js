"use strict";
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


//ex10

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function (plan){
//         let result = `Мне ${plan.age} и я владею языками: `;  
//         let i = 1;
//         for (let key of plan.skills.languages){
//             result += key.toUpperCase();
//             if (i < Object.keys(plan.skills.languages).length){
//             result += ` `;
//             i++;
//         }
//     }
//         return result;
//     }
// };
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showExperience(plan) {
//     let {exp} = plan.skills;
//     return exp;
// }

// function showProgrammingLangs(plan) {
//     let result = '';
//     for (let key in plan.skills.programmingLangs){
//         result += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`;
//     }
//     return result;
// }
// console.log(showProgrammingLangs(personalPlanPeter));


// ex 11

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let result = 'Семья состоит из: ';
//     let i = 1;

//     if (arr.length < 1){
//         result = 'Семья пуста';
//     } else {
//         arr.forEach(element => {
//             result += element;
            // if (i < arr.length){
            //     result += ' ';
            //     i++;
            // }
//         });        
//     }
//     return result;

// }
// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {

//     arr.forEach(element => {
//         console.log(element.toLowerCase());
//     });
// }
// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';

// function reverse(str) {
//     let result = '';
//     let j = 0;
//     if (typeof(str) == 'string'){

//     for (let i = str.length; i >= 0; i--){
//         result += str.substring(str.length-j, str.length-j-1);
//         j++;
//     }
// } else{
//     result += 'Ошибка!';
// }
// return result;
// }

// console.log(reverse(someString));

// const baseCurrencies = [];
// const additionalCurrencies = [];

// function availableCurr(arr, missingCurr) {
//     let result = 'Доступные валюты:\n';

//     if (arr.length < 1){
//         result = 'Нет доступных валют';
//         return result;
//     }
    
//     arr.forEach(element => {
//     if (element != missingCurr){
//         result += `${element}\n`;
//     }
// });
// return result;
// }

// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));

// ex 13

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// function isBudgetEnough(data) {
//     let square = 0;

//     data.shops.forEach(value => {
//         square += value.width * value.length;
//     });

//     return data.budget >= data.moneyPer1m3 * square * data.height ? 'Бюджета достаточно' :'Бюджета недостаточно';
// }


// console.log(isBudgetEnough(shoppingMallData));

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     let arrStudentsByGroups = [];
//     let quantityGroups = Math.floor(arr.length / 3);
//     arrStudentsByGroups[quantityGroups] = 'Оставшиеся студенты: ';

//     for (let i = 0; i < quantityGroups; i++){
//         arrStudentsByGroups[i] = [];
//         for (let j = 0; j < 3; j++){
//             arrStudentsByGroups[i][j] = arr[j + i * 3];
//         }
//     }
//     if (arr.length % 3 === 0){
//         arrStudentsByGroups[quantityGroups] += '-';
//     } else {
//         for (let k = 0; k < arr.length % 3; k++){
//             if (k > 0 && k < arr.length % 3){
//                 arrStudentsByGroups[quantityGroups] += ', ';
//             }
//             arrStudentsByGroups[quantityGroups] += arr[quantityGroups * 3 + k];
//         }
//     }
//     return arrStudentsByGroups;
// }
// console.log(sortStudentsByGroups(students));


// ex 16

// function factorial(n) {
//     let result = 0;
//     if (typeof(n) == 'number' && Number.isInteger(n)){
//         if (n <= 1){
//             return result += 1;
//         } else {
//             return n * factorial(n-1);
//         }
//     } else {
//         return 'Ошибка';
//     }

// }
// console.log(factorial(4.5));