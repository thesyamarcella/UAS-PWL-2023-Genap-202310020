// controllers/lecturerController.js

const Lecturer = require('../models/Lecturer');

// Menampilkan semua dosen
const getAllLecturers = async (req, res) => {
  try {
    const lecturers = await Lecturer.findAll();
    res.json(lecturers);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Menampilkan satu dosen berdasarkan ID
const getLecturerById = async (req, res) => {
  try {
    const { id } = req.params;
    const lecturer = await Lecturer.findByPk(id);
    if (!lecturer) {
      res.status(404).json({ error: 'Dosen tidak ditemukan' });
    } else {
      res.json(lecturer);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Membuat dosen baru
const createLecturer = async (req, res) => {
  try {
    const { name } = req.body;
    const lecturer = await Lecturer.create({ name });
    res.status(201).json(lecturer);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Mengupdate dosen berdasarkan ID
const updateLecturer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const lecturer = await Lecturer.findByPk(id);
    if (!lecturer) {
      res.status(404).json({ error: 'Dosen tidak ditemukan' });
    } else {
      lecturer.name = name;
      await lecturer.save();
      res.json(lecturer);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Menghapus dosen berdasarkan ID
const deleteLecturer = async (req, res) => {
  try {
    const { id } = req.params;
    const lecturer = await Lecturer.findByPk(id);
    if (!lecturer) {
      res.status(404).json({ error: 'Dosen tidak ditemukan' });
    } else {
      await lecturer.destroy();
      res.json({ message: 'Dosen berhasil dihapus' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllLecturers,
  getLecturerById,
  createLecturer,
  updateLecturer,
  deleteLecturer,
};
