const express = require('express');
const router = express.Router();
const practiceController = require('../controllers/practiceController');
const { requireAdmin } = require('../middleware/auth');

// Публичные роуты
router.get('/', practiceController.getAllPractices);
router.get('/:id', practiceController.getPracticeById);

// Админские роуты
router.post('/', requireAdmin, practiceController.createPractice);
router.put('/:id', requireAdmin, practiceController.updatePractice);
router.delete('/:id', requireAdmin, practiceController.deletePractice);

module.exports = router; 