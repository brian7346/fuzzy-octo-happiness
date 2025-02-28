/**
 * Задача 9: Readonly Properties
 * 
 * Проблема: Создайте интерфейс Config с readonly полями host, port и version.
 * Реализуйте функцию createConfig, которая создает объект конфигурации,
 * и функцию tryToUpdateConfig, которая пытается изменить конфигурацию (должна вызывать ошибку компиляции).
 */

// TODO: Создайте интерфейс Config с readonly полями

// TODO: Реализуйте функции createConfig и tryToUpdateConfig

// Проверка:
const config = createConfig("localhost", 3000, "1.0.0");
tryToUpdateConfig(config); // Должно вызывать ошибку компиляции 