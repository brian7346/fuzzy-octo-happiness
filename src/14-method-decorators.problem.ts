/**
 * Задача 14: Method Decorators
 * 
 * Проблема: Создайте декоратор @log, который будет логировать информацию
 * о вызове метода (имя метода, аргументы и результат).
 * Примените его к методам класса Calculator.
 */

// TODO: Реализуйте декоратор log

// TODO: Создайте класс Calculator с методами add и subtract

// Проверка:
const calc = new Calculator();
calc.add(5, 3);      // Должно логировать: "Called add with args: 5, 3. Result: 8"
calc.subtract(5, 3);  // Должно логировать: "Called subtract with args: 5, 3. Result: 2" 