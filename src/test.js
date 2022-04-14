/* eslint-disable no-plusplus */

/* Функция-генератор */
function* generatorFunction() {
  for (let i = 0; i < 5; i++) {
    yield i;
  }
}

const iter = generatorFunction();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

/*
  Результат:
    { value: 0, done: false }
    { value: 1, done: false }
    { value: 2, done: false }
    { value: 3, done: false }
    { value: 4, done: false }
    { value: 5, done: true }
*/

/*
  Генератор - функция, возвращающая данные поэтапно, через оператор yield <Данные>
  Обычная функция - возвращает данные 1 раз, через оператор return

  next() - итерирует функцию-генератор

  done - вернет false - если функции ещё есть куда итерироваться, true - если функция завершена
*/
