const express = require("express");
const fs = require("fs");
const router = express.Router();
const upload  = require('../middlewares/fileUpload');

const Gallery = require("../models/gallery.model");

router.get("/", async(req, res) => {
    try {
        const gallery = await Gallery.find().populate("user_id").lean().exec();
        res.send({gallery});
    } catch(e) {
        res.send({message: e.message});
    }
})


router.post('/' , upload.single("productImages"), async (req, res) => {
    
    try{
        const product = await Gallery.create({
            user_id: req.body.user_id,
            pictures: req.file.path,
            
        });

        return res.status(201).json( { product } );
    }
    catch(err){
        return res.status(500).json({ status : "Failed" , message : err.message }); 
    }
})

router.post('/multiple' , upload.any("productImages"), async (req, res) => {
    const filePaths = req.files.map(file => file.path);

    try{
        const product = await Gallery.create({
            user_id: req.body.user_id,
            pictures: filePaths,
        });
        return res.status(201).json( { product } );
    }
    catch(err){
        return res.status(500).json({ status : "Failed" , message : err.message }); 
    }
})

router.delete("/:id", async(req, res) => {
    try {
        const gallery = await Gallery.findById(req.params.id);
        const pics = gallery.pictures;
        pics.forEach(pic => {
            fs.unlink(pic, (err) => {
                if(err)
                console.log(err);
                else
                console.log(`${pic} deleted`);
            });
        });
        const galleryDel = await Gallery.findByIdAndDelete(req.params.id);
        res.send({galleryDel});
    } catch(e) {
        res.send({message: e.message});
    }
})

module.exports = router;

