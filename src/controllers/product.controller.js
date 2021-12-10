const express = require("express");
const Products = require("../models/product.model");
const router = express.Router();

const upload  = require('../middlewares/fileUpload');

router.post('/' , upload.single("productImages"), async (req, res) => {
    
    try{
        const product = await Products.create({
            name: req.body.name,
            price: req.body.price,
            image_urls: req.file.path,
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
        const product = await Products.create({
            name: req.body.name,
            price: req.body.price,
            image_urls: filePaths,
        });
        return res.status(201).json( { product } );
    }
    catch(err){
        return res.status(500).json({ status : "Failed" , message : err.message }); 
    }
})

module.exports = router;

