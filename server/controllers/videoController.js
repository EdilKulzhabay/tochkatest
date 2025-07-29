const Video = require('../models/Video');

// Получение всех видео
exports.getAllVideos = async (req, res) => {
    try {
        const { page = 1, limit = 20, accessType } = req.query;
        const skip = (page - 1) * limit;
        let query = {};

        if (accessType) query.accessType = accessType;

        const videos = await Video.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(parseInt(limit));

        const total = await Video.countDocuments(query);

        res.json({
            success: true,
            data: {
                videos,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    pages: Math.ceil(total / limit)
                }
            }
        });

    } catch (error) {
        console.error('Ошибка получения видео:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при получении видео'
        });
    }
};

// Получение видео по ID
exports.getVideoById = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);

        if (!video) {
            return res.status(404).json({
                success: false,
                message: 'Видео не найдено'
            });
        }

        res.json({
            success: true,
            data: { video }
        });

    } catch (error) {
        console.error('Ошибка получения видео:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при получении видео'
        });
    }
};

// Создание нового видео (только для админа)
exports.createVideo = async (req, res) => {
    try {
        const { title, subtitle, description, shortDescription, imageUrl, videoUrl, accessType, duration } = req.body;

        const video = new Video({
            title,
            subtitle,
            description,
            shortDescription,
            imageUrl,
            videoUrl,
            accessType,
            duration
        });

        await video.save();

        res.status(201).json({
            success: true,
            message: 'Видео успешно создано',
            data: { video }
        });

    } catch (error) {
        console.error('Ошибка создания видео:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при создании видео'
        });
    }
};

// Обновление видео (только для админа)
exports.updateVideo = async (req, res) => {
    try {
        const { title, subtitle, description, shortDescription, imageUrl, videoUrl, accessType, duration } = req.body;

        const video = await Video.findById(req.params.id);
        if (!video) {
            return res.status(404).json({
                success: false,
                message: 'Видео не найдено'
            });
        }

        if (title) video.title = title;
        if (subtitle) video.subtitle = subtitle;
        if (description) video.description = description;
        if (shortDescription !== undefined) video.shortDescription = shortDescription;
        if (imageUrl) video.imageUrl = imageUrl;
        if (videoUrl) video.videoUrl = videoUrl;
        if (accessType) video.accessType = accessType;
        if (duration) video.duration = duration;

        await video.save();

        res.json({
            success: true,
            message: 'Видео успешно обновлено',
            data: { video }
        });

    } catch (error) {
        console.error('Ошибка обновления видео:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при обновлении видео'
        });
    }
};

// Удаление видео (только для админа)
exports.deleteVideo = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);
        if (!video) {
            return res.status(404).json({
                success: false,
                message: 'Видео не найдено'
            });
        }

        await Video.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: 'Видео успешно удалено'
        });

    } catch (error) {
        console.error('Ошибка удаления видео:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при удалении видео'
        });
    }
}; 