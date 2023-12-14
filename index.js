import express from "express";
import cors from "cors";
import { formRouter } from "./routes/form.js";
import mongoose from "mongoose";
import { questionsRouter } from "./routes/questions.js";

const app = express();
app.use(express.json());
app.use(cors());

// Routes------------------
app.use("/form", formRouter);
app.use("/questions",questionsRouter);

// connecting to database------------------
mongoose
  .connect(
    "mongodb+srv://5outformdatabase:hbJ17QYx2Eh6aazT@5out.pfdpwua.mongodb.net/5Out?retryWrites=true&w=majority"
  )
  .catch((err) => console.log(err));

//   server listening
app.listen(3001);
