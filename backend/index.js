import express from 'express'
import dotenv from 'dotenv'
import mongoose from  'mongoose'
import cors from 'cors'
import cookieParser  from 'cookie-parser'
import path from 'path'

import tourRoute from './router/tour.js'
import userRoute from './router/users.js'
import authRoute from './router/auth.js'
import reviewRoute from './router/reviews.js'
import bookRoute from './router/book.js'

dotenv.config()
const app = express()
const port = process.env.PORT ||4000 
const corsPotions = {
    origin:true,
    credentials:true
}
//Database connection
const connect  =  async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MongoDB database connected');
    } catch (err) {
        console.log('MongoDB database connection faild' + err);        
    }
}
// Middleware
app.use(express.json())
app.use(cors(corsPotions))
app.use(cookieParser())
app.use('/api/v1/tours' ,tourRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/review', reviewRoute)
app.use('/api/v1/book', bookRoute)

app.listen(port, ()=> {
  connect()
   console.log(`server listening on port ${port}`);
})