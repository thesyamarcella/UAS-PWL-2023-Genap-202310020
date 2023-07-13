const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./config/database');
const lecturerRoutes = require('./routes/lecturerRoutes');
const roomRoutes = require('./routes/roomRoutes');
const classTypeRoutes = require('./routes/classTypeRoutes');
const studyProgramRoutes = require('./routes/studyProgramRoutes');
const semesterRoutes = require('./routes/semesterRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// const db = require("./models");
// db.sequelize.sync();

app.get("/", (req, res) => {
  res.send("Hello World!");
});  

app.use('/api', lecturerRoutes);
app.use('/api', roomRoutes);
app.use('/api', classTypeRoutes);
app.use('/api', studyProgramRoutes);
app.use('/api', semesterRoutes);
app.use('/api', scheduleRoutes);

// Sinkronisasi dengan database dan menjalankan server
sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server berjalan pada port 3000');
    });
  })
  .catch((error) => console.log('Gagal menyambung ke database:', error));
