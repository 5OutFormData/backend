import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    featured:Boolean,
    author:String,
    authorImageLink:String,
    heading:String,
    imageLink:String,
    summary:String,
    uploadDate: { type: Date, default: Date.now } 
})

export const blogModel = mongoose.model("blog",blogSchema);