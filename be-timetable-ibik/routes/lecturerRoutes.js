// routes/lecturerRoutes.js

const express = require('express');
const router = express.Router();
const lecturerController = require('../controllers/lecturerController');

router.get('/lecturers', lecturerController.getAllLecturers);
router.get('/lecturers/:id', lecturerController.getLecturerById);
router.post('/lecturers', lecturerController.createLecturer);
router.put('/lecturers/:id', lecturerController.updateLecturer);
router.delete('/lecturers/:id', lecturerController.deleteLecturer);

module.exports = router;
