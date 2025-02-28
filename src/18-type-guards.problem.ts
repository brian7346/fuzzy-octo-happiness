/**
 * Задача 18: Type Guards
 * 
 * Проблема: Создайте type guard функции для определения типа объекта
 * (User или Admin) и обработки данных в зависимости от типа.
 */

interface User {
    id: number;
    name: string;
    email: string;
}

interface Admin {
    id: number;
    name: string;
    accessLevel: number;
}

// TODO: Создайте type guard функции:
// - isUser(obj: User | Admin): obj is User
// - isAdmin(obj: User | Admin): obj is Admin

// TODO: Создайте функцию processEntity, которая будет обрабатывать объект
// в зависимости от его типа

// Проверка:
const entity1 = { id: 1, name: "John", email: "john@example.com" };
const entity2 = { id: 2, name: "Admin", accessLevel: 1 };

processEntity(entity1); // Должно обработать как User
processEntity(entity2); // Должно обработать как Admin 