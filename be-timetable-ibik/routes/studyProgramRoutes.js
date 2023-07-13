// routes/studyProgramRoutes.js

const express = require('express');
const router = express.Router();
const studyProgramController = require('../controllers/studyProgramController');

router.get('/studyPrograms', studyProgramController.getAllStudyPrograms);
router.get('/studyPrograms/:id', studyProgramController.getStudyProgramById);
router.post('/studyPrograms', studyProgramController.createStudyProgram);
router.put('/studyPrograms/:id', studyProgramController.updateStudyProgram);
router.delete('/studyPrograms/:id', studyProgramController.deleteStudyProgram);

module.exports = router;
