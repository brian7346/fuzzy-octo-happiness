/**
 * Задача 4: Generics
 * 
 * Проблема: Создайте generic функцию firstElement, которая принимает массив любого типа
 * и возвращает первый элемент этого массива. Если массив пуст, функция должна вернуть null.
 */

// TODO: Реализуйте generic функцию firstElement

// Проверка:
const numbers = [1, 2, 3];
const strings = ["a", "b", "c"];
const empty: string[] = [];

const first1 = firstElement(numbers);  // должно вернуть 1
const first2 = firstElement(strings);  // должно вернуть "a"
const first3 = firstElement(empty);    // должно вернуть null 