/**
 * Задача 17: Modules
 * 
 * Проблема: Создайте модуль Logger с различными уровнями логирования
 * (info, warn, error) и модуль Utils с вспомогательными функциями.
 * Импортируйте и используйте их в главном модуле Application.
 */

// TODO: Создайте файлы:
// - logger.ts с классом Logger
// - utils.ts с вспомогательными функциями
// - application.ts, где будут использоваться Logger и Utils

// Пример использования:
import { Logger } from './logger';
import { Utils } from './utils';

const logger = new Logger();
logger.info('Application started');

const data = Utils.formatDate(new Date());
logger.info(`Current date: ${data}`); 