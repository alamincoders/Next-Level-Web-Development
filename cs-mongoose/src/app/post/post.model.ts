import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  userId: {
    type: Number,
  },
  id: {
    type: Number,
  },
  title: {
    type: String,
    requeued: true,
  },
  body: {
    type: String,
    required: true,
    trim: true,
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
