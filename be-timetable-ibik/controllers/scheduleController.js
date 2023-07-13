
const Schedule = require('../models/Schedule');
const Lecturer = require('../models/Lecturer');
const Semester = require('../models/Semester');
const classType = require('../models/ClassType');
const Room = require('../models/Room');
const studyProgram = require('../models/StudyProgram');

// Menampilkan semua jadwal
const getAllSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.findAll(
    );
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error getAllSchedule' });
  }
};

// Menampilkan satu jadwal berdasarkan ID
const getScheduleById = async (req, res) => {
  try {
    const { id } = req.params;
    const schedule = await Schedule.findByPk(id, {
      include: [Lecturer, Semester, classType, Room, studyProgram],
    });
    if (!schedule) {
      res.status(404).json({ error: 'Jadwal tidak ditemukan' });
    } else {
      res.json(schedule);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Membuat jadwal baru
const createSchedule = async (req, res) => {
  try {
    const { title, start, end, isHoliday, lecturerId, semesterId, classTypeId, roomId, studyProgramId } = req.body;
    const schedule = await Schedule.create({
      title,
      start,
      end,
      isHoliday,
      lecturerId: lecturerId,
      semesterId: semesterId,
      classTypeId: classTypeId,
      roomId: roomId,
      studyProgramId : studyProgramId,
    });
    res.status(201).json(schedule);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error createSchedule' });
  }
};

// Mengupdate jadwal berdasarkan ID
const updateSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, start, end, isHoliday, lecturerId, semesterId, classTypeId, roomId, studyProgramId } = req.body;
    const schedule = await Schedule.findByPk(id);
    if (!schedule) {
      res.status(404).json({ error: 'Jadwal tidak ditemukan' });
    } else {
      schedule.title = title;
      schedule.start = start;
      schedule.end = end;
      schedule.isHoliday = isHoliday;
      schedule.LecturerId = lecturerId;
      schedule.SemesterId = semesterId;
      schedule.classTypeId = classTypeId;
      schedule.RoomId = roomId;
      schedule.studyProgramId = studyProgramId;
      await schedule.save();
      res.json(schedule);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Menghapus jadwal berdasarkan ID
const deleteSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const schedule = await Schedule.findByPk(id);
    if (!schedule) {
      res.status(404).json({ error: 'Jadwal tidak ditemukan' });
    } else {
      await schedule.destroy();
      res.json({ message: 'Jadwal berhasil dihapus' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllSchedules,
  getScheduleById,
  createSchedule,
  updateSchedule,
  deleteSchedule,
};