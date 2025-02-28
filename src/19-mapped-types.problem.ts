/**
 * Задача 19: Mapped Types
 * 
 * Проблема: Создайте mapped types для преобразования интерфейса
 * в различные варианты (все поля readonly, все поля опциональные,
 * все поля nullable).
 */

interface Person {
    name: string;
    age: number;
    address: string;
}

// TODO: Создайте типы:
// - ReadonlyPerson - все поля readonly
// - OptionalPerson - все поля опциональные
// - NullablePerson - все поля могут быть null

// Проверка:
const readonlyPerson: ReadonlyPerson = {
    name: "John",
    age: 30,
    address: "New York"
};

const optionalPerson: OptionalPerson = {
    name: "John"
    // age и address могут отсутствовать
};

const nullablePerson: NullablePerson = {
    name: null,
    age: 30,
    address: null
}; 