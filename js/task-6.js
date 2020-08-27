/*Задание 6
Напиши функцию calculateTotalPrice(allProdcuts, productName),
 которая получает массив объектов и имя продукта (значение
   свойства name). Возвращает общую стоимость продукта
    (цена * количество).*/

//Вызовы функции для проверки работоспособности твоей реализации.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Радар', price: 1280, quantity: 2 },
  { name: 'Радар', price: 1320, quantity: 1 },
  { name: 'Сканер', price: 2700, quantity: 1 },
  { name: 'Сканер', price: 2500, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

function calculateTotalPrice(array, prop) {
  'use strict';
  let result = 0;
  // Write code under this line
  for (const product of array) {
    if (product.name === prop) {
      console.log(prop);
      result += product.price * product.quantity;
    }
  }
  return result;
}

//Вызовы функции для проверки работоспособности твоей реализации.

console.log(calculateTotalPrice(products, 'Радар'));
// 9080

//console.log(calculateTotalPrice(products, 'Сканер'));
// 10200

//console.log(calculateTotalPrice(products, 'Захват'));
// 2400

//console.log(calculateTotalPrice(products, 'Дроид'));
// 2800
