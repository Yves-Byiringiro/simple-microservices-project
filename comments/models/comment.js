const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    content: { type:String, required: true, minlength: 5},
    username: { type: String, required:true },
    post_id: { type:Number, required: true}
})

const Comment = mongoose.model('Comment', commentSchema);

exports.Comment = Comment;