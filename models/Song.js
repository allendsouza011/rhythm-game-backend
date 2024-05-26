const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
  title: String,
  artist: String,
  difficultyLevels: Array,
  filePath: String,
});

module.exports = mongoose.model('Song', SongSchema);
