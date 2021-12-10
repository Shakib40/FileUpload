const mongoose = require('mongoose');

// Student Schema

const studentSchema = new mongoose.Schema(
    {
      roll_no: { type: Number, required: true, unique: true },
      batch: { type: String, required: true },
      marks: { type: Number, required: true },
      evaluation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "evaluation",
        required: true,
      },
    },
    {
      versionKey: false,
    }
  );
  
 module.exports = mongoose.model("students", studentSchema);