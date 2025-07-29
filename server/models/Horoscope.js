const mongoose = require('mongoose');

const horoscopeSchema = new mongoose.Schema({
    // Диапазон дат
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
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
    // Контент (массив из title и списка ul)
    content: [{
        title: {
            type: String,
            required: true,
            trim: true
        },
        items: [{
            type: String,
            trim: true
        }]
    }]
}, {
    timestamps: true
});

// Индексы
horoscopeSchema.index({ startDate: -1, endDate: -1 });

module.exports = mongoose.model('Horoscope', horoscopeSchema); 