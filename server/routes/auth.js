const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authController = require('../controllers/authController');
const { auth } = require('../middleware/auth');

// Валидация для регистрации
const registerValidation = [
    body('email').isEmail().withMessage('Некорректный email'),
    body('password').isLength({ min: 6 }).withMessage('Пароль должен содержать минимум 6 символов'),
    body('firstName').notEmpty().withMessage('Имя обязательно'),
    body('lastName').notEmpty().withMessage('Фамилия обязательна')
];

// Валидация для входа
const loginValidation = [
    body('email').isEmail().withMessage('Некорректный email'),
    body('password').notEmpty().withMessage('Пароль обязателен')
];

// Валидация для смены пароля
const changePasswordValidation = [
    body('currentPassword').notEmpty().withMessage('Текущий пароль обязателен'),
    body('newPassword').isLength({ min: 6 }).withMessage('Новый пароль должен содержать минимум 6 символов')
];

// Регистрация пользователя
router.post('/register', registerValidation, authController.register);

// Вход пользователя
router.post('/login', loginValidation, authController.login);

// Вход админа
router.post('/admin/login', authController.adminLogin);

// Получение профиля пользователя
router.get('/profile', auth, authController.getProfile);

// Обновление профиля пользователя
router.put('/profile', auth, authController.updateProfile);

// Изменение пароля
router.put('/change-password', auth, changePasswordValidation, authController.changePassword);

module.exports = router; 