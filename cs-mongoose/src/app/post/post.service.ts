import Post from "./post.model";

export const getAllPost = async () => {
  const posts = await Post.find();
  return posts;
};
