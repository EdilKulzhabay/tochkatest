const express = require('express');
const router = express.Router();
const diaryController = require('../controllers/diaryController');
const { auth } = require('../middleware/auth');

// Все роуты требуют аутентификации
router.use(auth);

// Получение записей пользователя
router.get('/', diaryController.getUserEntries);

// Получение записи по ID
router.get('/:id', diaryController.getEntryById);

// Создание новой записи
router.post('/', diaryController.createEntry);

// Обновление записи
router.put('/:id', diaryController.updateEntry);

// Удаление записи
router.delete('/:id', diaryController.deleteEntry);

module.exports = router; 