import express from 'express'
// import db from './data/config.js'
import postRoutes from './routes/postRoutes.js'
import userRoutes from './routes/userRoutes.js'
import 'dotenv/config'
import cors from 'cors'
//This part is for authentication
import methodOverride from 'method-override' // Lets you use PUT or DELETE in places where the client doesn't support it
import cookieParser from 'cookie-parser' //saves session 
import session from 'express-session'
import bodyParser from 'body-parser'
import MongoStore from 'connect-mongo'

const app = express()
const PORT = 8080


app.use(cors())
app.use(express.json())
app.use('/api/post', postRoutes)
app.use('/api/user', userRoutes)


//Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json()); //allows us to pass data through forms
app.use(cookieParser()); //saves session for auth
app.use(methodOverride('_method'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); 

//This creates a session to save JWTs
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.ATLAS_URI
    }),
  
   
}))





app.listen(PORT, () => {
    console.log(`${PORT} is listening`)
})