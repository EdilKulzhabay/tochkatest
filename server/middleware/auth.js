const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Admin = require('../models/Admin');

// Middleware для проверки JWT токена пользователя
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Токен доступа не предоставлен'
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Недействительный токен'
            });
        }

        req.userId = user._id;
        req.user = user;
        next();

    } catch (error) {
        console.error('Ошибка аутентификации:', error);
        res.status(401).json({
            success: false,
            message: 'Недействительный токен'
        });
    }
};

// Middleware для проверки админских прав
const requireAdmin = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Токен доступа не предоставлен'
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        const admin = await Admin.findById(decoded.adminId);

        if (!admin) {
            return res.status(403).json({
                success: false,
                message: 'Доступ запрещен. Требуются права администратора'
            });
        }

        req.adminId = admin._id;
        req.admin = admin;
        next();

    } catch (error) {
        console.error('Ошибка проверки админских прав:', error);
        res.status(403).json({
            success: false,
            message: 'Доступ запрещен'
        });
    }
};

// Middleware для проверки подписки
const requireSubscription = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: 'Пользователь не аутентифицирован'
            });
        }

        if (req.user.subscription.status !== 'premium') {
            return res.status(403).json({
                success: false,
                message: 'Требуется премиум подписка'
            });
        }

        next();

    } catch (error) {
        console.error('Ошибка проверки подписки:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при проверке подписки'
        });
    }
};

// Middleware для проверки членства в клубе
const requireClubMembership = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: 'Пользователь не аутентифицирован'
            });
        }

        if (req.user.clubMembership.status !== 'member') {
            return res.status(403).json({
                success: false,
                message: 'Требуется членство в клубе'
            });
        }

        next();

    } catch (error) {
        console.error('Ошибка проверки членства в клубе:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при проверке членства в клубе'
        });
    }
};

module.exports = {
    auth,
    requireAdmin,
    requireSubscription,
    requireClubMembership
}; 