import express from "express";
import { formModel } from "../models/Form.js";

const router = express.Router();

router.get("/",async(req,res)=>{
    const user = await formModel.find();
    res.json(user);
})
router.post("/",async(req,res)=>{
    const user = await formModel.findByIdAndDelete(req.body.id);
    res.json({'msg':'done'});
})

export { router as formRouter };
