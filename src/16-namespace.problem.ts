/**
 * Задача 16: Namespace
 * 
 * Проблема: Создайте namespace Validation, который будет содержать
 * набор функций для валидации данных (email, phone, zipCode).
 * Используйте его для проверки пользовательского ввода.
 */

// TODO: Создайте namespace Validation с функциями:
// - isValidEmail(email: string): boolean
// - isValidPhone(phone: string): boolean
// - isValidZipCode(zipCode: string): boolean

// Проверка:
const testData = {
    email: "test@example.com",
    phone: "+7-999-123-45-67",
    zipCode: "123456"
};

console.log(Validation.isValidEmail(testData.email));     // true
console.log(Validation.isValidPhone(testData.phone));     // true
console.log(Validation.isValidZipCode(testData.zipCode)); // true 