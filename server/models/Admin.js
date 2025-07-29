const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
}, {
    timestamps: true
});

// Индекс
adminSchema.index({ userName: 1 });

// Метод для хеширования пароля
adminSchema.methods.hashPassword = async function() {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
};

// Метод для проверки пароля
adminSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Middleware для хеширования пароля перед сохранением
adminSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        await this.hashPassword();
    }
    next();
});

module.exports = mongoose.model('Admin', adminSchema); 