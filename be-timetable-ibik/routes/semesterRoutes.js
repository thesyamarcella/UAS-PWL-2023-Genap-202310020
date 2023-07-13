// routes/semesterRoutes.js

const express = require('express');
const router = express.Router();
const semesterController = require('../controllers/semesterController');

router.get('/semesters', semesterController.getAllSemesters);
router.get('/semesters/:id', semesterController.getSemesterById);
router.post('/semesters', semesterController.createSemester);
router.put('/semesters/:id', semesterController.updateSemester);
router.delete('/semesters/:id', semesterController.deleteSemester);

module.exports = router;
