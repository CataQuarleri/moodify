import express from 'express'
// import {userLogin, userSignup} from '../controllers/userController.js'
const router = express.Router()

//user login route
router.post('/login', userLogin)

router.post('/register', userSignup)




export default router

