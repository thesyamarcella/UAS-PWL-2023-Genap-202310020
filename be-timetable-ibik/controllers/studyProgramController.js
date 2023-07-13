// controllers/studyProgramController.js

const StudyProgram = require('../models/StudyProgram');

// Menampilkan semua program studi
const getAllStudyPrograms = async (req, res) => {
  try {
    const studyPrograms = await StudyProgram.findAll();
    res.json(studyPrograms);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Menampilkan satu program studi berdasarkan ID
const getStudyProgramById = async (req, res) => {
  try {
    const { id } = req.params;
    const studyProgram = await StudyProgram.findByPk(id);
    if (!studyProgram) {
      res.status(404).json({ error: 'Program studi tidak ditemukan' });
    } else {
      res.json(studyProgram);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Membuat program studi baru
const createStudyProgram = async (req, res) => {
  try {
    const { name } = req.body;
    const studyProgram = await StudyProgram.create({ name });
    res.status(201).json(studyProgram);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Mengupdate program studi berdasarkan ID
const updateStudyProgram = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const studyProgram = await StudyProgram.findByPk(id);
    if (!studyProgram) {
      res.status(404).json({ error: 'Program studi tidak ditemukan' });
    } else {
      studyProgram.name = name;
      await studyProgram.save();
      res.json(studyProgram);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Menghapus program studi berdasarkan ID
const deleteStudyProgram = async (req, res) => {
  try {
    const { id } = req.params;
    const studyProgram = await StudyProgram.findByPk(id);
    if (!studyProgram) {
      res.status(404).json({ error: 'Program studi tidak ditemukan' });
    } else {
      await studyProgram.destroy();
      res.json({ message: 'Program studi berhasil dihapus' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllStudyPrograms,
  getStudyProgramById,
  createStudyProgram,
  updateStudyProgram,
  deleteStudyProgram,
};
