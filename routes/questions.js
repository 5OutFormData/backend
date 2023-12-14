import express from 'express';
import { questionModal } from '../models/FormQuestions.js';

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const question = await questionModal.findOne();
    res.json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newQuestion = req.body;
    await questionModal.findOneAndUpdate({}, newQuestion, { upsert: true });
    res.json({ msg: 'Form has been updated' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { router as questionsRouter };
