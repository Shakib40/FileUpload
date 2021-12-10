const mongoose = require('mongoose');

// Evaluation Schema

const evaluationSchema = mongoose.Schema(
    {
      date: { type: String, required: true },
      instructor: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users",
          required: true,
        },
      ],
      topic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "topic",
        required: true,
      },
    },
    {
      versionKey: false,
    }
  );
  
module.exports = mongoose.model("evaluation", evaluationSchema);