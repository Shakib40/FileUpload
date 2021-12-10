const mongoose = require('mongoose');

// Topic Schema

const topicSchema = new mongoose.Schema(
    {
      topic: { type: String, required: true, unique: true },
    },
    {
      versionKey: false,
    }
  );
  
  module.exports = mongoose.model("topic", topicSchema);