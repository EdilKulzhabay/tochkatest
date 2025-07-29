const express = require('express');
const router = express.Router();
const transitController = require('../controllers/transitController');
const { requireAdmin } = require('../middleware/auth');

// Публичные роуты
router.get('/', transitController.getAllTransits);
router.get('/:id', transitController.getTransitById);

// Админские роуты
router.post('/', requireAdmin, transitController.createTransit);
router.put('/:id', requireAdmin, transitController.updateTransit);
router.delete('/:id', requireAdmin, transitController.deleteTransit);

module.exports = router; 