import express from 'express'
const router = express.Router();
import bcrypt from 'bcrypt' // This encrypts and decrypts data for passwords
import jwt from 'jsonwebtoken'


const jwtSecret = process.env.JWT_SECRET;

//Middleware -Check Login (This is a guard to make sure the user is logged in successfully), use this anywhere authorization is required 
const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({message: 'Unauthorized: User must log in to proceed'});
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.userId = decoded.userId;
        next();
    } catch(error) {
        res.status(401).json({message: 'Unauthorized'});
    }
}


//CRUD Routes
// GET / Admin - Login Page
router.get('/admin', async (req, res) => {
    try {
    const locals = {
        title: "Admin",
        description: "This is sample text"
    }
       
    
        res.render('admin/index'); //Has not been created yet

    } catch (error) {
        console.log(error);
    }

});

//Routes
// POST / Admin - Check Login
router.post('/admin', async (req, res) => {
    try {
   const {username, password} = req.body;
   const user = await Users.findOne( {username} ); //We need the data from Tabitha

   if(!user) {
    return res.status(401).json({message: 'Invalid credentials'});
   }

   const isPasswordValid = await bcrypt.compare(password, user.password);

   if(!isPasswordValid) {
    return res.status(401).json({message: 'Invalid credentials'});
   }

   const token = jwt.sign({userId: user._id}, jwtSecret);
   res.cookie('token', token, { httpOnly: true}); //this creates a randomly assigned web token

   res.redirect('/dashboard');

    } catch (error) {
        console.log(error);
    }

});

//GET / Admin Dash -Check Login (can't get into the dashboard unless logged in)
router.get('/dashboard', authMiddleware, async (req, res) => {
    try {
      

        const data = await posts.find();
        res.render('admin/dashboard', {
        //...
        });
    } catch (error) {

    }

});

//GET / Admin - Create New Post
router.get('/add-post', authMiddleware, async (req, res) => {
    try {
    

        const data = await Post.find();
        res.render('admin/add-post', {
           //...
        });
    } catch (error) {

    }

});

//POST / Admin - Create New Post
router.post('/add-post', authMiddleware, async (req, res) => {
    try {
        
        try {
            const newPost = new Post({
                title: req.body.title,
                body: req.body.body
            });

            await Post.create(newPost);

        } catch (error) {
            console.log(error);
        }

        res.redirect('/dashboard');
    } catch (error) {
        console.log(error);
    }

});

//GET / Admin - Edit Post
router.get('/edit-post/:id', authMiddleware, async (req, res) => {
    try {
        const locals = {
            title: 'Edit Post',
            description: 'Free NodeJS User Management System'
        }

        const data = await Post.findOne({_id: req.params.id});

        res.render('admin/edit-post', {
           //...
        });
       
    } catch (error) {
        console.log(error);
    }

});

//PUT / Admin - Update Post
router.put('/edit-post/:id', authMiddleware, async (req, res) => {
    try {
        await Post.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            body: req.body.body,
            updatedAt: Date.now()
        });

        res.redirect(`/edit-post/${req.params.id}`);
       
    } catch (error) {
        console.log(error);
    }

});


//DELETE / Admin - Delete Post (from Edit Post)
router.delete('/edit-post/:id', authMiddleware, async (req, res) => {

    try {
        await Post.deleteOne( {_id: req.params.id});
        res.redirect('/dashboard');
    } catch (error) {
        console.log(error);
    }
});

//DELETE / Admin - Delete Post (from Dashboard)
router.delete('/delete-post/:id', authMiddleware, async (req, res) => {
    try {
        await Post.deleteOne( {_id: req.params.id});
        res.redirect('/dashboard');
    } catch (error) {
        console.log(error);
    }
});


//Routes
// POST / Admin - Register
router.post('/register', async (req, res) => {
    try {
   const {username, password} = req.body;
   const hashedPassword = await bcrypt.hash(password, 10);
    
    try {
        const user = await User.create({ username, password:hashedPassword });
        res.status(201).json({message: 'User Created', user });
    } catch (error) {
        if(error.code === 11000) {
            res.status(409).json({message: 'User already in use'});
        }
        res.status(500).json({message: 'Internal server error'});
    }

    } catch (error) {
        console.log(error);
    }

});

//GET / Admin Logout
router.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = router;