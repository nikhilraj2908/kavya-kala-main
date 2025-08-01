const express = require('express');
const router = express.Router();
const poetController = require('../controllers/poetController');

router.post('/add', poetController.createPoet);
router.get('/all', poetController.getAllPoets);
router.get('/:id', poetController.getPoetById);
router.put('/:id', poetController.updatePoet);
router.delete('/:id', poetController.deletePoet);

module.exports = router;
