//reference to user (ID), each post has mood (emoji string) and color (hex)
//check out populate on mongoose

import mongoose from 'mongoose';

const postsSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    mood: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: false
    }
});


export default mongoose.model(postsSchema);