/**
 * Задача 13: Abstract Classes
 * 
 * Проблема: Создайте абстрактный класс Shape с абстрактным методом calculateArea
 * и абстрактным свойством name. Реализуйте классы Circle и Rectangle,
 * которые наследуются от Shape.
 */

// TODO: Создайте абстрактный класс Shape

// TODO: Реализуйте классы Circle и Rectangle

// Проверка:
const circle = new Circle(5);
console.log(circle.name);           // "Круг"
console.log(circle.calculateArea()); // 78.54

const rectangle = new Rectangle(4, 5);
console.log(rectangle.name);           // "Прямоугольник"
console.log(rectangle.calculateArea()); // 20 