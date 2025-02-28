/**
 * Задача 7: Type Assertions
 * 
 * Проблема: Создайте функцию getUserInput, которая принимает any и должна вернуть строку.
 * Необходимо правильно обработать входные данные и привести их к строке.
 * Если получено число - привести к строке, если строка - вернуть как есть,
 * в остальных случаях вернуть "Invalid input".
 */

// TODO: Реализуйте функцию getUserInput

// Проверка:
console.log(getUserInput(42));        // "42"
console.log(getUserInput("Hello"));   // "Hello"
console.log(getUserInput(true));      // "Invalid input" 