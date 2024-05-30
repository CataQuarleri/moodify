//reference to user (ID), each post has mood (emoji string) and color (hex)
//
import express from 'express'
import {getAllPosts, updatePost, postNewPost, addCommentToPost, seeAllCommentForOnePost, deleteOnePost} from '../controllers/postController.js'

const router = express.Router()

// grab all post 
router.get('/', getAllPosts)

// create new post
router.post('/', postNewPost)

//add comment to post

router.post('/:postId',addCommentToPost )

// get all comments for 

router.get('/:postId',seeAllCommentForOnePost )

//delete one post by post id

router.delete('/:postId',deleteOnePost )

export default router