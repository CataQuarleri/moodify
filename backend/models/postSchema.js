//reference to user (ID), each post has mood (emoji string) and color (hex)
//check out populate on mongoose

import mongoose  from 'mongoose';

const postsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Refers to the 'users' collection
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
    emoji: {
        type: String,
        required: true
    },
    comments: [{
        text: {
            type: String,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User' // Refers to the 'users' collection
        },
        // user_name: {
        //     type: String,
        //     required: true
        // }
    }]
});

const Posts = mongoose.model('posts', postsSchema)
// export default mongoose.model('posts', postsSchema);
export default Posts