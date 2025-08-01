const express = require('express');
const router = express.Router();
const writingController = require('../controllers/writingController');

router.post('/add', writingController.createWriting);
router.get('/all', writingController.getAllWritings);
router.get('/poet/:poetId', writingController.getWritingsByPoet);
router.get('/:id', writingController.getWritingById);
router.put('/:id', writingController.updateWriting);
router.delete('/:id', writingController.deleteWriting);

module.exports = router;
