const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Создание папки для загрузок, если она не существует
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Настройка хранилища
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Определяем папку в зависимости от типа файла
        let uploadPath = uploadDir;
        
        if (file.fieldname === 'avatar') {
            uploadPath = path.join(uploadDir, 'avatars');
        } else if (file.fieldname === 'practice') {
            uploadPath = path.join(uploadDir, 'practices');
        } else if (file.fieldname === 'meditation') {
            uploadPath = path.join(uploadDir, 'meditations');
        } else if (file.fieldname === 'video') {
            uploadPath = path.join(uploadDir, 'videos');
        }
        
        // Создаем папку, если она не существует
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        // Генерируем уникальное имя файла
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

// Фильтр файлов
const fileFilter = (req, file, cb) => {
    // Разрешенные типы файлов
    const allowedImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    const allowedVideoTypes = ['video/mp4', 'video/avi', 'video/mov', 'video/wmv', 'video/flv'];
    const allowedAudioTypes = ['audio/mp3', 'audio/wav', 'audio/ogg', 'audio/m4a'];
    
    if (file.fieldname === 'avatar') {
        if (allowedImageTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Неподдерживаемый тип файла для аватара. Разрешены только изображения.'), false);
        }
    } else if (file.fieldname === 'practice' || file.fieldname === 'meditation') {
        if (allowedImageTypes.includes(file.mimetype) || allowedVideoTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Неподдерживаемый тип файла. Разрешены только изображения и видео.'), false);
        }
    } else if (file.fieldname === 'video') {
        if (allowedVideoTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Неподдерживаемый тип файла для видео.'), false);
        }
    } else if (file.fieldname === 'audio') {
        if (allowedAudioTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Неподдерживаемый тип файла для аудио.'), false);
        }
    } else {
        cb(new Error('Неизвестный тип файла.'), false);
    }
};

// Настройка multer
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: parseInt(process.env.MAX_FILE_SIZE) || 10 * 1024 * 1024, // 10MB по умолчанию
        files: 1 // Максимум 1 файл за раз
    }
});

// Middleware для обработки ошибок загрузки
const handleUploadError = (error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
                success: false,
                message: 'Файл слишком большой. Максимальный размер: 10MB'
            });
        }
        if (error.code === 'LIMIT_FILE_COUNT') {
            return res.status(400).json({
                success: false,
                message: 'Слишком много файлов. Максимум: 1 файл'
            });
        }
        return res.status(400).json({
            success: false,
            message: 'Ошибка загрузки файла'
        });
    }
    
    if (error.message) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
    
    next(error);
};

module.exports = {
    upload,
    handleUploadError
}; 