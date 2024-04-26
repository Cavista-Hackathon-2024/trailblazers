import mongoose from "mongoose";

const Post = new mongoose.Schema({
  name: { type: String },
  location: { type: String },
});

const postSchema = mongoose.model("Post", Post);

export default postSchema;
