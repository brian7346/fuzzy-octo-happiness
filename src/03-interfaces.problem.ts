/**
 * Задача 3: Интерфейсы
 * 
 * Проблема: Создайте интерфейс User и интерфейс Admin, расширяющий User.
 * Затем создайте функцию, которая принимает объект типа Admin и выводит информацию о пользователе.
 */

// TODO: Создайте интерфейс User с полями:
// - id: number
// - name: string
// - email: string

// TODO: Создайте интерфейс Admin, расширяющий User, с дополнительными полями:
// - role: string
// - permissions: string[]

// TODO: Реализуйте функцию printAdmin(admin: Admin): void

// Проверка:
const admin = {
    id: 1,
    name: "Админ",
    email: "admin@example.com",
    role: "superadmin",
    permissions: ["read", "write", "delete"]
}; 