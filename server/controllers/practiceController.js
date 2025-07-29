const Practice = require('../models/Practice');

// Получение всех практик
exports.getAllPractices = async (req, res) => {
    try {
        const { page = 1, limit = 20, accessType } = req.query;
        const skip = (page - 1) * limit;
        let query = {};

        if (accessType) query.accessType = accessType;

        const practices = await Practice.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(parseInt(limit));

        const total = await Practice.countDocuments(query);

        res.json({
            success: true,
            data: {
                practices,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    pages: Math.ceil(total / limit)
                }
            }
        });

    } catch (error) {
        console.error('Ошибка получения практик:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при получении практик'
        });
    }
};

// Получение практики по ID
exports.getPracticeById = async (req, res) => {
    try {
        const practice = await Practice.findById(req.params.id);

        if (!practice) {
            return res.status(404).json({
                success: false,
                message: 'Практика не найдена'
            });
        }

        res.json({
            success: true,
            data: { practice }
        });

    } catch (error) {
        console.error('Ошибка получения практики:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при получении практики'
        });
    }
};

// Создание новой практики (только для админа)
exports.createPractice = async (req, res) => {
    try {
        const { title, subtitle, description, shortDescription, imageUrl, videoUrl, accessType, duration } = req.body;

        const practice = new Practice({
            title,
            subtitle,
            description,
            shortDescription,
            imageUrl,
            videoUrl,
            accessType,
            duration
        });

        await practice.save();

        res.status(201).json({
            success: true,
            message: 'Практика успешно создана',
            data: { practice }
        });

    } catch (error) {
        console.error('Ошибка создания практики:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при создании практики'
        });
    }
};

// Обновление практики (только для админа)
exports.updatePractice = async (req, res) => {
    try {
        const { title, subtitle, description, shortDescription, imageUrl, videoUrl, accessType, duration } = req.body;

        const practice = await Practice.findById(req.params.id);
        if (!practice) {
            return res.status(404).json({
                success: false,
                message: 'Практика не найдена'
            });
        }

        if (title) practice.title = title;
        if (subtitle) practice.subtitle = subtitle;
        if (description) practice.description = description;
        if (shortDescription !== undefined) practice.shortDescription = shortDescription;
        if (imageUrl) practice.imageUrl = imageUrl;
        if (videoUrl) practice.videoUrl = videoUrl;
        if (accessType) practice.accessType = accessType;
        if (duration) practice.duration = duration;

        await practice.save();

        res.json({
            success: true,
            message: 'Практика успешно обновлена',
            data: { practice }
        });

    } catch (error) {
        console.error('Ошибка обновления практики:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при обновлении практики'
        });
    }
};

// Удаление практики (только для админа)
exports.deletePractice = async (req, res) => {
    try {
        const practice = await Practice.findById(req.params.id);
        if (!practice) {
            return res.status(404).json({
                success: false,
                message: 'Практика не найдена'
            });
        }

        await Practice.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: 'Практика успешно удалена'
        });

    } catch (error) {
        console.error('Ошибка удаления практики:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при удалении практики'
        });
    }
}; 