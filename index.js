import express from "express";
import cors from "cors";
import { formRouter } from "./routes/form.js";
import mongoose from "mongoose";
import { questionsRouter } from "./routes/questions.js";
import { blogRouter } from "./routes/blog.js";

const app = express();
app.use(express.json());
app.use(cors());

// Routes------------------
app.use("/form", formRouter);
app.use("/questions",questionsRouter);
app.use("/blog",blogRouter);

// connecting to database------------------
mongoose
  .connect(
    "mongodb+srv://ayush:vGN4L4lk6BlSlpp3@5out.zpv72yl.mongodb.net/5out?retryWrites=true&w=majority"
  )
  .catch((err) => console.log(err));

//   server listening
app.listen(3001);
app.get("/",(req,res)=>{
  res.json({'msg':'working'});
})
