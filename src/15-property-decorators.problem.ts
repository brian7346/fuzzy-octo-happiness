/**
 * Задача 15: Property Decorators
 * 
 * Проблема: Создайте декоратор @validate, который будет проверять,
 * что присваиваемое свойству значение соответствует определённым условиям
 * (например, строка не пустая, число положительное).
 */

// TODO: Реализуйте декоратор validate

class User {
    @validate(value => value.length > 0, "Имя не может быть пустым")
    name: string;

    @validate(value => value > 0, "Возраст должен быть положительным числом")
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// Проверка:
const user = new User("", -5); // Должно выбросить ошибку 