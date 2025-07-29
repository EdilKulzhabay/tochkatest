const User = require('../models/User');
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

// Генерация JWT токена для пользователя (навсегда)
const generateUserToken = (userId) => {
    return jwt.sign(
        { userId },
        process.env.JWT_SECRET || 'your-secret-key'
        // Убираем expiresIn, чтобы токен действовал навсегда
    );
};

// Генерация JWT токена для админа (навсегда)
const generateAdminToken = (adminId) => {
    return jwt.sign(
        { adminId },
        process.env.JWT_SECRET || 'your-secret-key'
        // Убираем expiresIn, чтобы токен действовал навсегда
    );
};

// Регистрация пользователя
exports.register = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Ошибка валидации',
                errors: errors.array()
            });
        }

        const { email, password, firstName, lastName, userName } = req.body;

        // Проверка существования пользователя
        const existingUser = await User.findOne({
            $or: [{ email }, { userName }]
        });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'Пользователь с таким email или userName уже существует'
            });
        }

        // Создание нового пользователя
        const user = new User({
            email,
            password,
            firstName,
            lastName,
            userName: userName || `${firstName.toLowerCase()}${lastName.toLowerCase()}${Date.now()}`
        });

        await user.save();

        // Генерация токена
        const token = generateUserToken(user._id);

        res.status(201).json({
            success: true,
            message: 'Пользователь успешно зарегистрирован',
            data: {
                user: user.getPublicProfile(),
                token
            }
        });

    } catch (error) {
        console.error('Ошибка регистрации:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при регистрации'
        });
    }
};

// Вход пользователя
exports.login = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Ошибка валидации',
                errors: errors.array()
            });
        }

        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Неверный email или пароль'
            });
        }

        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: 'Неверный email или пароль'
            });
        }

        const token = generateUserToken(user._id);

        res.json({
            success: true,
            message: 'Успешный вход',
            data: {
                user: user.getPublicProfile(),
                token
            }
        });

    } catch (error) {
        console.error('Ошибка входа:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при входе'
        });
    }
};

// Вход админа
exports.adminLogin = async (req, res) => {
    try {
        const { userName, password } = req.body;

        const admin = await Admin.findOne({ userName });
        if (!admin) {
            return res.status(401).json({
                success: false,
                message: 'Неверный userName или пароль'
            });
        }

        const isPasswordValid = await admin.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: 'Неверный userName или пароль'
            });
        }

        const token = generateAdminToken(admin._id);

        res.json({
            success: true,
            message: 'Успешный вход администратора',
            data: {
                admin: {
                    id: admin._id,
                    userName: admin.userName
                },
                token
            }
        });

    } catch (error) {
        console.error('Ошибка входа админа:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при входе администратора'
        });
    }
};

// Получение профиля пользователя
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Пользователь не найден'
            });
        }

        res.json({
            success: true,
            data: {
                user: user.getPublicProfile()
            }
        });

    } catch (error) {
        console.error('Ошибка получения профиля:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при получении профиля'
        });
    }
};

// Обновление профиля пользователя
exports.updateProfile = async (req, res) => {
    try {
        const { firstName, lastName, userName, phone } = req.body;

        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Пользователь не найден'
            });
        }

        // Проверка уникальности userName
        if (userName && userName !== user.userName) {
            const existingUser = await User.findOne({ userName });
            if (existingUser) {
                return res.status(400).json({
                    success: false,
                    message: 'Пользователь с таким userName уже существует'
                });
            }
        }

        // Обновление полей
        if (firstName) user.firstName = firstName;
        if (lastName) user.lastName = lastName;
        if (userName) user.userName = userName;
        if (phone !== undefined) user.phone = phone;

        await user.save();

        res.json({
            success: true,
            message: 'Профиль успешно обновлен',
            data: {
                user: user.getPublicProfile()
            }
        });

    } catch (error) {
        console.error('Ошибка обновления профиля:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при обновлении профиля'
        });
    }
};

// Изменение пароля
exports.changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;

        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Пользователь не найден'
            });
        }

        const isCurrentPasswordValid = await user.comparePassword(currentPassword);
        if (!isCurrentPasswordValid) {
            return res.status(400).json({
                success: false,
                message: 'Неверный текущий пароль'
            });
        }

        user.password = newPassword;
        await user.save();

        res.json({
            success: true,
            message: 'Пароль успешно изменен'
        });

    } catch (error) {
        console.error('Ошибка изменения пароля:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при изменении пароля'
        });
    }
};

// Обновление настроек пользователя
exports.updatePreferences = async (req, res) => {
    try {
        const { notifications, theme, language } = req.body;

        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Пользователь не найден'
            });
        }

        // Обновление настроек
        if (notifications) {
            if (notifications.email !== undefined) user.preferences.notifications.email = notifications.email;
            if (notifications.push !== undefined) user.preferences.notifications.push = notifications.push;
        }
        if (theme) user.preferences.theme = theme;
        if (language) user.preferences.language = language;

        await user.save();

        res.json({
            success: true,
            message: 'Настройки успешно обновлены',
            data: {
                preferences: user.preferences
            }
        });

    } catch (error) {
        console.error('Ошибка обновления настроек:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при обновлении настроек'
        });
    }
};

// Выход пользователя (опционально - можно реализовать blacklist токенов)
exports.logout = async (req, res) => {
    try {
        // В простой реализации просто возвращаем успешный ответ
        // В продакшене можно добавить blacklist токенов
        res.json({
            success: true,
            message: 'Успешный выход'
        });

    } catch (error) {
        console.error('Ошибка выхода:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при выходе'
        });
    }
};

// Обновление токена
exports.refreshToken = async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Пользователь не найден'
            });
        }

        const newToken = generateUserToken(user._id);

        res.json({
            success: true,
            data: {
                token: newToken
            }
        });

    } catch (error) {
        console.error('Ошибка обновления токена:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при обновлении токена'
        });
    }
}; 