import Posts from '../models/postSchema.js';
import { Types } from 'mongoose';

// get all posts
const getAllPosts = async (req, res) => {
  try {
    console.log("requested to retrieve all posts")
    const result = await Posts.find({}); 
    if (!result || result.length === 0) {
        return res.status(404).send('Not found');
    }
    res.send(result).status(200);
} catch (error){
    console.error('Error retrieving posts: ', error);
    res.status(500).send('Internal Server Error')
}
};

// update one posts
const updatePost = async (req, res) => {
  const { id } = req.params;
  const { user_id, mood, color, emoji } = req.body;

  if (!Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such ID' });
  }
  const update = await Posts.findByIdAndUpdate(id, { ...req.body });
  if (!update) {
    return res.status(404).json({ error: 'no such item' });
  }
  res.status(200).json(update);
};

//create post
const postNewPost = async (req, res) => {
  const { user_id, mood, color, emoji } = req.body;

  let emptyFields = [];
  if (!user_id) {
    emptyFields.push('user_id');
  }
  if (!mood) {
    emptyFields.push('mood');
  }
  if (!color) {
    emptyFields.push('color');
  }
  if (!emoji) {
    emptyFields.push('emoji');
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'please fill in all the fields', emptyFields });
  }
  try {
    const user_id = req.user_id;
    const newPost = await Posts.create({ user_id, mood, color, emoji });
    res.status(200).json(newPost);
  } catch (error) {
    res.status(400).json({ error: 'can not create new post' });
  }
};

//delete post
const deleteOnePost = async (req, res) => {
  const { postId } = req.params;
  if (!Types.PostId.isValid(postId)) {
    return res.status(404).json({ error: 'no such ID' });
  }
  const deletePost = await Posts.findByIdAndDelete(postId);
  if (!deletePost) {
    return res.status(404).json({ error: 'no such post' });
  }
  res.status(200).json(deletePost);
};

//add comments
const addCommentToPost = async (req, res) => {
  try {
    const postUser = req.params.user;
    const { text } = req.body;

    if (!text) {
      return res
        .status(400)
        .json({ message: 'Please provide text for the comment.' });
    }

    const postComment = await Posts.find({ postUser }).populate('comments.user');

    if (!postComment) {
      return res.status(404).json({ message: 'Post not found.' });
    }

    postComment.comments.push({ text, user });
    await postComment.save();

    return res
      .status(200)
      .json({ message: 'Comment added successfully.', postComment });
  } catch (error) {
    console.error('Error adding comment:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

const seeAllCommentForOnePost = async (req, res) => {
  const postComment = await Posts.find({}).populate('comments.user');
  res.status(200).json(postComment);
};

export {
  getAllPosts,
  updatePost,
  postNewPost,
  deleteOnePost,
  addCommentToPost,
  seeAllCommentForOnePost
};
