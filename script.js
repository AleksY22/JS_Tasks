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

