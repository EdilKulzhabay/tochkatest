const express = require('express');
const router = express.Router();
const meditationController = require('../controllers/meditationController');
const { requireAdmin } = require('../middleware/auth');

// Публичные роуты
router.get('/', meditationController.getAllMeditations);
router.get('/:id', meditationController.getMeditationById);

// Админские роуты
router.post('/', requireAdmin, meditationController.createMeditation);
router.put('/:id', requireAdmin, meditationController.updateMeditation);
router.delete('/:id', requireAdmin, meditationController.deleteMeditation);

module.exports = router; 