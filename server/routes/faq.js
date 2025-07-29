const express = require('express');
const router = express.Router();
const faqController = require('../controllers/faqController');
const { requireAdmin } = require('../middleware/auth');

// Публичные роуты
router.get('/', faqController.getAllFAQs);
router.get('/:id', faqController.getFAQById);

// Админские роуты
router.post('/', requireAdmin, faqController.createFAQ);
router.put('/:id', requireAdmin, faqController.updateFAQ);
router.delete('/:id', requireAdmin, faqController.deleteFAQ);

module.exports = router; 