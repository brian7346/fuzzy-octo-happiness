/**
 * Задача 10: Type Aliases
 * 
 * Проблема: Создайте type aliases для представления координат точки в 2D и 3D пространстве.
 * Реализуйте функцию calculateDistance, которая вычисляет расстояние между двумя точками
 * (либо в 2D, либо в 3D пространстве).
 */

// TODO: Создайте type aliases Point2D и Point3D

// TODO: Реализуйте функцию calculateDistance

// Проверка:
const point2D1: Point2D = { x: 0, y: 0 };
const point2D2: Point2D = { x: 3, y: 4 };
console.log(calculateDistance(point2D1, point2D2)); // 5

const point3D1: Point3D = { x: 0, y: 0, z: 0 };
const point3D2: Point3D = { x: 1, y: 1, z: 1 };
console.log(calculateDistance(point3D1, point3D2)); // √3 