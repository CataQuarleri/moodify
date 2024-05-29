const posts = require('../models/postSchema');
const mongoose = require('mongoose');

// get all posts
const getAllPosts = async (req, res) => {
  const posts = await posts.find({});
  res.status(200).json(posts);
};

// update one posts
const updatePost = async (req, res) => {
  const { id } = req.params;
  const { user_id, mood, color, emoji } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such ID' });
  }
  const update = await Products.findByIdAndUpdate(id, { ...req.body });
  if (!update) {
    return res.status(404).json({ error: 'no such item' });
  }
  res.status(200).json(update);
};

//create post
const postNewPost = async (req, res) => {
  const { user_id, mood, color, emoji } = req.body;

  let emptyFields = [];
  if (user_id) {
    emptyFields.push('user_id');
  }
  if (mood) {
    emptyFields.push('mood');
  }
  if (color) {
    emptyFields.push('color');
  }
  if (emoji) {
    emptyFields.push('emoji');
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'please fill in all the fields', emptyFields });
  }
  try {
    const user_id = req.user_id;
    const newPost = await posts.create({ user_id, mood, color, emoji });
    res.status(200).json(newPost);
  } catch (error) {
    res.status(400).json({ error: 'can not create new product' });
  }
};

//delete post
const deleteOnePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such ID' });
  }
  const deletePost = await posts.findByIdAndDelete(id);
  if (!deletePost) {
    return res.status(404).json({ error: 'no such post' });
  }
  res.status(200).json(deletePost);
};

//add comments
const addCommenttoPost = async (req, res) => {
  try {
    const postUser = req.params.user;
    const { text } = req.body;

    if (!text) {
      return res
        .status(400)
        .json({ message: 'Please provide text for the comment.' });
    }

    const postComment = await post.find({ postUser }).populate('comments.user');

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
  const postComment = await posts.find({}).populate('comments.user');
  res.status(200).json(postComment);
};

module.exports = {
  getAllPosts,
  updatePost,
  postNewPost,
  deleteOnePost,
  addCommenttoPost,
};
