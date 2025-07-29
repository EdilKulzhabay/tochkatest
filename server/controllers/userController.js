const User = require('../models/User');

// Получение всех пользователей (для админа)
exports.getAllUsers = async (req, res) => {
    try {
        const { page = 1, limit = 20, search } = req.query;
        const skip = (page - 1) * limit;

        let query = {};

        // Поиск по имени или email
        if (search) {
            query.$or = [
                { firstName: { $regex: search, $options: 'i' } },
                { lastName: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
                { userName: { $regex: search, $options: 'i' } }
            ];
        }

        const users = await User.find(query)
            .select('-password')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(parseInt(limit));

        const total = await User.countDocuments(query);

        res.json({
            success: true,
            data: {
                users,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    pages: Math.ceil(total / limit)
                }
            }
        });

    } catch (error) {
        console.error('Ошибка получения пользователей:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при получении пользователей'
        });
    }
};

// Получение пользователя по ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Пользователь не найден'
            });
        }

        res.json({
            success: true,
            data: { user }
        });

    } catch (error) {
        console.error('Ошибка получения пользователя:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при получении пользователя'
        });
    }
};

// Обновление подписки пользователя
exports.updateSubscription = async (req, res) => {
    try {
        const { status, plan, startDate, endDate } = req.body;
        const userId = req.params.id || req.userId;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Пользователь не найден'
            });
        }

        // Обновление подписки
        if (status) user.subscription.status = status;
        if (plan) user.subscription.plan = plan;
        if (startDate) user.subscription.startDate = new Date(startDate);
        if (endDate) user.subscription.endDate = new Date(endDate);

        await user.save();

        res.json({
            success: true,
            message: 'Подписка успешно обновлена',
            data: {
                subscription: user.subscription
            }
        });

    } catch (error) {
        console.error('Ошибка обновления подписки:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при обновлении подписки'
        });
    }
};

// Обновление членства в клубе
exports.updateClubMembership = async (req, res) => {
    try {
        const { status, joinDate, expireDate } = req.body;
        const userId = req.params.id || req.userId;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Пользователь не найден'
            });
        }

        // Обновление членства
        if (status) user.clubMembership.status = status;
        if (joinDate) user.clubMembership.joinDate = new Date(joinDate);
        if (expireDate) user.clubMembership.expireDate = new Date(expireDate);

        await user.save();

        res.json({
            success: true,
            message: 'Членство в клубе успешно обновлено',
            data: {
                clubMembership: user.clubMembership
            }
        });

    } catch (error) {
        console.error('Ошибка обновления членства в клубе:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при обновлении членства в клубе'
        });
    }
};

// Удаление пользователя
exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Пользователь не найден'
            });
        }

        await User.findByIdAndDelete(userId);

        res.json({
            success: true,
            message: 'Пользователь успешно удален'
        });

    } catch (error) {
        console.error('Ошибка удаления пользователя:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при удалении пользователя'
        });
    }
}; 