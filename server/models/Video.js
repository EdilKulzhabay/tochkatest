const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
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
    // Длительность в секундах
    duration: {
        type: Number,
        min: 1
    }
}, {
    timestamps: true
});

// Индексы
videoSchema.index({ accessType: 1 });

module.exports = mongoose.model('Video', videoSchema); 