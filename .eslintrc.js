module.exports = {
  // Оточення, для яких діють ці правила
  env: {
    browser: true, // Вказуємо, що це середовище браузера
    es2021: true, // Включаємо підтримку ES2021
  },
  // Правила для перевірки коду, які ми використовуємо
  extends: [
    'plugin:react/recommended', // Включаємо плагін React
    'google', // Використовуємо стандарти Google для стилю
  ],
  // За допомогою overrides ми можемо перезаписати або додати правила для конкретних файлів або папок
  overrides: [],
  // Налаштування парсера для перетворення коду в AST (Abstract Syntax Tree)
  parserOptions: {
    ecmaVersion: 'latest', // Версія ECMA-Script, яку ми використовуємо (остання на момент публікації коду)
    sourceType: 'module', // Вказуємо, що ми використовуємо модулі
  },
  // Підключені плагіни
  plugins: ['react'],
  // Власні правила (overrides може також використовуватись для цього, але тут вони загальні для всього проєкту)
  rules: {
    'linebreak-style': 0, // Відключаємо правило про стиль перенесення рядків
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false,
        },
      },
    ],
    'max-len': ['error', {'code': 120}],
  },
};
