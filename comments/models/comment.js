const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    content: { type:String, required: true},
    post_id: { type:Number, required: true},
    cmt_status: { type: String, required: true}
})

const Comment = mongoose.model('Comment', commentSchema);

exports.Comment = Comment;