const FAQ = require('../models/FAQ');

// Получение всех FAQ
exports.getAllFAQs = async (req, res) => {
    try {
        const { page = 1, limit = 20 } = req.query;
        const skip = (page - 1) * limit;

        const faqs = await FAQ.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(parseInt(limit));

        const total = await FAQ.countDocuments();

        res.json({
            success: true,
            data: {
                faqs,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    pages: Math.ceil(total / limit)
                }
            }
        });

    } catch (error) {
        console.error('Ошибка получения FAQ:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при получении FAQ'
        });
    }
};

// Получение FAQ по ID
exports.getFAQById = async (req, res) => {
    try {
        const faq = await FAQ.findById(req.params.id);

        if (!faq) {
            return res.status(404).json({
                success: false,
                message: 'FAQ не найден'
            });
        }

        res.json({
            success: true,
            data: { faq }
        });

    } catch (error) {
        console.error('Ошибка получения FAQ:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при получении FAQ'
        });
    }
};

// Создание нового FAQ (только для админа)
exports.createFAQ = async (req, res) => {
    try {
        const { question, answer } = req.body;

        const faq = new FAQ({
            question,
            answer
        });

        await faq.save();

        res.status(201).json({
            success: true,
            message: 'FAQ успешно создан',
            data: { faq }
        });

    } catch (error) {
        console.error('Ошибка создания FAQ:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при создании FAQ'
        });
    }
};

// Обновление FAQ (только для админа)
exports.updateFAQ = async (req, res) => {
    try {
        const { question, answer } = req.body;

        const faq = await FAQ.findById(req.params.id);
        if (!faq) {
            return res.status(404).json({
                success: false,
                message: 'FAQ не найден'
            });
        }

        if (question) faq.question = question;
        if (answer) faq.answer = answer;

        await faq.save();

        res.json({
            success: true,
            message: 'FAQ успешно обновлен',
            data: { faq }
        });

    } catch (error) {
        console.error('Ошибка обновления FAQ:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при обновлении FAQ'
        });
    }
};

// Удаление FAQ (только для админа)
exports.deleteFAQ = async (req, res) => {
    try {
        const faq = await FAQ.findById(req.params.id);
        if (!faq) {
            return res.status(404).json({
                success: false,
                message: 'FAQ не найден'
            });
        }

        await FAQ.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: 'FAQ успешно удален'
        });

    } catch (error) {
        console.error('Ошибка удаления FAQ:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка сервера при удалении FAQ'
        });
    }
}; 