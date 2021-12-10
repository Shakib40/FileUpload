const express = require("express");
const User = require("../models/user.model");
const router = express.Router();
const upload  = require('../middlewares/fileUpload');


router.post('/' , upload.single("profileImage"), async (req, res) => {
    
  try{
      const product = await User.create({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          profile_pic: req.file.path,
      });
      return res.status(201).json( { product } );
  }
  catch(err){
      return res.status(500).json({ status : "Failed" , message : err.message }); 
  }
})

router.get("", async (req, res) => {
  try {
    const users = await User.find().lean().exec();

    return res.send({ users });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

//--------------------------USER CRUD ------------------------------

// router.post("", async (req, res) => {
//   try {
//     const user = await User.create(req.body);

//     return res.status(201).send(user);
//   } catch (e) {
//     return res.status(500).json({ message: e.message, status: "Failed" });
//   }
// });

// router.get("", async (req, res) => {
//   try {
//     const users = await User.find().lean().exec();

//     return res.send({ users });
//   } catch (e) {
//     return res.status(500).json({ message: e.message, status: "Failed" });
//   }
// });

// router.get("/:id", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).lean().exec();

//     return res.send(user);
//   } catch (e) {
//     return res.status(500).json({ message: e.message, status: "Failed" });
//   }
// });

// router.patch("/:id", async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     })
//       .lean()
//       .exec();

//     return res.status(201).send(user);
//   } catch (e) {
//     return res.status(500).json({ message: e.message, status: "Failed" });
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id).lean().exec();

//     return res.status(200).send(user);
//   } catch (e) {
//     return res.status(500).json({ message: e.message, status: "Failed" });
//   }
// });

module.exports = router;
