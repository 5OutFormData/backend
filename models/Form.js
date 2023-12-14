import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  hoursSpendToCook: String,
  howOftenCook: String,
  favouriteCusine: String,
});

export const formModel = mongoose.model("formInputData",formSchema)
