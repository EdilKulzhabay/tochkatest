const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');
const { requireAdmin } = require('../middleware/auth');

// Публичные роуты
router.get('/', videoController.getAllVideos);
router.get('/:id', videoController.getVideoById);

// Админские роуты
router.post('/', requireAdmin, videoController.createVideo);
router.put('/:id', requireAdmin, videoController.updateVideo);
router.delete('/:id', requireAdmin, videoController.deleteVideo);

module.exports = router; 