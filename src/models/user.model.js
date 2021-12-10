const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    profile_pic: [{ type: String, required: true }],
  },
  {
    versionKey: false,
  }
);
module.exports = mongoose.model("users", userSchema);


// const userSchema = new mongoose.Schema(
//     {
//       first_name: { type: String, required: true },
//       last_name: { type: String, required: false },
//       gender: { type: String, required: false, default: "Male" },
//       date_of_birth: { type: String, required: true },
//     },
//     {
//       versionKey: false,
//     }
//   );
  
//  module.exports = mongoose.model("users", userSchema);