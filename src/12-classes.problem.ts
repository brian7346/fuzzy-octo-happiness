/**
 * Задача 12: Classes
 * 
 * Проблема: Создайте класс BankAccount, который будет представлять банковский счет.
 * У него должны быть следующие характеристики:
 * - Приватное поле _balance
 * - Публичное поле readonly accountNumber
 * - Методы deposit и withdraw
 * - Геттер для получения баланса
 */

// TODO: Реализуйте класс BankAccount

// Проверка:
const account = new BankAccount("1234567890");
account.deposit(1000);
account.withdraw(500);
console.log(account.balance);        // 500
console.log(account.accountNumber);  // "1234567890" 