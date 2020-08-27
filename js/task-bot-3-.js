const add = function (...args) {
  console.log(args); // массив всех аргументов
};

add(1, 2, 3);
add(1, 2, 3, 4, 5);

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

const c = Object.assign({}, a, b);
console.log(c); // {x: 0, y: 2, z: 3}

// То же самое используя операцию spread
const d = { ...a, ...b };

console.log(d); // {x: 0, y: 2, z: 3}

const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

/*
 * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
 * Первый элемент это ключ свойства, второй это значение.
 */
const entries = Object.entries(hotel);
console.log(entries);
/*
 * На каждой итерации по entries выберем первый элемент подмассива (ключ)
 * в переменную key, а второй (значение) в переменную value
 */
for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];

  console.log(`${key}: ${value}`);
}

/*
 * name: Resort Hotel
 * stars: 5
 * capacity: 100
 */

const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
const copyOfHouses = [...houses];

console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
console.log(copyOfHouses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
console.log(houses === copyOfHouses); // false - разные ссылки
