const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { auth, requireAdmin } = require('../middleware/auth');

// Роуты для аутентифицированных пользователей
router.put('/subscription', auth, userController.updateSubscription);
router.put('/club-membership', auth, userController.updateClubMembership);

// Роуты для администраторов
router.get('/', requireAdmin, userController.getAllUsers);
router.get('/:id', requireAdmin, userController.getUserById);
router.put('/:id/subscription', requireAdmin, userController.updateSubscription);
router.put('/:id/club-membership', requireAdmin, userController.updateClubMembership);
router.delete('/:id', requireAdmin, userController.deleteUser);

module.exports = router; 