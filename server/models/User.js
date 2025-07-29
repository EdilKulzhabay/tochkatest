const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String,
        unique: true,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    // Подписка
    subscription: {
        status: {
            type: String,
            enum: ['free', 'premium', 'expired'],
            default: 'free'
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        },
        plan: {
            type: String,
            enum: ['monthly', 'yearly'],
            default: 'monthly'
        }
    },
    // Членство в клубе
    clubMembership: {
        status: {
            type: String,
            enum: ['none', 'member', 'expired'],
            default: 'none'
        },
        joinDate: {
            type: Date
        },
        expireDate: {
            type: Date
        }
    },
    // Бонусы за заполнение дневника
    bonus: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

// Индексы для оптимизации запросов
userSchema.index({ email: 1 });
userSchema.index({ userName: 1 });

// Метод для хеширования пароля
userSchema.methods.hashPassword = async function() {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
};

// Метод для проверки пароля
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Метод для получения публичного профиля
userSchema.methods.getPublicProfile = function() {
    return {
        id: this._id,
        firstName: this.firstName,
        lastName: this.lastName,
        userName: this.userName,
        phone: this.phone,
        subscription: this.subscription,
        clubMembership: this.clubMembership,
        bonus: this.bonus
    };
};

// Middleware для хеширования пароля перед сохранением
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        await this.hashPassword();
    }
    next();
});

module.exports = mongoose.model('User', userSchema); 