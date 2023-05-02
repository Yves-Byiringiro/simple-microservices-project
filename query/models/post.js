const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    id: { type:Number, required: true},
    title: { type: String, minlength:5, required:true },
    content: { type: String, minlength:5, required:true },
    date: {type: String, minlength:5},
    comments: { type:Array, required: false}
})

const Post = mongoose.model('Post', postSchema);

exports.Post = Post;