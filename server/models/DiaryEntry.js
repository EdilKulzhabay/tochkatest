const mongoose = require('mongoose');

const diaryEntrySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    // Открытия дня
    openings: {
        type: String,
        trim: true
    },
    // Достижения дня
    achievements: {
        type: String,
        trim: true
    },
    // Благодарность
    gratitude: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

// Индексы
diaryEntrySchema.index({ userId: 1, date: -1 });

module.exports = mongoose.model('DiaryEntry', diaryEntrySchema); 