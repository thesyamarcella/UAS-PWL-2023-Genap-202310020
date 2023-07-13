// controllers/semesterController.js

const Semester = require('../models/Semester');

// Menampilkan semua semester
const getAllSemesters = async (req, res) => {
  try {
    const semesters = await Semester.findAll();
    res.json(semesters);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Menampilkan satu semester berdasarkan ID
const getSemesterById = async (req, res) => {
  try {
    const { id } = req.params;
    const semester = await Semester.findByPk(id);
    if (!semester) {
      res.status(404).json({ error: 'Semester tidak ditemukan' });
    } else {
      res.json(semester);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Membuat semester baru
const createSemester = async (req, res) => {
  try {
    const { name } = req.body;
    const semester = await Semester.create({ name });
    res.status(201).json(semester);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Mengupdate semester berdasarkan ID
const updateSemester = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const semester = await Semester.findByPk(id);
    if (!semester) {
      res.status(404).json({ error: 'Semester tidak ditemukan' });
    } else {
      semester.name = name;
      await semester.save();
      res.json(semester);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Menghapus semester berdasarkan ID
const deleteSemester = async (req, res) => {
  try {
    const { id } = req.params;
    const semester = await Semester.findByPk(id);
    if (!semester) {
      res.status(404).json({ error: 'Semester tidak ditemukan' });
    } else {
      await semester.destroy();
      res.json({ message: 'Semester berhasil dihapus' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllSemesters,
  getSemesterById,
  createSemester,
  updateSemester,
  deleteSemester,
};
