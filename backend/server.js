import express from 'express'
// import db from './data/config.js'
import postRoutes from './routes/postRoutes.js'
import userRoutes from './routes/userRoutes.js'

const app = express()
const PORT = 8080


app.use(cors())
app.use(express.json())
app.use('/api/post', postRoutes)
app.use('/api/user', userRoutes)











app.listen(PORT, () => {
    console.log(`${PORT} is listening`)
})