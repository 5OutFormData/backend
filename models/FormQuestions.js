import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
first:String,
second:String,
third:String,
thirdOptions:[String],
fourth:String,
fourthOptions:[String],
fifth:String,
fifthOptions:[String],
})

export const questionModal = mongoose.model("formQuestions",questionSchema);


