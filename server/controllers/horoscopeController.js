const Horoscope = require('../models/Horoscope');

// Получение всех гороскопов
exports.getAllHoroscopes = async (req, res) => {
    try {
        const { page = 1, limit = 20 } = req.query;
        const skip = (page - 1) * limit;

        const horoscopes = await Horoscope.find()
            .sort({ startDate: -1 })
            .skip(skip)
            .limit(parseInt(limit));

        const total = await Horoscope.countDocuments();

        res.json({
            success: true,
            data: {
                horoscopes,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    pages: Math.ceil(total / limit)
                }
            }
        });

    } catch (error) {
        console.error('Ошибка получения гороскопов:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при получении гороскопов'
        });
    }
};

// Получение гороскопа по ID
exports.getHoroscopeById = async (req, res) => {
    try {
        const horoscope = await Horoscope.findById(req.params.id);

        if (!horoscope) {
            return res.status(404).json({
                success: false,
                message: 'Гороскоп не найден'
            });
        }

        res.json({
            success: true,
            data: { horoscope }
        });

    } catch (error) {
        console.error('Ошибка получения гороскопа:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при получении гороскопа'
        });
    }
};

// Создание нового гороскопа (только для админа)
exports.createHoroscope = async (req, res) => {
    try {
        const { startDate, endDate, title, subtitle, description, content } = req.body;

        const horoscope = new Horoscope({
            startDate,
            endDate,
            title,
            subtitle,
            description,
            content
        });

        await horoscope.save();

        res.status(201).json({
            success: true,
            message: 'Гороскоп успешно создан',
            data: { horoscope }
        });

    } catch (error) {
        console.error('Ошибка создания гороскопа:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при создании гороскопа'
        });
    }
};

// Обновление гороскопа (только для админа)
exports.updateHoroscope = async (req, res) => {
    try {
        const { startDate, endDate, title, subtitle, description, content } = req.body;

        const horoscope = await Horoscope.findById(req.params.id);
        if (!horoscope) {
            return res.status(404).json({
                success: false,
                message: 'Гороскоп не найден'
            });
        }

        if (startDate) horoscope.startDate = startDate;
        if (endDate) horoscope.endDate = endDate;
        if (title) horoscope.title = title;
        if (subtitle) horoscope.subtitle = subtitle;
        if (description) horoscope.description = description;
        if (content) horoscope.content = content;

        await horoscope.save();

        res.json({
            success: true,
            message: 'Гороскоп успешно обновлен',
            data: { horoscope }
        });

    } catch (error) {
        console.error('Ошибка обновления гороскопа:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при обновлении гороскопа'
        });
    }
};

// Удаление гороскопа (только для админа)
exports.deleteHoroscope = async (req, res) => {
    try {
        const horoscope = await Horoscope.findById(req.params.id);
        if (!horoscope) {
            return res.status(404).json({
                success: false,
                message: 'Гороскоп не найден'
            });
        }

        await Horoscope.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: 'Гороскоп успешно удален'
        });

    } catch (error) {
        console.error('Ошибка удаления гороскопа:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при удалении гороскопа'
        });
    }
}; 