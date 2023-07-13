// controllers/roomController.js

const Room = require('../models/Room');

// Menampilkan semua ruangan
const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Menampilkan satu ruangan berdasarkan ID
const getRoomById = async (req, res) => {
  try {
    const { id } = req.params;
    const room = await Room.findByPk(id);
    if (!room) {
      res.status(404).json({ error: 'Ruangan tidak ditemukan' });
    } else {
      res.json(room);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Membuat ruangan baru
const createRoom = async (req, res) => {
  try {
    const { name } = req.body;
    const room = await Room.create({ name });
    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Mengupdate ruangan berdasarkan ID
const updateRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const room = await Room.findByPk(id);
    if (!room) {
      res.status(404).json({ error: 'Ruangan tidak ditemukan' });
    } else {
      room.name = name;
      await room.save();
      res.json(room);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Menghapus ruangan berdasarkan ID
const deleteRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const room = await Room.findByPk(id);
    if (!room) {
      res.status(404).json({ error: 'Ruangan tidak ditemukan' });
    } else {
      await room.destroy();
      res.json({ message: 'Ruangan berhasil dihapus' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
};
