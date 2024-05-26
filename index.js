const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const songRoutes = require('./routes/songs');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/rhythm-game', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

app.use('/api/songs', songRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
