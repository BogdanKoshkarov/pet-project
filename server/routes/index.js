const express = require('express'); // Підключення фреймворку Express

// Створення роутера для групування маршрутів
// eslint-disable-next-line new-cap
const router = express.Router({mergeParams: true});

// Використання маршрутів для автентифікації
router.use('/auth', require('./auth.routes'));
// Використання маршрутів для категорій
router.use('/category', require('./category.routes'));
// Використання маршрутів для товарів
router.use('/item', require('./item.routes'));
// Використання маршрутів для користувачів
router.use('/user', require('./user.routes'));
// Використання маршрутів для завантаження файлів
router.use('/uploads', require('./upload.routes'));

module.exports = router; // Експорт роутера для використання у головному файлі
