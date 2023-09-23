// Підключення сервісу для роботи з токенами
const tokenService = require('../services/token.service');

module.exports = (req, res, next) => {
  // Якщо метод запиту OPTIONS, переходимо до наступної middleware
  if (req.method === 'OPTIONS') {
    return next();
  }
  try {
    // Отримання токена з заголовка запиту
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      // Відповідь зі статусом 401, якщо токен відсутній
      return res.status(401).json({message: 'Неавторизовано'});
    }
    // Валідація токена та отримання інформації про користувача
    req.user = tokenService.validateAccess(token);
    next(); // Переходимо до наступної middleware
  } catch (e) {
    // Відповідь зі статусом 401 у випадку помилки
    res.status(401).json({message: 'Неавторизовано'});
  }
};
