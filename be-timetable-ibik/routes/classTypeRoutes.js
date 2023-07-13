// routes/classTypeRoutes.js

const express = require('express');
const router = express.Router();
const classTypeController = require('../controllers/classTypeController');

router.get('/classTypes', classTypeController.getAllClassTypes);
router.get('/classTypes/:id', classTypeController.getClassTypeById);
router.post('/classTypes', classTypeController.createClassType);
router.put('/classTypes/:id', classTypeController.updateClassType);
router.delete('/classTypes/:id', classTypeController.deleteClassType);

module.exports = router;
