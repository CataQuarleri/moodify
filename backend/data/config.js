import mongoose from 'mongoose';
import 'dotenv/config'

const connectionString = process.env.MONGOATLAS_URI

export default async function connectToDb(){
    try {
        await mongoose.connect(connectionString);
        console.log('Connected to MongoDB');

    }  catch (err){
        console.log(err);
    } 

}