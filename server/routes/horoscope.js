const express = require('express');
const router = express.Router();
const horoscopeController = require('../controllers/horoscopeController');
const { requireAdmin } = require('../middleware/auth');

// Публичные роуты
router.get('/', horoscopeController.getAllHoroscopes);
router.get('/:id', horoscopeController.getHoroscopeById);

// Админские роуты
router.post('/', requireAdmin, horoscopeController.createHoroscope);
router.put('/:id', requireAdmin, horoscopeController.updateHoroscope);
router.delete('/:id', requireAdmin, horoscopeController.deleteHoroscope);

module.exports = router; 