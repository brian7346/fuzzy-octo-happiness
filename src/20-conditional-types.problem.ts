/**
 * Задача 20: Conditional Types
 * 
 * Проблема: Создайте условные типы, которые будут определять возвращаемый тип
 * функции в зависимости от входных параметров.
 */

// TODO: Создайте тип ArrayOrString<T>, который будет возвращать:
// - массив T, если T это число
// - строку, если T это строка
// - boolean[], если T это boolean

// TODO: Создайте функцию processData<T>, которая будет обрабатывать данные
// в зависимости от их типа

// Проверка:
const result1 = processData(42);        // должен вернуть number[]
const result2 = processData("hello");   // должен вернуть string
const result3 = processData(true);      // должен вернуть boolean[]

type Test1 = ArrayOrString<number>;  // number[]
type Test2 = ArrayOrString<string>;  // string
type Test3 = ArrayOrString<boolean>; // boolean[] 