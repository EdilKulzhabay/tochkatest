const Transit = require('../models/Transit');

// Получение всех транзитов
exports.getAllTransits = async (req, res) => {
    try {
        const { page = 1, limit = 20 } = req.query;
        const skip = (page - 1) * limit;

        const transits = await Transit.find()
            .sort({ startDate: -1 })
            .skip(skip)
            .limit(parseInt(limit));

        const total = await Transit.countDocuments();

        res.json({
            success: true,
            data: {
                transits,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    pages: Math.ceil(total / limit)
                }
            }
        });

    } catch (error) {
        console.error('Ошибка получения транзитов:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при получении транзитов'
        });
    }
};

// Получение транзита по ID
exports.getTransitById = async (req, res) => {
    try {
        const transit = await Transit.findById(req.params.id);

        if (!transit) {
            return res.status(404).json({
                success: false,
                message: 'Транзит не найден'
            });
        }

        res.json({
            success: true,
            data: { transit }
        });

    } catch (error) {
        console.error('Ошибка получения транзита:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при получении транзита'
        });
    }
};

// Создание нового транзита (только для админа)
exports.createTransit = async (req, res) => {
    try {
        const { startDate, endDate, title, subtitle, description, content } = req.body;

        const transit = new Transit({
            startDate,
            endDate,
            title,
            subtitle,
            description,
            content
        });

        await transit.save();

        res.status(201).json({
            success: true,
            message: 'Транзит успешно создан',
            data: { transit }
        });

    } catch (error) {
        console.error('Ошибка создания транзита:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при создании транзита'
        });
    }
};

// Обновление транзита (только для админа)
exports.updateTransit = async (req, res) => {
    try {
        const { startDate, endDate, title, subtitle, description, content } = req.body;

        const transit = await Transit.findById(req.params.id);
        if (!transit) {
            return res.status(404).json({
                success: false,
                message: 'Транзит не найден'
            });
        }

        if (startDate) transit.startDate = startDate;
        if (endDate) transit.endDate = endDate;
        if (title) transit.title = title;
        if (subtitle) transit.subtitle = subtitle;
        if (description) transit.description = description;
        if (content) transit.content = content;

        await transit.save();

        res.json({
            success: true,
            message: 'Транзит успешно обновлен',
            data: { transit }
        });

    } catch (error) {
        console.error('Ошибка обновления транзита:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при обновлении транзита'
        });
    }
};

// Удаление транзита (только для админа)
exports.deleteTransit = async (req, res) => {
    try {
        const transit = await Transit.findById(req.params.id);
        if (!transit) {
            return res.status(404).json({
                success: false,
                message: 'Транзит не найден'
            });
        }

        await Transit.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: 'Транзит успешно удален'
        });

    } catch (error) {
        console.error('Ошибка удаления транзита:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при удалении транзита'
        });
    }
}; 