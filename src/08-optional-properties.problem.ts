/**
 * Задача 8: Optional Properties
 * 
 * Проблема: Создайте интерфейс UserProfile с обязательными полями id и name,
 * и необязательными полями age и email. Реализуйте функцию createUser,
 * которая принимает объект типа UserProfile и возвращает строку с информацией о пользователе.
 */

// TODO: Создайте интерфейс UserProfile

// TODO: Реализуйте функцию createUser

// Проверка:
const user1 = createUser({ id: 1, name: "Анна" });
const user2 = createUser({ id: 2, name: "Борис", age: 25, email: "boris@example.com" }); 