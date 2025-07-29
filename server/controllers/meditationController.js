const Meditation = require('../models/Meditation');

// Получение всех медитаций
exports.getAllMeditations = async (req, res) => {
    try {
        const { page = 1, limit = 20, accessType } = req.query;
        const skip = (page - 1) * limit;
        let query = {};

        if (accessType) query.accessType = accessType;

        const meditations = await Meditation.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(parseInt(limit));

        const total = await Meditation.countDocuments(query);

        res.json({
            success: true,
            data: {
                meditations,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    pages: Math.ceil(total / limit)
                }
            }
        });

    } catch (error) {
        console.error('Ошибка получения медитаций:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при получении медитаций'
        });
    }
};

// Получение медитации по ID
exports.getMeditationById = async (req, res) => {
    try {
        const meditation = await Meditation.findById(req.params.id);

        if (!meditation) {
            return res.status(404).json({
                success: false,
                message: 'Медитация не найдена'
            });
        }

        res.json({
            success: true,
            data: { meditation }
        });

    } catch (error) {
        console.error('Ошибка получения медитации:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при получении медитации'
        });
    }
};

// Создание новой медитации (только для админа)
exports.createMeditation = async (req, res) => {
    try {
        const { title, subtitle, description, shortDescription, imageUrl, videoUrl, accessType, duration } = req.body;

        const meditation = new Meditation({
            title,
            subtitle,
            description,
            shortDescription,
            imageUrl,
            videoUrl,
            accessType,
            duration
        });

        await meditation.save();

        res.status(201).json({
            success: true,
            message: 'Медитация успешно создана',
            data: { meditation }
        });

    } catch (error) {
        console.error('Ошибка создания медитации:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при создании медитации'
        });
    }
};

// Обновление медитации (только для админа)
exports.updateMeditation = async (req, res) => {
    try {
        const { title, subtitle, description, shortDescription, imageUrl, videoUrl, accessType, duration } = req.body;

        const meditation = await Meditation.findById(req.params.id);
        if (!meditation) {
            return res.status(404).json({
                success: false,
                message: 'Медитация не найдена'
            });
        }

        if (title) meditation.title = title;
        if (subtitle) meditation.subtitle = subtitle;
        if (description) meditation.description = description;
        if (shortDescription !== undefined) meditation.shortDescription = shortDescription;
        if (imageUrl) meditation.imageUrl = imageUrl;
        if (videoUrl) meditation.videoUrl = videoUrl;
        if (accessType) meditation.accessType = accessType;
        if (duration) meditation.duration = duration;

        await meditation.save();

        res.json({
            success: true,
            message: 'Медитация успешно обновлена',
            data: { meditation }
        });

    } catch (error) {
        console.error('Ошибка обновления медитации:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при обновлении медитации'
        });
    }
};

// Удаление медитации (только для админа)
exports.deleteMeditation = async (req, res) => {
    try {
        const meditation = await Meditation.findById(req.params.id);
        if (!meditation) {
            return res.status(404).json({
                success: false,
                message: 'Медитация не найдена'
            });
        }

        await Meditation.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: 'Медитация успешно удалена'
        });

    } catch (error) {
        console.error('Ошибка удаления медитации:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при удалении медитации'
        });
    }
}; 