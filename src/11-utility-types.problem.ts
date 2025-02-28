/**
 * Задача 11: Utility Types
 * 
 * Проблема: Создайте интерфейс Product с полями id, name, price и description.
 * Используя встроенные Utility Types, создайте:
 * 1. Тип ReadonlyProduct - только для чтения версия Product
 * 2. Тип CreateProduct - тип для создания продукта (без id)
 * 3. Тип UpdateProduct - тип для обновления продукта (все поля опциональные)
 */

// TODO: Создайте интерфейс Product

// TODO: Создайте типы ReadonlyProduct, CreateProduct и UpdateProduct

// Проверка:
const product: Product = {
    id: 1,
    name: "Телефон",
    price: 999,
    description: "Новый телефон"
};

const createData: CreateProduct = {
    name: "Ноутбук",
    price: 1999,
    description: "Мощный ноутбук"
};

const updateData: UpdateProduct = {
    price: 888
}; 