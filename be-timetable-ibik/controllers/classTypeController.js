// controllers/classTypeController.js

const ClassType = require('../models/ClassType');

// Menampilkan semua kelas
const getAllClassTypes = async (req, res) => {
  try {
    const classTypes = await ClassType.findAll();
    res.json(classTypes);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Menampilkan satu kelas berdasarkan ID
const getClassTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    const classType = await ClassType.findByPk(id);
    if (!classType) {
      res.status(404).json({ error: 'Kelas tidak ditemukan' });
    } else {
      res.json(classType);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Membuat kelas baru
const createClassType = async (req, res) => {
  try {
    const { name } = req.body;
    const classType = await ClassType.create({ name });
    res.status(201).json(classType);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Mengupdate kelas berdasarkan ID
const updateClassType = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const classType = await ClassType.findByPk(id);
    if (!classType) {
      res.status(404).json({ error: 'Kelas tidak ditemukan' });
    } else {
      classType.name = name;
      await classType.save();
      res.json(classType);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Menghapus kelas berdasarkan ID
const deleteClassType = async (req, res) => {
  try {
    const { id } = req.params;
    const classType = await ClassType.findByPk(id);
    if (!classType) {
      res.status(404).json({ error: 'Kelas tidak ditemukan' });
    } else {
      await classType.destroy();
      res.json({ message: 'Kelas berhasil dihapus' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllClassTypes,
  getClassTypeById,
  createClassType,
  updateClassType,
  deleteClassType,
};
