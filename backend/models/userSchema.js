//email, password and username - 
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    // No need to specify user_id field explicitly, MongoDB automatically creates _id
    user_name: {
        type: String,
        required: true,
        index: true
    },
    password: {
        type: String,
        required: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    }
});

export default mongoose.model('users', userSchema);