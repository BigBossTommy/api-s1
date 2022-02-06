const express = require("express")
const Actisans = require ("../models/actisans");
const router = express.Router();
const mongoose = require("mongoose");

router.use(express.json());




router.get("/actisans", async(req, res) => {
        try {
            const actisans = await Products.find()
            return res.status(200).json(products)
        } catch (error) {
            return res.status(505).json({ error })
        }
    },

)
router.get("/actisan/:id", async(req, res) => {
        try {
            const actisans = await Products.findById(req.params.id)
            if (!actisan)
                return res.status(404).json('This person does not exist')

            return res.status(200).json(product)
        } catch (error) {
            return res.status(505).json({ error })
        }
    },

)
router.post("actisans/:id", async(req, res) => {
        try {
            const { Firstname, Lastname, email, Phonenumber, Occupation, Address } = req.body;

            const actisans = await Products.findByIdAndupdate(req.params.id, { Firstname, Lastname, email, Phonenumber, Occupation, Address }, { new: true })
            if (!actisan)
                return res.status(404).json('This person does not exist')

            return res.status(200).json(product)
        } catch (error) {
            return res.status(505).json({ error })
        }
    },

)

router.delete("/actisans/:id", async(req, res) => {
        try {

            const actisans = await Products.findByIdAndDelete(req.params.id)

            if (!actisan)
                return res.status(404).json('This person does not exist')

            return res.status(200).json('Deleted successfully')
        } catch (error) {
            return res.status(505).json({ error })
        }
    },

)

router.put("/actisans", async(req, res) => {
        try {
            const { Firstname, Lastname, email, Phonenumber, Occupation, Address } = req.body;

            const newActisan = await new Products({ Firstname, Lastname, email, Phonenumber, Occupation, Address })
            await newActisan.save()

            return res.status(200).json(product)
        } catch (error) {
            return res.status(505).json('erroror')
        }
    },



)

// export default router
module.exports = router;