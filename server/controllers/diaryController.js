const DiaryEntry = require('../models/DiaryEntry');
const User = require('../models/User');

// Получение записей пользователя
exports.getUserEntries = async (req, res) => {
    try {
        const { page = 1, limit = 20 } = req.query;
        const skip = (page - 1) * limit;

        const entries = await DiaryEntry.find({ userId: req.userId })
            .sort({ date: -1 })
            .skip(skip)
            .limit(parseInt(limit));

        const total = await DiaryEntry.countDocuments({ userId: req.userId });

        res.json({
            success: true,
            data: {
                entries,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    pages: Math.ceil(total / limit)
                }
            }
        });

    } catch (error) {
        console.error('Ошибка получения записей дневника:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при получении записей дневника'
        });
    }
};

// Получение записи по ID
exports.getEntryById = async (req, res) => {
    try {
        const entry = await DiaryEntry.findOne({
            _id: req.params.id,
            userId: req.userId
        });

        if (!entry) {
            return res.status(404).json({
                success: false,
                message: 'Запись не найдена'
            });
        }

        res.json({
            success: true,
            data: { entry }
        });

    } catch (error) {
        console.error('Ошибка получения записи:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при получении записи'
        });
    }
};

// Создание новой записи
exports.createEntry = async (req, res) => {
    try {
        const { date, openings, achievements, gratitude } = req.body;

        const entry = new DiaryEntry({
            userId: req.userId,
            date: date || new Date(),
            openings,
            achievements,
            gratitude
        });

        await entry.save();

        // Увеличиваем бонусы пользователя за заполнение дневника
        const user = await User.findById(req.userId);
        if (user) {
            user.bonus += 10; // 10 бонусов за запись
            await user.save();
        }

        res.status(201).json({
            success: true,
            message: 'Запись успешно создана',
            data: { entry }
        });

    } catch (error) {
        console.error('Ошибка создания записи:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при создании записи'
        });
    }
};

// Обновление записи
exports.updateEntry = async (req, res) => {
    try {
        const { openings, achievements, gratitude } = req.body;

        const entry = await DiaryEntry.findOne({
            _id: req.params.id,
            userId: req.userId
        });

        if (!entry) {
            return res.status(404).json({
                success: false,
                message: 'Запись не найдена'
            });
        }

        if (openings !== undefined) entry.openings = openings;
        if (achievements !== undefined) entry.achievements = achievements;
        if (gratitude !== undefined) entry.gratitude = gratitude;

        await entry.save();

        res.json({
            success: true,
            message: 'Запись успешно обновлена',
            data: { entry }
        });

    } catch (error) {
        console.error('Ошибка обновления записи:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при обновлении записи'
        });
    }
};

// Удаление записи
exports.deleteEntry = async (req, res) => {
    try {
        const entry = await DiaryEntry.findOne({
            _id: req.params.id,
            userId: req.userId
        });

        if (!entry) {
            return res.status(404).json({
                success: false,
                message: 'Запись не найдена'
            });
        }

        await DiaryEntry.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: 'Запись успешно удалена'
        });

    } catch (error) {
        console.error('Ошибка удаления записи:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при удалении записи'
        });
    }
}; 