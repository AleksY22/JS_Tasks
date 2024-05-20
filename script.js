'use strict'
/*
//=======================Выведите чётные числа=========================
for (let i = 2; i <= 10; i++) {
   if (i % 2 == 0) {
      console.log(i);
   }
}
*/

/*
//=====================================================================
//Напишите код, который выводит все простые числа из интервала от 2 до n.
//1) можно оптимизировать с точки зрения производительности
//проверять все j не от 2 до i, а от 2 до квадратного корня из i

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {
   for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime; // не подходит, берём следующее
   }
   console.log(i); // простое число
}
*/

/*
//===================Сумма свойств объекта======================
let salaries = {
   John: 100,
   Ann: 160,
   Pete: 130
};

let sum = 0;
for (let key in salaries) {
   sum += salaries[key];
}

console.log(sum); // 390
*/

/*
//============================================================
//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
let menu = {
   width: 200,
   height: 300,
   title: "My menu"
};

function multiplyNumeric(obj) {
   for (let key in obj) {
      if (typeof obj[key] == 'number') {
         obj[key] *= 2;
      }
   }
}

multiplyNumeric(menu);
console.log(menu);
*/

/*
//===============Случайное число от min до max==============
function random(min, max) {
   return min + Math.random() * (max - min);
}

//===============Случайное целое число от min до max============
function randomInteger(min, max) {
   // случайное число от min до (max+1)
   let rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
}
*/

/*
//==============Сделать первый символ заглавным==================
function ucFirst(str) {
   if (!str) return str;

   return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("вася"));
*/

/*
//===================Усечение строки============================
function truncate(str, maxlength) {
   return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
*/

/*
//===================Подмассив наибольшей суммы==================
arr = [1, -2, 3, 4, -9, 6];
//Медленное решение
function getMaxSubSum(arr) {
   let maxSum = 0; // если элементов не будет - возвращаем 0
 
   for (let i = 0; i < arr.length; i++) {
     let sumFixedStart = 0;
     for (let j = i; j < arr.length; j++) {
       sumFixedStart += arr[j];
       maxSum = Math.max(maxSum, sumFixedStart);
     }
   }
 
   return maxSum;
 }
*/
/*
 //Быстрое решение
 function getMaxSubSum(arr) {
   let maxSum = 0;
   let partialSum = 0;
 
   for (let item of arr) { // для каждого элемента массива
     partialSum += item; // добавляем значение элемента к partialSum
     maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
     if (partialSum < 0) partialSum = 0; // ноль если отрицательное
   }
 
   return maxSum;
 }
*/


