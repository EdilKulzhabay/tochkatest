const mongoose = require('mongoose');

const practiceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    subtitle: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        maxlength: 200
    },
    imageUrl: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    },
    // Тип доступа
    accessType: {
        type: String,
        enum: ['free', 'paid', 'club'],
        default: 'free'
    },
    // Длительность в минутах
    duration: {
        type: Number,
        required: true,
        min: 1
    }
}, {
    timestamps: true
});

// Индексы
practiceSchema.index({ accessType: 1 });

module.exports = mongoose.model('Practice', practiceSchema); 